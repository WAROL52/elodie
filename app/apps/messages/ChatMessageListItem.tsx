import React from "react";
import { useContactIdSelected, useGetChatData } from "./Chat";
import useAuth from "@/hooks/useAuth";
import { Messages } from "@prisma/client";

type Props = {
  consersation: Messages;
};
export function ChatMessageListItem({ consersation }: Props) {
  const { user } = useAuth({ required: true });
  const { contactIdSelected } = useContactIdSelected();
  const chatContactList = useGetChatData()[contactIdSelected];
  return (
    <>
      {user?.id === consersation.senderId ? (
        <li className="d-flex justify-content-end my-2">
          <div
            className="card border border-muted"
            style={{
              width: "65%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              background: "rgba(52,58,64,0.05)",
            }}
          >
            <div className="card-body text-center p-2">
              <p
                className="text-start card-text"
                style={{
                  fontSize: "1rem",
                }}
              >
                {consersation.content}
              </p>
              <h6
                className="text-muted card-subtitle text-end"
                style={{
                  fontSize: ".75rem",
                }}
              >
                {consersation.createdAt.toString()}
              </h6>
            </div>
          </div>
        </li>
      ) : (
        <li className="my-2">
          <div
            className="card border border-muted"
            style={{
              width: "65%",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              background: "rgba(52,58,64,0.05)",
            }}
          >
            <div className="card-body text-center p-2">
              <p
                className="text-start card-text"
                style={{
                  fontSize: "1rem",
                }}
              >
                {consersation.content}
              </p>
              <h6
                className="text-muted card-subtitle text-end"
                style={{
                  fontSize: ".75rem",
                }}
              >
                {consersation.createdAt.toString()}
              </h6>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
