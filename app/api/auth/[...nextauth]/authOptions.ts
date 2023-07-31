import { UserWith } from "@/libs/prisma/prismaUtility"
import { prismaClient } from "@/libs/prismaClientQuery/prismaService"
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide"
import { Emails, Prisma, Users } from "@prisma/client"
import { UserArgs } from "@prisma/client/runtime/library"
import { NextAuthOptions, Session, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { redirect } from "next/navigation"
// (cmd $) openssl rand -base64 32
// (.env) NEXTAUTH_SECRET
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { type: "email", label: "Email", placeholder: "Votre email..." },
        password: { label: "Password", type: "password", placeholder: "Votre mots de passe..." }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const email = await prismaClient.emails.findUnique({ where: { email: credentials?.email, password: credentials?.password } })

        if (email) {
          // Any object returned will be saved in `user` property of the JWT
          return email
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },



    })
  ],
}
export type AuthServerSide<K extends Prisma.UsersInclude> = {
  email: Emails
  user: UserWith<K>
  session: Session
}

export type getAuthServerSideParams<T extends true | false, K extends Prisma.UsersInclude> = {
  require: T
  include?: K
}
export async function getAuthServerSide<T extends true | false = false, K extends Prisma.UsersInclude = {}>({ require, include }: getAuthServerSideParams<T, K> = { require: false } as { require: T })
  : Promise<T extends false ? (null | AuthServerSide<K>) : AuthServerSide<K>> {
  const session = await getServerSession()
  const redirectToLogin = () => {
    if (require) {
      redirect("/login")
    }
    return null
  }
  // @ts-ignore
  if (!session) return redirectToLogin()

  const email = await prismaServerSide.emails.findUnique({
    where: {
      email: session?.user?.email || ""
    },
    include: {
      User: {
        include
      }
    }
  })
  // @ts-ignore
  if (!email) return redirectToLogin()
  const user = email.User
  // @ts-ignore
  if (!user) return redirectToLogin()
  // @ts-ignore
  return {
    email, user, session
  }
}