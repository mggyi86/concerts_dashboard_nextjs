"use client";
import { Button, Flex, Layout, Menu, MenuProps, Space, Typography } from "antd";
import React from "react";
import {
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "History",
    key: "history",
    icon: <HistoryOutlined />,
  },
  {
    label: "Switch to user",
    key: "user",
    icon: <UserSwitchOutlined />,
  },
  {
    label: "Switch to Admin",
    key: "admin",
    icon: <UserSwitchOutlined />,
  },
];

const { Title } = Typography;

const SiderComponent = ({ concerts }: any) => {
  const router = useRouter();
  console.log(concerts, "concerts");
  return (
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log("onBreakpoint", broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log("onCollapse", collapsed, type);
      }}
    >
      <Title style={{ paddingTop: "64px", paddingLeft: "24px" }}>Admin</Title>
        <Menu
          mode="inline"
          items={items}
          selectable
          defaultSelectedKeys={["home"]}
          onClick={({ key }: { key: string }) => router.push(`/${key}`)}
        />
        <Menu
          mode="inline"
          items={[
            {
              label: "Logout",
              key: "logout",
              icon: <LogoutOutlined />,
            },
          ]}
          className="menu_logout"
        />
    </Sider>
  );
};

export default SiderComponent;
