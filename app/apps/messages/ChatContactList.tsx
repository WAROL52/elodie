"use client";
import React from "react";
import { ChatContactListItem } from "./ChatContactListItem";
import { useGetChatData } from "./Chat";

export function ChatContactList({}) {
  const chatContactList = Object.entries(useGetChatData());

  return (
    <ul className="list-unstyled">
      {chatContactList.map(([autherUserId, chatContact]) => (
        <ChatContactListItem key={autherUserId} chatContact={chatContact} />
      ))}
    </ul>
  );
}
