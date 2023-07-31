import React from "react";
import { ChatContact } from "./Chat";
type Props = { chatContact: ChatContact };
export function ChatContactListItem({ chatContact }: Props) {
  const consersations = chatContact.consersations.sort((msgA, msgB) => {
    return (
      new Date(msgA.createdAt).getTime() - new Date(msgB.createdAt).getTime()
    );
  });
  return (
    <li
      style={{
        cursor: "pointer",
      }}
    >
      <div className="card border-0">
        <div className="card-body">
          {consersations.at(-1)?.id === chatContact.autherUser.id && (
            <span
              className="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center"
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: 15,
                background: "#00db5f",
              }}
            >
              Nouveau
            </span>
          )}

          <h4 className="text-nowrap text-truncate card-title">
            {chatContact.autherUser.firstname} {chatContact.autherUser.lastname}
          </h4>
          <h6
            className="text-nowrap text-truncate text-muted card-subtitle mb-2"
            style={{
              fontSize: ".7rem",
            }}
          >
            {consersations.at(-1)?.createdAt.toString()}
          </h6>
          <h6 className="text-nowrap text-truncate text-muted card-subtitle mb-2">
            <span className="badge text-bg-dark">
              {" "}
              {consersations.at(-1)?.id === chatContact.autherUser.id
                ? "Message:"
                : "Vous:"}{" "}
            </span>{" "}
            {consersations.at(-1)?.content}
          </h6>
        </div>
      </div>
    </li>
  );
}
