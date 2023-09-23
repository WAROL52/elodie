import React from "react";
import { ConversationConversationItem } from "./_components/ConversationItem";
import { Conversation } from "./_components/Conversation";
import { ProfileInformation } from "./_components/ProfileInformation";
import { PlatformSettings } from "./_components/PlatformSettings";
import { ProfileHeader } from "./_components/ProfileHeader";
import { getAuthServerSide } from "@/app/api/auth/[...nextauth]/authOptions";

type Props = {};

export default async function page({}: Props) {
  const { user, email } = await getAuthServerSide({ require: true });
  return (
    <div className="container-fluid px-2 px-md-4">
      <div
        className="page-header min-height-300 border-radius-xl mt-4"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <span className="mask  bg-gradient-primary  opacity-6" />
      </div>
      <div className="card card-body mx-3 mx-md-4 mt-n6">
        <ProfileHeader user={user} email={email}></ProfileHeader>
        <div className="row">
          <div className="row">
            <div className="col-12 col-xl-4">
              <PlatformSettings user={user} />
            </div>
            <div className="col-12 col-xl-4">
              <ProfileInformation user={user} email={email} />
            </div>
            <div className="col-12 col-xl-4">
              <Conversation user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
