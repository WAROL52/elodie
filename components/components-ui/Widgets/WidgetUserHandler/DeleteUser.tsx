"use client";
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient";
import { Emails } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
type Props = {
  email: Emails;
};

export default function DeleteUser({ email }: Props) {
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const prisma = usePrismaQuery();
  const { refresh } = useRouter();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = async () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    await prisma.emails.delete({
      where: { id: email.id },
    });
    setLoading(false);
    refresh();
  };

  return (
    <>
      <button
        className="btn btn-primary btn-danger"
        type="button"
        onClick={handleShow}
      >
        Effacer cette utilisateur
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="text-bg-danger">
          Voulez vraiment supprimer{" "}
          <span className="badge text-lowercase badge-secondary">
            {email.email}{" "}
          </span>
          ?
        </Modal.Body>
        <Modal.Footer className="text-bg-dark text-center d-block">
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button
            variant="primary"
            onClick={() => [handleClose, deleteUser].map((fn) => fn())}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner />
                Supression en cours...
              </>
            ) : (
              "Supprimer"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
