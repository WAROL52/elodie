"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { MenuItem, PathType } from "./MenuItem";
type Props = {
  paths: PathType[];
  title: ReactNode;
};
export default function AsideMenu({ paths, title }: Props) {
  return (
    <>
      <li className="nav-item mt-3">
        <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
          {title}
        </h6>
      </li>
      {paths.map((path) => (
        <MenuItem key={path.title} {...path}></MenuItem>
      ))}
    </>
  );
}
