/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img src="" alt="logo" />
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/" className="nav-link px-2 link-secondary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/departement" className="nav-link px-2">
                Département
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Admin
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                About
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </header>
      </div>
      <div>{children}</div>
    </>
  );
}
