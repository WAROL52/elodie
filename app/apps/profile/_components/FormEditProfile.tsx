"use client";
import { Users } from "@prisma/client";
import { Button, Checkbox, Form, FormInstance, Input } from "antd";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = Users;
export type FormEditProfileProps = {
  form: FormInstance<FieldType>;
  user: Users;
  onFinish: (user: Users) => void;
};
export function FormEditProfile({
  form,
  user,
  onFinish,
}: FormEditProfileProps) {
  return (
    <Form<FieldType>
      form={form}
      size="small"
      onFinish={onFinish}
      initialValues={user}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item<FieldType> label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item<FieldType> label="Nom" name="firstname">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Username" name="lastname">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="portable" name="phone">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Adresse" name="adresse">
        <Input />
      </Form.Item>
    </Form>
  );
}
