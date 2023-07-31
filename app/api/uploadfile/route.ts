import { prismaServerSide } from '@/libs/prismaLibs/prismaServerSide';
import { getAuthServerSide } from '../auth/[...nextauth]/authOptions';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
    const { user } = await getAuthServerSide({ require: true })
    const data = await req.formData()
    const file = data.get("file") as File
    const byte = Buffer.from(await file.arrayBuffer())
    const newFile = await prismaServerSide.files.create({
        data: {
            content: byte,
            meta: "{}",
            name: file.name,
            size: file.size,
            type: file.type,
            UserOwnerId: user.id
        }
    })
    return NextResponse.json({ message: "ok" }, { status: 200 })
}