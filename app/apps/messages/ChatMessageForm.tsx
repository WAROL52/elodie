"use client";
import React, { useState } from "react";
import { useGetotherUserSelected } from "./Chat";
import useAuth from "@/hooks/useAuth";
import {
  usePrismaClient,
  usePrismaQuery,
} from "@/libs/prismaClientQuery/usePrismaClient";
import { useRouter } from "next/navigation";
import { Spinner } from "react-bootstrap";

export function ChatMessageForm({}) {
  const prisma = usePrismaQuery();
  const { refresh } = useRouter();
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const otherUser = useGetotherUserSelected();
  const { user } = useAuth({ required: true });
  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setLoading(true);

    if (otherUser && user) {
      await prisma.messages.create({
        data: {
          receiverId: otherUser.id,
          senderId: user.id,
          content,
        },
      });
      refresh();
    }
    setLoading(false);
    setContent("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="input-group debug border p-3">
        <textarea
          name="content"
          className="form-control ui-shadow-inner border text-bg-white"
          id="exampleFormControlTextarea1"
          rows={1}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-outline-secondary shadow  my-auto"
        >
          {isLoading ? (
            <>
              <Spinner size="sm" />
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
