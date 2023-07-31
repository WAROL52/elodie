"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import WidgetModal from "../WidgetModal/WidgetModal";
import Button from "react-bootstrap/Button";
import Form, { FormProps } from "react-bootstrap/Form";
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient";
import { Alert } from "react-bootstrap";
import { useRouter } from "next/navigation";
type Props = {};

export default function WidgetNewUser({}: Props) {
  const prisma = usePrismaQuery();
  const [show, setshow] = useState(false);
  const { refresh } = useRouter();
  const [tokenValue, setToken] = useState<{
    email: string;
    password: string;
    role: string;
    isAdmin: boolean;
    token: string;
  } | null>(null);
  const [isLoading, setisLoading] = useState(false);
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email") as string,
      departement: formData.get("departement") as string,
      isAdmin: !!formData.get("isAdmin"),
    };
    const token = Date.now()
      .toString()
      .split("")
      .reverse()
      .slice(0, 6)
      .join("");
    const hasEmail = await prisma.emails.findUnique({
      where: { email: data.email },
    });

    if (!hasEmail) {
      const dataSend = {
        email: data.email,
        password: "",
        role: data.departement,
        isAdmin: data.isAdmin,
        token,
      };
      const result = await prisma.emails.create({ data: dataSend });
      console.log({ result });
      refresh();
      setToken(dataSend);
    }
    setisLoading(false);
  };
  return (
    <WidgetModal
      titleProps={{ children: <span>Nouvel Utilisateur</span> }}
      modalProps={{
        size: "lg",
        show,
      }}
      buttonProps={{
        children: "Nouveau",
        className: "btn btn-primary",
        onClick: () => setshow(true),
      }}
    >
      <div className="container">
        {tokenValue ? (
          <Alert variant="white">
            {" "}
            <div className="container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Enregistrement réussi de l'email d'un nouvel utilisateur avec
                  succès. Cet utilisateur sera inscrit au registre du
                  département {tokenValue.role}{" "}
                  {tokenValue.isAdmin && "en tant d'admin"}
                </li>
                <li className="list-group-item">
                  Email
                  <span className="badge text-bg-secondary mx-3">
                    {tokenValue.email}
                  </span>
                </li>
                <li className="list-group-item">
                  Token
                  <span className="badge text-bg-secondary mx-3">
                    {" "}
                    {tokenValue.token}
                  </span>
                </li>
                <li className="list-group-item text-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => [setshow(false), setToken(null)]}
                  >
                    ok
                  </button>
                </li>
              </ul>
            </div>
          </Alert>
        ) : (
          <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              name="departement"
              required
            >
              <option value="*">generale</option>
              <option value="info">Departement Info</option>
              <option value="jury">Departement Jury</option>
              <option value="finance">Departement finance</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="En tant qu'admin"
                name="isAdmin"
              />
            </Form.Group>
            <div className="text-end">
              <Button
                variant="outline-primary"
                type="submit"
                disabled={isLoading}
                onClick={() => setshow(false)}
                className="mx-3"
              >
                Annuler
              </Button>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Enregistrement..." : "Enregistrer"}
              </Button>
            </div>
          </Form>
        )}
      </div>
    </WidgetModal>
  );
}
