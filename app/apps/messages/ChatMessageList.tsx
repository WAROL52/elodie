import React from "react";
import { ChatMessageListItem } from "./ChatMessageListItem";
import { useContactIdSelected, useGetChatData } from "./Chat";

export function ChatMessageList({}) {
  const { contactIdSelected } = useContactIdSelected();
  const chatContactList = useGetChatData()[contactIdSelected];
  return (
    <ul className="list-unstyled">
      {chatContactList?.consersations.map((consersation) => (
        <ChatMessageListItem
          key={consersation.id}
          consersation={consersation}
        />
      ))}
    </ul>
  );
}
