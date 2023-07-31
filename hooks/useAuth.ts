"use client"
import { UserWith } from "@/libs/prisma/prismaUtility"
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient"
import { Emails } from "@prisma/client"
import { signIn, signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { use, useEffect, useState } from "react"

export type LoginType = {
  email: string
  rememberMe: boolean
  password: string
}
export type RegisterType = {
  email: string
  password: string
  firstname: string
  lastname: string
}
export default function useAuth({ required = false }: { required: boolean } = { required: false }) {
  const { data, status, update } = useSession({
    required, onUnauthenticated() {
      if (required) {
        redirect("/login")
      }
    },
  });
  const [loginError, setLoginError] = useState<string | null>(null)
  const [user, setUser] = useState<UserWith<{ email: true }> | null>(null)
  const [isUserLoading, setUserLoading] = useState<boolean>(false)
  const [registerError, setRegisterError] = useState<string | null>(null)
  const prisma = usePrismaQuery();
  const session = data
  const getUser = async () => {
    if (isUserLoading) return
    setUserLoading(true)
    const user = await prisma.emails.findUnique({
      where: {
        email: session?.user?.email || ""
      },
      include: {
        User: {
          include: {
            email: true
          }
        }
      }
    })
    setUser(user?.User || null)
    setUserLoading(false)
  }
  useEffect(() => {
    getUser()
  }, [])
  return {
    session, status, update, loginError, registerError, isUserLoading, user,
    clearLoginError: () => setLoginError(null),
    clearRegisterError: () => setRegisterError(null),
    async login({ email, password, rememberMe }: LoginType) {
      if (status == "unauthenticated") {
        const res = await toSignin(email, password, rememberMe)
        return res?.ok
      }
    },
    async logout() {
      signOut({ callbackUrl: "/login" })
    },
    async register({ email, password, firstname, lastname }: RegisterType) {
      const emailFound = await prisma.emails.findUnique({ where: { email }, include: { User: true } })
      const emailId = emailFound?.id

      if (!emailId) {
        return setRegisterError("Votre adresse email n'est pas valide!");
      }
      if (emailFound.User) {
        return setRegisterError("Vous avez deja creer un compte avec cette adresse email! ");
      }
      const newUser = await prisma.users.create({
        data: { lastname, firstname, emailId }
      })
      const emailUpdated = await prisma.emails.update({
        where: { email },
        data: { password }
      })
      const res = await toSignin(email, password, false)
    }
  }
  async function toSignin(email: string, password: string, rememberMe: boolean) {
    const emailFound = await prisma.emails.findUnique({ where: { email, password }, include: { User: true } })
    if (!emailFound) {
      return setLoginError("Votre adresse email ou mots de passe incorrect!")
    }
    if (!emailFound.User) {
      return setLoginError("Inscrivez vous d'abord!")
    }
    return await signIn("credentials", {
      callbackUrl: "/apps",
      email, password, rememberMe
    })
  }
}

