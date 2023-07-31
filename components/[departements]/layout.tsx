import React, { ReactNode } from "react";
import NavTabs from "../components-ui/NavTabs";

type Props = {
  children: ReactNode;
  params: {
    departements: string;
  };
};
export default function layout({ children, params }: Props) {
  const { departements } = params;
  return <NavTabs>{children}</NavTabs>;
}
