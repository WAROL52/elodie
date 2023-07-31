"use client";
import WidgetNewUser from "@/components/components-ui/Widgets/WidgetNewUser/WidgetNewUser";
import WidgetUserHandler from "@/components/components-ui/Widgets/WidgetUserHandler/WidgetUserHandler";
import { Users } from "@prisma/client";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";

type Props = {
  users: Users[];
};

export default function ListUser({ users }: Props) {
  return (
    <>
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
                Status
              </th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Employed
              </th>
              <th className="text-secondary opacity-7" />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex px-2 py-1">
                    <div className="mr-3">
                      <BsPersonCircle size={"36"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="mb-0 text-sm">
                        {" "}
                        {user.firstname} {user.lastname}
                      </h6>
                      <p className="text-xs text-secondary mb-0">
                        {/* @ts-ignore */}

                        {user?.email?.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-weight-bold mb-0">
                    {" "}
                    {/* @ts-ignore */}
                    {user.email.isAdmin ? "Admin" : "--"}{" "}
                  </p>
                  <p className="text-xs text-secondary mb-0">
                    {/* @ts-ignore */}

                    {user.email.role}
                  </p>
                </td>
                <td className="align-middle text-center text-sm">
                  {user.isOnline ? (
                    <span className="badge badge-sm bg-gradient-success">
                      en ligne
                    </span>
                  ) : (
                    <span className="badge badge-sm bg-gradient-secondary">
                      hors ligne
                    </span>
                  )}
                </td>
                <td className="align-middle text-center">
                  <span className="text-secondary text-xs font-weight-bold">
                    {user.createdAt.getFullYear()}/
                    {user.createdAt.getMonth() + 1}/{user.createdAt.getDate()}
                  </span>
                </td>
                <td className="align-middle">
                  {/* @ts-ignore */}
                  <WidgetUserHandler email={user.email} user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
