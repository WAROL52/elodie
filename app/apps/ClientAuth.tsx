"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { PropsWithChildren, useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

type Props = PropsWithChildren;
export default function ClientAuth({ children }: Props) {
  const {} = useAuth({ required: true });
  return children;
}
