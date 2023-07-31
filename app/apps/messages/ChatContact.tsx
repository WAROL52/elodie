"use client";
import React from "react";
import { BtnNewChat } from "./BtnNewChat";
import { ChatContactList } from "./ChatContactList";
import { useContactIdSelected, useContactSelected } from "./Chat";

export function ChatContact({}) {
  const { contactIdSelected } = useContactIdSelected();
  return (
    <div className={contactIdSelected > -1 ? "col-lg-4 col-xl-4" : "col-12"}>
      <div className="row ">
        <div
          className=" p-2"
          style={{
            background: "rgba(52,58,64,0.2)",
            height: "4rem",
          }}
        >
          <div
            className="btn-group  "
            role="group"
            aria-label="Basic outlined example"
          >
            <BtnNewChat />
          </div>
        </div>
      </div>
      <div className="row ui-sadow-inner">
        <div
          className="col "
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            maxHeight: "63vh",
            height: "auto",
          }}
        >
          <ChatContactList />
        </div>
      </div>
    </div>
  );
}
