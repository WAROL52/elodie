import { Prisma, PrismaClient, } from "@prisma/client";
import { prismaServerSide } from "../prismaLibs/prismaServerSide";

export type PrismaModelName = Prisma.ModelName
export type PrismaModelNameUncapitalize = Uncapitalize<Prisma.ModelName>
export type PrismaClientType = {
    [x in PrismaModelNameUncapitalize]: PrismaClient[Uncapitalize<x>]
}
// export type PrismaIncludeType<T extends PrismaModelName>=Parameters<>
export type PrismaActionName = Prisma.PrismaAction

export type PrismaAction<M extends PrismaModelNameUncapitalize, A extends keyof PrismaClientType[M]> = PrismaClientType[M][A] extends (...arg: any) => any ? PrismaClientType[M][A] : never

export type PrismaModel<T extends PrismaModelNameUncapitalize> = ReturnType<PrismaAction<T, "findFirst">> extends Promise<infer R> ? R : never

export type PrismaArgs<M extends PrismaModelNameUncapitalize, A extends keyof PrismaClientType[M]> = Parameters<PrismaAction<M, A>>[0]
export type PrismaInclude<M extends PrismaModelNameUncapitalize> = "include" extends keyof Required<PrismaArgs<M, "findFirst">> ? PrismaArgs<M, "findFirst">["include"] : never

export type EmailWith<T extends Prisma.EmailsInclude> = Prisma.EmailsGetPayload<{ include: T }>
export type UserWith<T extends Prisma.UsersInclude> = Prisma.UsersGetPayload<{ include: T }>
export type MessageWith<T extends Prisma.MessagesInclude> = Prisma.MessagesGetPayload<{ include: T }>
export type TachesWith<T extends Prisma.TachesInclude> = Prisma.TachesGetPayload<{ include: T }>
export type FilesWith<T extends Prisma.FilesInclude> = Prisma.FilesGetPayload<{ include: T }>