/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button, Flex, Layout, Menu, MenuProps, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { loginAdmin, loginUser } from "@/controller/login";

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
];

const adminSider = {
  label: "Switch to Admin",
  key: "admin",
  icon: <UserSwitchOutlined />,
};

const { Title } = Typography;

const SiderComponent = () => {
  const router = useRouter();
  const [siderItems, setSiderItems] = useState<ItemType[]>([...items]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      (async() => {
        try {
          const user = await loginUser();
          const admin =  await loginAdmin();
          localStorage.setItem("userToken", user.accessToken);
          localStorage.setItem("adminToken", admin.accessToken);
        } catch {
          console.log("Login Fail!");
        }
      })();
    }
  }, []);

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
        items={siderItems}
        selectable
        defaultSelectedKeys={["home"]}
        onClick={({ key }: { key: string }) => {
          if (key === "user") {
            setSiderItems([adminSider]);
          } else if (key === "admin") {
            setSiderItems([...items]);
            return router.push("/");
          }
          router.push(`/${key}`);
        }}
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
