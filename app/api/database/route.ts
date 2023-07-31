
import {
  createPrismaClientServer,
  PrismaClientQueryRequestBody,
} from "@/libs/prismaClientQuery/prismaClientQuery";
import { prismaClient } from "@/libs/prismaClientQuery/prismaService";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server'
const PrismaClientServer = createPrismaClientServer(prismaServerSide);
export async function POST(
  req: Request
) {
  return await post<
    PrismaClientQueryRequestBody<typeof prismaClient>
  >(
    req,
    // @ts-ignore
    async ({ body }) => await PrismaClientServer(body)
  );
}
export type ApiServiceCallbackOption<B> = {
  body: B
}
async function post<Body>(
  req: Request,
  callback: (option: ApiServiceCallbackOption<Body>) => unknown,
) {
  if (req.method == "POST") {
    try {
      console.log("******************************");
      const body = await req.json()
      const dataRes = await callback({ body });

      return NextResponse.json(dataRes, { status: 200 })
    } catch (error) {
      console.log(`
      [DATABASE:ERROR]--------------------------
      ${error}
      --------------------------------------
      `);

      return NextResponse.json({ message: "error server!", error }, { status: 500 });
    }
  }
  return NextResponse.json({ message: "bad request!" }, { status: 500 });
}