import React from "react";
import { Departement } from "./Departement";
import { Dossiers } from "./Dossiers";
import { Fichier } from "./Fichier";
import { FilesWith } from "@/libs/prisma/prismaUtility";
export type PropsFile = FilesWith<{
  FolderParent: true;
  UserOwner: { include: { email: true } };
}>;
type Props = {
  files: PropsFile[];
};
export function Storage({ files }: Props) {
  return (
    <div className="card-body debug-1">
      {/* <Departement /> */}
      {/* end row */}
      {/* <Dossiers /> */}
      {/* end row */}
      <Fichier files={files} />
    </div>
  );
}
