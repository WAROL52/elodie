"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useGetCurrentPathname } from "../../../../hooks/useGetCurrentPathname";
import { ButtonPAth } from "./ButtonPAth";
type Props = {};

export default function BreadcrumbUI({}: Props) {
  //   return <Breadcrumb></Breadcrumb>;
  const pathName = usePathname();
  const currentPath = useGetCurrentPathname("Page");
  const pathNames = pathName.split("/");

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
        <li className="breadcrumb-item text-sm">
          <a className="opacity-5 text-dark">Accueil</a>
        </li>
        {pathNames
          .filter((path) => path)
          .map((path, index, list) => (
            <li
              key={path + index}
              className={`breadcrumb-item text-sm text-dark ${
                index === list.length - 1 ? "active" : ""
              }`}
              aria-current="page"
            >
              {path}
            </li>
          ))}
      </ol>
      <h6 className="font-weight-bolder mb-0">
        <ButtonPAth path={currentPath} />
      </h6>
    </nav>
  );
}
