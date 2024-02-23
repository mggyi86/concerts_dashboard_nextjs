"use client";
import { Card, Col, Flex, Layout, Row } from "antd";
import {
  UserOutlined,
  CloseCircleOutlined,
  InsertRowBelowOutlined,
} from "@ant-design/icons";
import styles from "./page.module.css";

const { Content } = Layout;
export default function Home() {
  return (
    <Content id="home">
      <Row gutter={[16, 24]} className={styles.center} wrap>
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ background: "#0070A4" }}
            className={styles.card}
          >
            <Flex gap="small" justify="center" align="center" vertical>
              <UserOutlined style={{ fontSize: "40px" }} />
              <span className={styles.name}>Total of seats</span>
              <span className={styles.count}>500</span>
            </Flex>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ background: "#00A58B" }}
            className={styles.card}
          >
            <Flex gap="small" justify="center" align="center" vertical>
              <InsertRowBelowOutlined style={{ fontSize: "40px" }} />
              <span className={styles.name}>Reserve</span>
              <span className={styles.count}>120</span>
            </Flex>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ background: "#E84E4E" }}
            className={styles.card}
          >
            <Flex gap="small" justify="center" align="center" vertical>
              <CloseCircleOutlined style={{ fontSize: "40px" }} />
              <span className={styles.name}>Cancel</span>
              <span className={styles.count}>12</span>
            </Flex>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
