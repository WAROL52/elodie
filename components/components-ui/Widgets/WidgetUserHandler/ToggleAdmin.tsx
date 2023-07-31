"use client";
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient";
import { Emails } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

type Props = {
  email: Emails;
};

export default function ToggleAdmin({ email }: Props) {
  const [isLoading, setLoading] = useState(false);
  const prisma = usePrismaQuery();
  const { refresh } = useRouter();
  const toggle = async () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    await prisma.emails.update({
      where: { id: email.id },
      data: {
        isAdmin: !email.isAdmin,
      },
    });
    setLoading(false);
    refresh();
  };
  return (
    <>
      {isLoading && <Spinner size="sm" />}
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={email.isAdmin || false}
        onChange={toggle}
      />
    </>
  );
}
