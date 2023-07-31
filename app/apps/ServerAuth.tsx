import { getServerSession } from "next-auth/next";
import React, { PropsWithChildren } from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

type Props = PropsWithChildren;

export default async function ServerAuth({ children }: Props) {
  const session = await getServerSession(authOptions);

  return <>{children}</>;
}
