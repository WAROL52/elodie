"use client";
import React from "react";
import { Avatar, Segmented } from "antd";
import { UserAuth } from "@/app/api/auth/[...nextauth]/authOptions";
import { Emails } from "@prisma/client";
import { UserOutlined } from "@ant-design/icons";

export type ProfileHeaderProps = {
  user: UserAuth;
  email: Emails;
};

export function ProfileHeader({ user, email }: ProfileHeaderProps) {
  return (
    <div className="row gx-4 mb-2">
      <div className="col-auto">
        <div className="avatar avatar-xl position-relative">
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
        </div>
      </div>
      <div className="col-auto my-auto">
        <div className="h-100">
          <h5 className="mb-1">
            {user.firstname} {user.lastname}
          </h5>
          <p className="mb-0 font-weight-normal text-sm">{email.role}</p>
        </div>
      </div>
    </div>
  );
}
