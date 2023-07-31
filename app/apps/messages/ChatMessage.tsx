"use client";
import React from "react";
import { ChatMessageForm } from "./ChatMessageForm";
import { ChatMessageList } from "./ChatMessageList";
import {
  useContactIdSelected,
  useContactSelected,
  useGetotherUserSelected,
} from "./Chat";

export function ChatMessage() {
  const contactSelected = useContactSelected();
  const { contactIdSelected } = useContactIdSelected();
  const otherUser = useGetotherUserSelected();

  return (
    contactIdSelected > -1 && (
      <div className="col d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <div className="row">
          <div
            className="col d-flex align-items-lg-center align-items-xl-center border-start border-muted"
            style={{
              background: "rgba(52,58,64,0.2)",
              height: "4rem",
            }}
          >
            <button
              className="btn d-block d-sm-block d-md-block d-lg-none d-xl-none border-0 my-auto"
              type="button"
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              <i className="far fa-arrow-alt-circle-left" />
            </button>
            <h5 className="mr-auto my-auto">
              {" "}
              {otherUser?.firstname} {otherUser?.lastname}{" "}
            </h5>
            <span className="my-auto">
              <i className="fas fa-info-circle" />
            </span>
          </div>
        </div>
        <div className="row border-start border-muted  ">
          <div
            className="col border ui-shadow-inner"
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: "50vh",
              height: "auto",
            }}
          >
            <ChatMessageList />
          </div>
        </div>
        <div
          className="row bg-sedondary"
          style={{
            background: "rgba(52,58,64,0.2)",
          }}
        >
          <ChatMessageForm />
        </div>
      </div>
    )
  );
}
