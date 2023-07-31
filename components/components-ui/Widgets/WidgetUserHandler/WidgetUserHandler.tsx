"use client";
import React, { useState } from "react";
import WidgetModal from "../WidgetModal/WidgetModal";
import { Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";
import UserParams from "./UserParams";
import { Emails, Users } from "@prisma/client";
import useAuth from "@/hooks/useAuth";

type Props = {
  email: Emails;
  user?: Users;
};

export default function WidgetUserHandler({ email, user }: Props) {
  const [activeKey, setactiveKey] = useState("Informations");

  return (
    <WidgetModal
      titleProps={{ children: <span>Information Utilisateur</span> }}
      buttonProps={{
        children: "Voir plus",
        className: "text-secondary font-weight-bold text-xs btn-white",
      }}
    >
      <>
        <Nav
          variant="tabs"
          activeKey={activeKey}
          onSelect={(selectedKey) =>
            setactiveKey(selectedKey || "Informations")
          }
        >
          <Nav.Item>
            <Nav.Link href="#" eventKey="Informations">
              Informations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Parametres">Parametres</Nav.Link>
          </Nav.Item>
        </Nav>
        {activeKey == "Informations" ? (
          <UserInfo email={email} user={user} />
        ) : (
          <UserParams email={email} />
        )}
      </>
    </WidgetModal>
  );
}
