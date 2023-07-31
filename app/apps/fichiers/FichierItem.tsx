import { FilesWith } from "@/libs/prisma/prismaUtility";
import dayjs from "dayjs";
import React from "react";
import { PropsFile } from "./Storage";
import { DeleteFile } from "./DeleteFile";
import { DownloadFile } from "./DownloadFile";
export type Props = {
  file: PropsFile;
};
export function FichierItem({ file }: Props) {
  return (
    <tr>
      <td>
        <a href="javascript: void(0);" className="text-dark fw-medium">
          <i className="mdi mdi-file-document font-size-16 align-middle text-primary me-2" />{" "}
          {file.name}
        </a>
      </td>
      <td> {dayjs(file.createdAt).format("DD/MM/YYYY à HH:mm")} </td>
      <td> {getSizeFile(file.size)} </td>
      <td>{file.UserOwner?.email?.email}</td>
      <td>
        <div className="dropdown">
          <a
            className="font-size-16 text-muted"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
          >
            <i className="mdi mdi-dots-horizontal" />
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">
              Open
            </a>
            <a className="dropdown-item" href="#">
              Edit
            </a>
            <a className="dropdown-item" href="#">
              Rename
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Remove
            </a>
          </div>
        </div>
      </td>
      <td>
        <div className=" text-center">
          <DownloadFile file={file} />
          <DeleteFile file={file} />
        </div>
      </td>
    </tr>
  );
}
export function getSizeFile(size: number) {
  return size;
}
