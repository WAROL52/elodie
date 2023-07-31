"use client";
import { Emails, Users } from "@prisma/client";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import ListUser from "./ListUser";
import ListEmail from "./ListEmail";

type Props = {
  users: Users[];
  emails: Emails[];
};

export default function MenuUserTabs({ users, emails }: Props) {
  const [activeKey, setactiveKey] = useState("utilisateurs");
  return (
    <>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(selectedKey) => setactiveKey(selectedKey || "utilisateurs")}
      >
        <Nav.Item>
          <Nav.Link href="#" eventKey="utilisateurs">
            utilisateurs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Emails">Emails</Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey == "utilisateurs" ? (
        <ListUser users={users} />
      ) : (
        <ListEmail emails={emails} />
      )}
    </>
  );
}
