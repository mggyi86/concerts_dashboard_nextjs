"use client";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Card,
  message,
} from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SaveOutlined, UserOutlined } from "@ant-design/icons";
import { createConcert } from "@/controller/concerts";

const CreateConcert = ({
  fetchConcerts,
}: {
  fetchConcerts: () => Promise<void>;
}) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, formState, control, reset, resetField } = useForm({
    defaultValues: {
      name: "",
      description: "",
      seat: 100,
    },
  });
  const { errors } = formState;
  return (
    <Card title="Create">
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        size="large"
        onFinish={handleSubmit(async (data) => {
          try {
            const adminToken = localStorage.getItem("adminToken") as string;
            await createConcert(data, adminToken);
            messageApi.open({
              type: "success",
              content: "Create Successfully",
            });
            reset();
            fetchConcerts();
          } catch (error) {
            messageApi.open({
              type: "error",
              content: `${error}`,
            });
          }
        })}
        onFinishFailed={() => {
          console.log("finished fail");
        }}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Concert Name is required" }}
              render={({ field }) => (
                <Form.Item
                  validateStatus={errors.name != null ? "error" : ""}
                  help={errors.name?.message as string}
                  label="Concert Name"
                >
                  <Input {...field} />
                </Form.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12}>
            <Controller
              name="seat"
              control={control}
              rules={{ required: "Total of Seat is required" }}
              render={({ field }) => (
                <Form.Item
                  validateStatus={errors.seat != null ? "error" : ""}
                  help={errors.seat?.message as string}
                  label="Total of Seat"
                >
                  <InputNumber
                    addonAfter={<UserOutlined />}
                    {...field}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <Form.Item
              validateStatus={errors.description != null ? "error" : ""}
              help={errors.description?.message as string}
              label="Description"
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Form.Item
          wrapperCol={{
            xs: { offset: 16, span: 2 },
            sm: { offset: 18, span: 2 },
            md: { offset: 20, span: 2 },
            lg: { offset: 22, span: 2 },
          }}
        >
          <Button
            key={1}
            type={"primary"}
            style={{ marginRight: "0.5rem" }}
            icon={<SaveOutlined />}
            onClick={() => {
              form.submit();
            }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateConcert;
