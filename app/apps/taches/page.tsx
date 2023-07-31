import InterfaceUI from "@/components/components-ui/UI/Components/InterfaceUI";
import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { prismaServerSide } from "@/libs/prismaLibs/prismaServerSide";
import { getAuthServerSide } from "@/app/api/auth/[...nextauth]/authOptions";
import { TodoForm } from "./TodoForm";

type Props = {};

export default async function page({}: Props) {
  const { user } = await getAuthServerSide({ require: true });
  const todos = await prismaServerSide.taches.findMany({
    where: {
      UserOwnerId: user.id,
    },
    include: {
      UserOwner: true,
    },
  });
  return (
    <InterfaceUI title="Tâches">
      <div className="row d-flex justify-content-center align-items-center h-100 m-0">
        <div className="col">
          <div
            className="card"
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <div className="card-body px-4 px-md-5 ui-shadow">
              <div className="card mb-1">
                <div className="card-body  py-1 ">
                  <TodoForm />
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center  ">
                <p className="small mb-0 me-2 text-muted">Filter</p>
                <select className="select">
                  <option value={1}>All</option>
                  <option value={2}>Completed</option>
                  <option value={3}>Active</option>
                  <option value={4}>Has due date</option>
                </select>
                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <select className="select">
                  <option value={1}>Added date</option>
                  <option value={2}>Due date</option>
                </select>
                <a
                  href="#!"
                  style={{ color: "#23af89" }}
                  data-mdb-toggle="tooltip"
                  title="Ascending"
                >
                  <i className="fas fa-sort-amount-down-alt ms-2" />
                </a>
              </div>
              <hr className="my-2" />
              <div
                className="border p-2 ui-shadow-inner bg-light ui-overflow-auto"
                style={{ height: "40vh" }}
              >
                {todos.map((todo) => {
                  return <TodoItem key={todo.id} todo={todo} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </InterfaceUI>
  );
}
