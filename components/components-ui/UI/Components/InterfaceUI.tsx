"use client";
import { DataContext } from "@/app/ClientProvider";
import { useGetTheme } from "@/hooks/useDataContexte";
import React, { PropsWithChildren, ReactNode, useContext } from "react";

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export default function InterfaceUI({ children, title }: Props) {
  const theme = useGetTheme();
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              className={`bg-gradient-${theme.color} shadow-primary border-radius-lg  p-3`}
            >
              <h6 className="text-white text-capitalize my-auto">{title}</h6>
            </div>
          </div>
          <div className="card-body ">{children}</div>
        </div>
      </div>
    </div>
  );
}
