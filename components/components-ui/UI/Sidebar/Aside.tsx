/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren, ReactNode } from "react";
import SidenavFooter from "./SidenavFooter";
import Link from "next/link";
import AsideMenu from "./AsideMenu";
import { pathsMenuCompte, pathsMenuGenerale, pathsMenuOutils } from "./paths";

type Props = {};

export default function Aside({}: Props) {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        />
        <Link className="navbar-brand m-0" href="/apps">
          <img
            src={process.env.APP_LOGO}
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold text-white">
            {process.env.APP_NAME}
          </span>
        </Link>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav ">
          <AsideMenu paths={pathsMenuGenerale} title="Generale" />
          <AsideMenu paths={pathsMenuOutils} title="Outils" />
          <AsideMenu paths={pathsMenuCompte} title="Compte" />
        </ul>
      </div>
      <SidenavFooter />
    </aside>
  );
}
