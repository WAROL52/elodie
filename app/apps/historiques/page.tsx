import { prismaClient } from "@/libs/prismaClientQuery/prismaService";
import { prismaClientSide } from "@/libs/prismaLibs/prismaClientSide";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const historiques = await prismaServerSide.emails.findMany();
  return <div>historiques</div>;
}
