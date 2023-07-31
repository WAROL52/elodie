"use client";
import WidgetNewUser from "@/components/components-ui/Widgets/WidgetNewUser/WidgetNewUser";
import WidgetUserHandler from "@/components/components-ui/Widgets/WidgetUserHandler/WidgetUserHandler";
import { prismaClientSide } from "@/libs/prismaLibs/prismaClientSide";
import { Emails, EmailsPayload, Users, Prisma } from "@prisma/client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";

type Props = {
  emails: Emails[];
};
export default function ListEmail({ emails }: Props) {
  return (
    <>
      <div className="container-fluid ui-text-right px-3">
        <WidgetNewUser />
      </div>
      <div className="table-responsive p-0">
        <table className="table align-items-center mb-0">
          <thead>
            <tr>
              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Utilisateurs
              </th>
              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                Rôle
              </th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                token
              </th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Employed
              </th>
              <th className="text-secondary opacity-7" />
            </tr>
          </thead>
          <tbody>
            {emails.map((email) => (
              <tr key={email.id}>
                <td>
                  <div className="d-flex px-2 py-1">
                    <div className="mr-3">
                      <BsPersonCircle size={"36"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm"> {email.email}</h6>
                      <p className="text-xs text-secondary mb-0">
                        {/* @ts-ignore */}
                        {email.User ? "Inscrit" : "Non inscrit"}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-weight-bold mb-0">
                    {" "}
                    {email.isAdmin ? "Admin" : "--"}{" "}
                  </p>
                  <p className="text-xs text-secondary mb-0">{email.role}</p>
                </td>
                <td className="align-middle text-center text-sm">
                  {/* @ts-ignore */}
                  {email.User ? (
                    <span className="badge badge-sm bg-gradient-success">
                      Inscrit
                    </span>
                  ) : (
                    <span className="badge badge-sm bg-gradient-secondary">
                      {email.token}
                    </span>
                  )}
                </td>
                <td className="align-middle text-center">
                  <span className="text-secondary text-xs font-weight-bold">
                    {email.createdAt.getFullYear()}/
                    {email.createdAt.getMonth() + 1}/{email.createdAt.getDate()}
                  </span>
                </td>
                <td className="align-middle">
                  <WidgetUserHandler email={email} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
