"use client";
import { getConcerts } from "@/controller/concerts";
import Boards from "@/lib/Components/Boards";
import ConcertList from "@/lib/Components/ConcertList";
import CreateConcert from "@/lib/Components/CreateConcert";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [concerts, setConcerts] = useState<any[]>([]);

  const fetchConcerts = async () => {
    try {
      const concerts = await getConcerts();
      setConcerts(concerts);
    } catch {
      console.log("Fail to fatch!");
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "overview",
      label: "Overview",
      forceRender: true,
      children: (
        <ConcertList concerts={concerts} fetchConcerts={fetchConcerts} />
      ),
    },
    {
      key: "create",
      label: "Create",
      forceRender: true,
      children: <CreateConcert fetchConcerts={fetchConcerts} />,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchConcerts();
    }
  }, []);

  return (
    <Content id="home">
      <Boards />
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </div>
    </Content>
  );
}
