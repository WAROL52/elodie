"use client";
import { Alert, Spinner } from "react-bootstrap";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLink from "@/components/components-ui/UI/Components/ButtonLink";
type Props = {};

export default function LoginForm({}: Props) {
  const [isLoading, setLoading] = useState(false);
  const { push } = useRouter();
  const { login, status, loginError, clearLoginError } = useAuth();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (loginError) {
      return clearLoginError();
    }
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      rememberMe: !!formData.get("rememberMe"),
    };
    const user = await login(data);
    setLoading(false);
  };
  if (status == "authenticated") {
    push("/apps");
  }
  if (loginError && isLoading) {
    setLoading(false);
  }
  return (
    <form onSubmit={onSubmit}>
      {loginError ? (
        <div className="container">
          <Alert variant="danger">{loginError}</Alert>
        </div>
      ) : (
        <>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="form3Example3"
              className="form-control"
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4">
              Mots de passe
            </label>
            <input
              type="password"
              name="password"
              id="form3Example4"
              className="form-control"
            />
          </div>
          {/* Checkbox */}
          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="form2Example33"
              name="rememberMe"
            />
            <label className="form-check-label" htmlFor="form2Example33">
              Se rappeler de moi
            </label>
          </div>
          {/* Submit button */}
        </>
      )}

      <div className="d-grid gap-2">
        <button className="btn btn-submit text-light" type="submit">
          {isLoading ? (
            <span>
              <Spinner size="sm" />
              Connection...
            </span>
          ) : loginError ? (
            <span>Réessayer</span>
          ) : (
            <span>Se connecter</span>
          )}
        </button>
      </div>
      <div className="text-center ">
        <ButtonLink href="/register" activeLoadingWhenClick>
          Créer un compte
        </ButtonLink>
      </div>
    </form>
  );
}
