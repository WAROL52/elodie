import InterfaceUI from "@/components/components-ui/UI/Components/InterfaceUI";
import React from "react";
import { Chat, ChatContactType } from "./Chat";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";
import { getAuthServerSide } from "@/app/api/auth/[...nextauth]/authOptions";
import { GetResult } from "@prisma/client/runtime/library";
import { Emails, Users } from "@prisma/client";

type Props = {};

export default async function page({}: Props) {
  const { user } = await getAuthServerSide({ require: true });
  const messages = await prismaServerSide.messages.findMany({
    where: {
      OR: [
        {
          receiverId: user.id,
        },
        {
          senderId: user.id,
        },
      ],
    },
    include: {
      receiver: true,
      sender: true,
    },
  });
  const chatContactList: ChatContactType = {};
  messages.map((msg) => {
    if (msg.senderId !== user.id) {
      if (!chatContactList[msg.senderId]) {
        chatContactList[msg.senderId] = {
          autherUser: msg.sender,
          user,
          consersations: [msg],
        };
      } else {
        chatContactList[msg.senderId].consersations.push(msg);
      }
    } else {
      if (!chatContactList[msg.receiverId]) {
        chatContactList[msg.receiverId] = {
          autherUser: user,
          user: msg.receiver,
          consersations: [msg],
        };
      } else {
        chatContactList[msg.receiverId].consersations.push(msg);
      }
    }
  });
  const autherUsers = await prismaServerSide.users.findMany({
    include: { email: true },
  });
  return (
    <div className="container-fluid border shadow-lg">
      <Chat chatContactList={chatContactList} autherUsers={autherUsers} />
    </div>
  );
}
