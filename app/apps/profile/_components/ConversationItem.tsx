"use client";
import { UserOutlined } from "@ant-design/icons";
import { Users } from "@prisma/client";
import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

export type ConversationsProps = {
  contact: Users;
  lastMessage: string;
};

export function ConversationConversationItem({
  contact,
  lastMessage,
}: ConversationsProps) {
  return (
    <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
      <div className="avatar me-3">
        <Avatar
          className="border-radius-lg shadow"
          shape="square"
          size={42}
          icon={<UserOutlined />}
        />
      </div>
      <div className="d-flex align-items-start flex-column justify-content-center">
        <h6 className="mb-0 text-sm">
          {" "}
          {contact.firstname} {contact.lastname}{" "}
        </h6>
        <p className="mb-0 text-xs"> {lastMessage} </p>
      </div>
      <Link
        className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
        href="/apps/messages"
      >
        Message
      </Link>
    </li>
  );
}
