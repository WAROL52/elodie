"use client";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useContactIdSelected, useGetAutherUsersData } from "./Chat";
type Props = {
  handleClose: () => void;
};
export default function NewChatList({ handleClose }: Props) {
  const { contactIdSelected, setContactIdSelected } = useContactIdSelected();
  const autherUsersData = useGetAutherUsersData();
  return (
    <ListGroup
      as="ol"
      numbered
      style={{ height: "50vh" }}
      className="overflow-auto ui-shadow-inner"
    >
      {autherUsersData.map((autherUser) => (
        <ListGroup.Item
          action
          active={contactIdSelected === autherUser.id}
          key={autherUser.id}
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => [setContactIdSelected(autherUser.id), handleClose()]}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              {autherUser.firstname} {autherUser.lastname}
            </div>
            {autherUser.email.email}
          </div>
          <Badge bg="primary" pill>
            {autherUser.email.role}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
