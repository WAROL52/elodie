"use client";
import { UserAuth } from "@/app/api/auth/[...nextauth]/authOptions";
import { Emails } from "@prisma/client";
import React from "react";
import { EditProfile } from "./EditProfile";

export type ProfileInformationProps = {
  user: UserAuth;
  email: Emails;
};

export function ProfileInformation({ user, email }: ProfileInformationProps) {
  return (
    <div className="card card-plain h-100">
      <div className="card-header pb-0 p-3">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            <h6 className="mb-0">
              Informations sur le profil <EditProfile user={user} />
            </h6>
          </div>
          <div className="col-md-4 text-end">
            <a href="javascript:;">
              <i
                className="fas fa-user-edit text-secondary text-sm"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Edit Profile"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="card-body p-3">
        <p className="text-sm">{user.description}</p>
        <hr className="horizontal gray-light my-4" />
        <ul className="list-group">
          <li className="list-group-item border-0 ps-0 pt-0 text-sm">
            <strong className="text-dark">Nom complet:</strong> &nbsp;{" "}
            {user.firstname} {user.lastname}
          </li>
          <li className="list-group-item border-0 ps-0 text-sm">
            <strong className="text-dark">Portable:</strong> &nbsp; {user.phone}
          </li>
          <li className="list-group-item border-0 ps-0 text-sm">
            <strong className="text-dark">Email:</strong> &nbsp;
            {email.email}
          </li>
          <li className="list-group-item border-0 ps-0 text-sm">
            <strong className="text-dark">Lieu:</strong> &nbsp; {user.adresse}
          </li>
        </ul>
      </div>
    </div>
  );
}
