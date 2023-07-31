"use client";
import { useGetData, useGetTheme } from "@/hooks/useDataContexte";
import React from "react";

type Props = {};

export default function SidenavFooter({}: Props) {
  const theme = useGetTheme();

  return (
    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
      <div className="mx-3">
        <a
          className={`btn bg-gradient-${theme.color} w-100`}
          href="#"
          type="button"
        >
          Parametres
        </a>
      </div>
    </div>
  );
}
