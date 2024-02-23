"use server";
import { Content } from "antd/es/layout/layout";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <div>{children}</div>
      </div>
    </Content>
  );
};

export default layout;
