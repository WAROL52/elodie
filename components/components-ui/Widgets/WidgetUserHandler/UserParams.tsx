import { Emails, Users } from "@prisma/client";
import React from "react";
import ToggleAdmin from "./ToggleAdmin";
import ChangeDepartement from "./ChangeDepartement";
import DeleteUser from "./DeleteUser";

type Props = {
  email: Emails;
  user?: Users;
};

export default function UserParams({ email, user }: Props) {
  return (
    <>
      <div className="col-12">
        <div className="card card-plain h-100">
          <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <h6 className="mb-0">Profile Information</h6>
              </div>
              <div className="col-md-4 ">
                <div className="form-check form-switch ">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    <strong className="text-dark">Admin</strong>
                  </label>
                  <ToggleAdmin email={email} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-3 pb-0">
            <p className="text-sm">{user?.description}</p>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item ">
                <div>
                  <ChangeDepartement email={email} departement={"*"} />
                  <ChangeDepartement
                    email={email}
                    departement={"Informatique"}
                  />
                  <ChangeDepartement email={email} departement={"Jury"} />
                  <ChangeDepartement email={email} departement={"Finance"} />
                </div>
              </li>
              <li className="list-group-item ">
                <div className="d-grid gap-2">
                  <DeleteUser email={email} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
