import { Emails, Users } from "@prisma/client";
import React from "react";

type Props = {
  email: Emails;
  user?: Users;
};

export default function UserInfo({ email, user }: Props) {
  return (
    <div className="col-12">
      <div className="card card-plain h-100">
        <div className="card-header pb-0 p-3">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <h6 className="mb-0">Profile Information</h6>
            </div>
          </div>
        </div>
        <div className="card-body p-3">
          <p className="text-sm">{user?.description}</p>
          <hr className="horizontal gray-light my-4" />
          <ul className="list-group">
            <li className="list-group-item border-0 ps-0 text-sm">
              <strong className="text-dark">Email:</strong> &nbsp;
              {email.email}
            </li>
            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Nom:</strong> &nbsp;{" "}
              {user?.firstname}
            </li>

            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Prenom:</strong> &nbsp;{" "}
              {user?.lastname}
            </li>
            <li className="list-group-item border-0 ps-0 text-sm">
              <strong className="text-dark">Admin:</strong> &nbsp;
              {email.isAdmin ? "OUI" : "NON"}
            </li>
            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Departement:</strong> &nbsp;{" "}
              {email.role}
            </li>

            <li className="list-group-item border-0 ps-0 text-sm">
              <strong className="text-dark">Adresse:</strong> &nbsp;
              {user?.adresse}
            </li>
            <li className="list-group-item border-0 ps-0 text-sm">
              <strong className="text-dark">Telephone:</strong> &nbsp;
              {user?.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
