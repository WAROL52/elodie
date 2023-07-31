"use client";
import React, { createContext, useContext, useState } from "react";
import { ChatContact } from "./ChatContact";
import { ChatMessage } from "./ChatMessage";
import { Messages, Users } from "@prisma/client";
import { UserWith } from "@/libs/prisma/prismaUtility";

export type ChatContact = {
  user: Users;
  autherUser: Users;
  consersations: Messages[];
};
export type ChatContactType = {
  [x: PropertyKey]: ChatContact;
};
type Props = {
  chatContactList: ChatContactType;
  autherUsers: UserWith<{ email: true }>[];
};
const ChatData = createContext<ChatContactType>({});
const ContactIdSelected = createContext<{
  contactIdSelected: number;
  setContactIdSelected: React.Dispatch<React.SetStateAction<number>>;
}>({ contactIdSelected: -1, setContactIdSelected: () => {} });
const AutherUsersData = createContext<UserWith<{ email: true }>[]>([]);

export const useGetChatData = () => useContext(ChatData);
export const useGetAutherUsersData = () => useContext(AutherUsersData);

export const useContactIdSelected = () => useContext(ContactIdSelected);
export const useContactSelected = (): ChatContact | undefined => {
  const { contactIdSelected } = useContactIdSelected();
  const chatData = useGetChatData();
  const chatContactList = chatData[contactIdSelected];

  return chatContactList;
};
export const useGetotherUserSelected = () => {
  const { contactIdSelected } = useContactIdSelected();
  const autherUsersData = useGetAutherUsersData();
  return autherUsersData.find((auther) => auther.id === contactIdSelected);
};
export function Chat({ chatContactList, autherUsers }: Props) {
  const [contactIdSelected, setContactIdSelected] = useState(-1);
  return (
    <div className="row">
      <AutherUsersData.Provider value={autherUsers}>
        <ChatData.Provider value={chatContactList}>
          <ContactIdSelected.Provider
            value={{ contactIdSelected, setContactIdSelected }}
          >
            <ChatContact />
            <ChatMessage />
          </ContactIdSelected.Provider>
        </ChatData.Provider>
      </AutherUsersData.Provider>
    </div>
  );
}
