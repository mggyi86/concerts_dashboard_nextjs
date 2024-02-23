"use client";
import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default FooterComponent;
