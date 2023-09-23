import React from "react";
import { ConversationConversationItem } from "./ConversationItem";
import { UserAuth } from "@/app/api/auth/[...nextauth]/authOptions";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";

export type ConversationProps = {
  user: UserAuth;
};

export async function Conversation({ user }: ConversationProps) {
  const contacts = await prismaServerSide.users.findMany({
    take: 6,
    include: {
      email: true,
    },
    where: {
      NOT: {
        id: user.id,
      },
    },
  });
  return (
    <div className="card card-plain h-100">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Conversations</h6>
      </div>
      <div className="card-body p-3">
        <ul className="list-group">
          {contacts.map((contact, index) => {
            return (
              <ConversationConversationItem
                contact={contact}
                lastMessage={contact.email.email}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
