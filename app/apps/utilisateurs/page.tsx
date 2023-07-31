import InterfaceUI from "@/components/components-ui/UI/Components/InterfaceUI";
import WidgetNewUser from "@/components/components-ui/Widgets/WidgetNewUser/WidgetNewUser";
import WidgetUserHandler from "@/components/components-ui/Widgets/WidgetUserHandler/WidgetUserHandler";
import { prismaClient } from "@/libs/prismaClientQuery/prismaService";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import MenuUserTabs from "./MenuUserTabs";
type Props = {};

export default async function page({}: Props) {
  const users = await prismaClient.users.findMany({ include: { email: true } });
  const emails = await prismaClient.emails.findMany({
    include: { User: true },
  });
  return (
    <InterfaceUI title="Liste des Utilisateurs">
      <MenuUserTabs users={users} emails={emails} />
    </InterfaceUI>
  );
}
