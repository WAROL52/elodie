"use client";
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient";
import { Emails } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

type Props = {
  email: Emails;
  departement: string;
};

export default function ChangeDepartement({ email, departement }: Props) {
  const [isLoading, setLoading] = useState(false);
  const prisma = usePrismaQuery();
  const { refresh } = useRouter();
  const toggle = async () => {
    if (isLoading || email.role == departement) {
      return;
    }
    setLoading(true);
    await prisma.emails.update({
      where: { id: email.id },
      data: {
        role: departement,
      },
    });
    setLoading(false);
    refresh();
  };
  const id = "flexRadio-" + departement;
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={id}
        checked={email.role == departement}
        onChange={toggle}
      />
      <label className="form-check-label" htmlFor={id}>
        {isLoading && <Spinner size="sm" />}
        Departement {departement}
      </label>
    </div>
  );
}
