import React from "react";
import BreadcrumbUI from "../Components/BreadcrumbUI";
import { IconNotifications } from "../../icons/IconNotifications";
import { IconMessages } from "../../icons/IconMessages";
import ButtonLogout from "../Components/ButtonLogout";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav
      className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
      id="navbarBlur"
      data-scroll="true"
    >
      <div className="container-fluid py-1 px-3">
        <BreadcrumbUI />

        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link
                href="/apps/messages"
                className="nav-link text-body font-weight-bold "
              >
                <span className="d-sm-inline d-none">
                  <IconMessages size={24} />
                </span>
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center ui-ml-3">
              <ButtonLogout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
