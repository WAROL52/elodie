import { signIn } from "next-auth/react";
import React from "react";
import RegisterForm from "./RegisterForm";
import HomePage from "@/components/components-ui/UI/HomePage";
import { getServerSession } from "next-auth";
import ButtonLink from "@/components/components-ui/UI/Components/ButtonLink";

type Props = {};

export default async function page({}: Props) {
  const session = await getServerSession();
  const appName = process.env.APP_NAME;
  const title = process.env.REGISTER_TITLE;
  const description = process.env.REGISTER_DESCRIPTION;
  return (
    <HomePage appName={appName} title={title} description={description}>
      {!session ? <RegisterForm /> : <ButtonLink href="/apps">Apps</ButtonLink>}
    </HomePage>
  );
}
