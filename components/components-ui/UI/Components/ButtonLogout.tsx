"use client";
import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import useAuth from "@/hooks/useAuth";

type Props = {};

export default function ButtonLogout({}: Props) {
  const { logout, status } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const label =
    status == "loading"
      ? "Authentification..."
      : isLoading
      ? "Deconnection"
      : "Se Deconnecter";

  return (
    <ButtonLink
      onClick={() => [setLoading(true), logout()]}
      className="btn btn-outline-primary btn-sm mb-0 me-3"
      needAuth
      isLoading={isLoading}
      href={"#"}
    >
      {label}
    </ButtonLink>
  );
}
