import React from "react";
import { Storage } from "./Storage";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";

type Props = {};

export default async function page({}: Props) {
  const files = await prismaServerSide.files.findMany({
    include: {
      UserOwner: { include: { email: true } },
      FolderParent: true,
    },
  });
  return (
    <div className="card border">
      <Storage files={files} />
    </div>
  );
}
