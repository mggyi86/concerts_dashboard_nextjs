"use server";
import React from "react";
import { Content } from "antd/es/layout/layout";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Content>{children}</Content>
    </main>
  );
};

export default Layout;
