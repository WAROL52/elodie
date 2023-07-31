"use client";
import { usePirsmaClientSide } from "@/libs/prisma/prismaHooks";
import dayjs from "dayjs";
import { MessageWith, TachesWith } from "@/libs/prisma/prismaUtility";
import React, { useId, useState } from "react";
import { Spinner } from "react-bootstrap";
type Props = {
  todo: TachesWith<{ UserOwner: true }>;
};
export function TodoItem({ todo }: Props) {
  const { isLoading, setLoading, prismaClientSide, refresh } =
    usePirsmaClientSide();
  const toggle = async () => {
    if (isLoading) return;
    setLoading(true);
    const result = await prismaClientSide.taches.update({
      where: {
        id: todo.id,
      },
      data: {
        completed: !todo.completed,
      },
    });
    refresh();
    setLoading(false);
  };
  return (
    <ul className="list-group list-group-horizontal rounded-3 border my-2 px-3 shadow hover:ui-text-white hover:ui-bg-gray-300 ui-bg-white ">
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent ">
        <div className="form-check form-switch hover:ui-text-white">
          {isLoading ? (
            <Spinner size="sm" />
          ) : (
            <input
              disabled={isLoading}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id={"flexSwitchCheckDefault-" + todo.id}
              checked={todo.completed}
              onChange={toggle}
            />
          )}

          <label
            className="form-check-label"
            htmlFor={"flexSwitchCheckDefault-" + todo.id}
          >
            {todo.title} {String(todo.completed)}
          </label>
        </div>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent debug">
        <div className="text-end hover:ui-text-white">
          {todo?.startAt && (
            <a
              href="#!"
              className="hover:ui-text-white"
              data-mdb-toggle="tooltip"
              title="Created date"
            >
              <p className="small mb-0 d-flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar-event m-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                {dayjs(todo.startAt).format("DD/MM/YYYY")}
              </p>
            </a>
          )}
        </div>
        <div className="text-end  hover:ui-text-white">
          {todo?.endAt && (
            <a
              href="#!"
              className="hover:ui-text-white "
              data-mdb-toggle="tooltip"
              title="Created date"
            >
              <p className="small mb-0 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar-x m-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                {dayjs(todo.endAt).format("DD/MM/YYYY")}
              </p>
            </a>
          )}
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
        <div className="py-2 px-3 me-2 border border-secondary rounded-3 d-flex align-items-center ">
          <p className="small mb-0 d-flex">
            <a href="#!" data-mdb-toggle="tooltip" title="Due on date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-calendar-check m-1"
                viewBox="0 0 16 16"
              >
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </a>
            <span className="my-auto text-dark">
              {todo.completed && dayjs(todo.updatedAt).format("DD/MM/YYYY")}
            </span>
          </p>
        </div>
        <div className="py-2 px-3 me-2 border border-secondary rounded-3 d-flex align-items-center hover:ui-bg-red-500 hover:ui-text-white ">
          <p className="small mb-0 d-flex ">
            <a
              className=" d-flex"
              data-mdb-toggle="tooltip"
              title="Due on date"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </a>
          </p>
        </div>
      </li>
    </ul>
  );
}
