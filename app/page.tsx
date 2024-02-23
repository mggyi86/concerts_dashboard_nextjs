import Boards from "@/lib/Components/Boards";
import { Button, Card, Flex, Layout, Space, Tabs } from "antd";
import styles from "./page.module.css";
import type { TabsProps } from "antd";
import {
  UserOutlined,
  CloseCircleOutlined,
  InsertRowBelowOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ConcertList from "@/lib/Components/ConcertList";
import { Content } from "antd/es/layout/layout";
import { getConcerts } from "@/controller/concerts";

export default async function Home() {
  const concerts = await getConcerts();

  const items: TabsProps["items"] = [
    {
      key: "overview",
      label: "Overview",
      children: <ConcertList concerts={concerts} />,
    },
    {
      key: "create",
      label: "Create",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <Content id="home">
      <Boards />
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </div>
    </Content>
  );
}
