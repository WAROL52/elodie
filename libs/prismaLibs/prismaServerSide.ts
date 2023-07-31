import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Emails, PrismaClient, Users } from "@prisma/client";
import { getServerSession } from "next-auth";
import { prismaClient } from "../prismaClientQuery/prismaService";

export const prismaServerSide = prismaClient.$extends({
    name: "prismaServerSide",
    query: {
        $allModels: {
            async $allOperations({ args, model, operation, query }) {



                console.log("[Prisma]:back-end->", model, operation);


                return query(args)
            }
        }
    }
}).$extends({
    name: "reponse",
    result: {
        users: {
            isOnline: {
                needs: { onlineAt: true },
                compute({ onlineAt }) {
                    const times = Date.now() - onlineAt.getTime()
                    const timesReferences = 1000 * 60
                    return times <= timesReferences
                },
            }
        }
    }
})
export type makeOnlineProps = {
    user: Users
}
async function prismaGuard({ args, model, operation }: { args: object, model: string, operation: string, query: string }) {
    const oprations: typeof operation[] = ["create", "delete", "deleteMany", "update", "updateMany", "upsert"]
    const session = await getServerSession(authOptions)
    if (session && session.user?.email) {
        const email = await prismaClient.emails.findUnique({
            where: { email: session.user?.email },
            include: { User: true }
        })
        if (email) {
            const user = email.User
            if (user) {
                const value = await makeOnline({ user })
                if (oprations.includes(operation)) {
                    // await createHistoriques({
                    //     model,
                    //     operation,
                    //     args:argsToJson(args),
                    //     userAuthorId:user.id
                    // })
                }
            }
        }
    }
}
async function makeOnline({ user }: makeOnlineProps) {
    return await prismaClient.users.update({
        where: { id: user.id },
        data: {
            // onlineAt:new Date().toISOString()
        }
    })
}

export type createNotificationsProps = {
    args: string
    model: string
    operation: string
    userAuthorId: number
}
async function createHistoriques({ args, model, operation, userAuthorId }: createNotificationsProps) {
    const historiques = {
        model: model,
        operation,
        args: JSON.stringify(args),
        userAuthorId
    }
    await prismaClient.historiques.create({ data: historiques })
    const notificationsTypes = await prismaClient.notificationsType.findMany({
        where: { model, operation },
        include: { NotificationsSettings: { include: { user: { include: { email: true } } } } }
    })
    const notificationsSettings = notificationsTypes.filter(notificationsType => {
        return isArgsMatch(notificationsType.args, args)
    }).map(notificationsType => notificationsType.NotificationsSettings).flat()

    const usersShouldSendNotifications = notificationsSettings
        .filter(setting => setting.isSubscribe)
        .map(setting => setting.user)

    const notifications = usersShouldSendNotifications
        .map(user => {
            return prismaClient.notifications.create({
                data: {
                    htmlValue: "",
                    usersId: user.id,
                    notificationsTypeId: 0
                }
            })
        })
    await Promise.all(notifications)
}
function isArgsMatch(argsJson: string, argsData: string): boolean {
    const data1 = JsonToArgs(argsJson)
    const data2 = JsonToArgs(argsData)
    const isMatch = (d1: any, d2: any): boolean => Object.entries(d1).every(([key, value1]) => {
        const value2 = d2[key]
        if (typeof value2 == "object" && typeof value1 == "object") {
            return isMatch(value1, value2)
        }
        return value1 == value2
    })
    return isMatch(data1, data2)
}
function argsToJson(args: object): string {
    return JSON.stringify(args || "{}")
}
function JsonToArgs(jsonString: string): object {
    return JSON.parse(jsonString || "{}")
}