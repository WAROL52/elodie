import { getServerSession } from "next-auth";
import LoginForm from "./LoginForm";
import ButtonLink from "@/components/components-ui/UI/Components/ButtonLink";
import HomePage from "@/components/components-ui/UI/HomePage";
import { redirect } from "next/navigation";

type Props = {};

export default async function page({}: Props) {
  const session = await getServerSession();
  const appName = process.env.APP_NAME;
  const title = process.env.CONNECTION_TITLE;
  const description = process.env.CONNECTION_DESCRIPTION;
  if (session) {
    redirect("/apps");
  }
  return (
    <HomePage appName={appName} title={title} description={description}>
      {!session ? <LoginForm /> : <ButtonLink href="/apps">Apps</ButtonLink>}
    </HomePage>
  );
}
