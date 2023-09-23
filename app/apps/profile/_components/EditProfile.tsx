"use client";
import { EditFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
export type EditProfileProps = {
  user: Users;
};
import { FormEditProfile } from "./FormEditProfile";
import { Users } from "@prisma/client";
import {
  usePrismaClient,
  usePrismaQuery,
} from "@/libs/prismaClientQuery/usePrismaClient";
import { useRouter } from "next/navigation";

export function EditProfile({ user }: EditProfileProps) {
  const { refresh } = useRouter();
  const prisma = usePrismaQuery();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async (valueUser: Users) => {
    setConfirmLoading(true);
    await prisma.users.update({
      where: { id: user.id },
      data: valueUser,
    });
    refresh();
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button
        type="dashed"
        size="small"
        onClick={showModal}
        icon={<EditFilled />}
        title="Modifer"
      />
      <Modal
        title="Modifier"
        onCancel={handleCancel}
        open={open}
        onOk={() => form.submit()}
        confirmLoading={confirmLoading}
      >
        <FormEditProfile onFinish={handleOk} form={form} user={user} />
      </Modal>
    </>
  );
}
