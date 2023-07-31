/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type Props = {
  children: React.ReactNode;
};

export default function NavTabs({ children }: Props) {
  const Pathname = usePathname();
  const path = Pathname.split("/")[1];
  const pathActive = Pathname.split("/")[2];
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${path == "departement-info" ? "active" : ""}`}
            aria-current="page"
            href="/departement-info"
          >
            departement d'informatique
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${path == "departement-jury" ? "active" : ""}`}
            href="/departement-jury"
          >
            Departement Jury
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              path == "departement-finance" ? "active" : ""
            }`}
            href="/departement-finance"
          >
            Departement Finance
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="d-flex justify-content-around">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: 280 }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                href={`/${path}/messages`}
                className={`nav-link ${
                  pathActive === "messages" ? "active" : ""
                }`}
                aria-current="page"
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
                Messages
              </Link>
            </li>
            <li>
              <Link
                href={`/${path}/fichiers`}
                className={`nav-link ${
                  pathActive === "fichiers" ? "active" : ""
                }`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#speedometer2" />
                </svg>
                Fichiers
              </Link>
            </li>
            <li>
              <Link
                href={`/${path}/historiques`}
                className={`nav-link ${
                  pathActive === "historiques" ? "active" : ""
                }`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                Historiques
              </Link>
            </li>
            <li>
              <Link
                href={`/${path}/utilisateurs`}
                className={`nav-link ${
                  pathActive === "utilisateurs" ? "active" : ""
                }`}
              >
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                Utilisateurs
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                width={32}
                height={32}
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-secondary flex-grow-1">{children}</div>
      </div>
    </>
  );
}
