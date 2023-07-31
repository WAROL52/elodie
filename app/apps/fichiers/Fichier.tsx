import React from "react";
import { FichierItem } from "./FichierItem";
import { Importer } from "./Importer";
import { FilesWith } from "@/libs/prisma/prismaUtility";
import { PropsFile } from "./Storage";
type Props = {
  files: PropsFile[];
};
export function Fichier({ files }: Props) {
  return (
    <>
      <div className="d-flex flex-wrap ">
        <h5 className="font-size-16 me-3">Fichiers</h5>
        <div className="ms-auto">
          <Importer />
        </div>
      </div>
      <div style={{ height: "64vh" }} className="ui-overflow-auto debug">
        <table className="table align-middle table-nowrap table-hover mb-0 ">
          <thead className="table-light debug-1">
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Date de creation</th>
              <th scope="col">Taille</th>
              <th scope="col" colSpan={2}>
                Proprietaire
              </th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <FichierItem key={file.id} file={file} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
