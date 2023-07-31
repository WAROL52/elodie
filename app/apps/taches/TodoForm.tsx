"use client";
import useAuth from "@/hooks/useAuth";
import {
  usePrismaClient,
  usePrismaQuery,
} from "@/libs/prismaClientQuery/usePrismaClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

export function TodoForm({}) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const { user } = useAuth({ required: true });
  const prisma = usePrismaQuery();
  const { refresh } = useRouter();
  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setLoading(true);
    const todo = await prisma.taches.create({
      data: {
        title: newTodo,
        UserOwnerId: user?.id || -1,
        startAt: startDate || undefined,
        endAt: endDate || undefined,
      },
    });
    setStartDate(null);
    setEndDate(null);
    refresh();
    setNewTodo("");
    setLoading(false);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="d-flex flex-row align-items-center ">
        <input
          type="text"
          className="form-control form-control-lg "
          id="exampleFormControlInput1"
          placeholder="Nouveau tâche...."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <ReactDatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          className="border ui-shadow-inner rounded-3"
        />
        <div className="mx-1" />
        <ReactDatePicker
          showIcon
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          isClearable
          className="border ui-shadow-inner rounded-3 "
        />
        <a
          href="#!"
          data-mdb-toggle="tooltip"
          title="Set due date debug-1"
          className="mx-1 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="currentColor"
            className="bi bi-calendar2-week"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
        </a>
        <div>
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary my-auto d-flex"
          >
            {isLoading ? (
              <>
                <Spinner size="sm" /> Enregistrement...
              </>
            ) : (
              "Nouveau"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
