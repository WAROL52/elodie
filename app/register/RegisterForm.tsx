"use client";
import ButtonLink from "@/components/components-ui/UI/Components/ButtonLink";
import useAuth from "@/hooks/useAuth";
import { usePrismaQuery } from "@/libs/prismaClientQuery/usePrismaClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";

type Props = {};

export default function RegisterForm({}: Props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const { status, register, registerError, clearRegisterError } = useAuth();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (registerError) {
      return clearRegisterError();
    }
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
    };
    await register(data);
  };
  if (status == "authenticated") {
    push("/apps");
  }
  if (registerError && isLoading) {
    setLoading(false);
  }
  return (
    <form onSubmit={onSubmit}>
      {/* 2 column grid layout with text inputs for the first and last names */}
      {registerError ? (
        <div className="container">
          <Alert variant="danger">{registerError}</Alert>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label" htmlFor="form3Example1">
                  Nom
                </label>
                <input
                  type="text"
                  id="form3Example1"
                  className="form-control"
                  name="firstname"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label" htmlFor="form3Example2">
                  Prenom
                </label>
                <input
                  type="text"
                  id="form3Example2"
                  className="form-control"
                  name="lastname"
                  required
                />
              </div>
            </div>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Email
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              name="email"
              required
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4">
              Mots de passe
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control"
              name="password"
              required
            />
          </div>
        </>
      )}

      {/* Submit button */}
      <div className="d-grid gap-2">
        <button className="btn btn-submit text-light" type="submit">
          {isLoading ? (
            <span>
              <Spinner size="sm" />
              inscription...
            </span>
          ) : registerError ? (
            <span>Réessayer</span>
          ) : (
            <span>S&lsquo;inscrire</span>
          )}
        </button>
      </div>
      <div className="text-center ">
        <ButtonLink href="/login" activeLoadingWhenClick>
          Se connecter
        </ButtonLink>
      </div>
    </form>
  );
}
