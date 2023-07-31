"use client";
import { usePirsmaClientSide } from "@/libs/prisma/prismaHooks";
import React from "react";
import { Spinner } from "react-bootstrap";

export function Importer({}) {
  const { isLoading, setLoading, refresh } = usePirsmaClientSide();
  const importer = async () => {
    if (isLoading) return;
    const input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = new FormData();
      // @ts-ignore
      const file = input.files[0];
      console.log(file);

      data.append("file", file);

      const response = await fetch("/api/uploadfile", {
        method: "POST",
        body: data,
      });
      setLoading(false);
      refresh();
    };
  };
  return (
    <button
      onClick={importer}
      type="button"
      className="btn"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" />
          Chargement...
        </>
      ) : (
        "Importer"
      )}
    </button>
  );
}
