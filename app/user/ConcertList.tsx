"use client";
import { cancelConcert, reserveConcert } from "@/controller/concerts";
import {
  CheckCircleFilled,
  ExclamationCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Modal, Space, message } from "antd";

const { confirm } = Modal;

const ConcertList = ({
  concerts,
  userProfile,
  fetchConcerts,
}: {
  concerts: any;
  userProfile: any;
  fetchConcerts: () => Promise<void>;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const onCancelConcert = async (concertId: string) => {
    try {
      const userToken = localStorage.getItem("userToken") as string;
      const cancelItem = await cancelConcert(concertId, userToken);
      messageApi.open({
        type: "success",
        content: "Successfully Cancel",
      });
      if (cancelItem.id) {
        fetchConcerts();
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    }
  };

  const onReserveConcert = async (concertId: string) => {
    try {
      const userToken = localStorage.getItem("userToken") as string;
      const reservelItem = await reserveConcert(concertId, userToken);
      messageApi.open({
        type: "success",
        content: "Successfully Reserve",
      });
      if (reservelItem.id) {
        fetchConcerts();
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    }
  };

  const showCancelConfirm = (concertId: string, name: string) => {
    confirm({
      title: "Are you sure to Cancel?",
      icon: <ExclamationCircleFilled />,
      content: `"${name}"`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onCancelConcert(concertId);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showReserveConfirm = (concertId: string, name: string) => {
    confirm({
      title: "Do you Want to Reserve?",
      icon: <CheckCircleFilled />,
      content: `"${name}"`,
      onOk() {
        onReserveConcert(concertId);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {contextHolder}
      {concerts &&
        concerts?.map((concert: any, idx: number) => (
          <Card title={concert.name} key={`concert-${idx}`}>
            <p>{concert.description}</p>
            <Flex
              gap="middle"
              justify="space-between"
              style={{ marginTop: "32px" }}
            >
              <span style={{ fontSize: "18px" }}>
                <UserOutlined style={{ fontSize: "24px" }} /> {concert.seat}
              </span>
              {userProfile &&
              concert &&
              concert?.reservedUsers?.includes(userProfile?.id) ? (
                <Button
                  type="primary"
                  size="large"
                  danger
                  onClick={() => {
                    showCancelConfirm(concert.id, concert.name);
                  }}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    showReserveConfirm(concert.id, concert.name);
                  }}
                >
                  Reserve
                </Button>
              )}
            </Flex>
          </Card>
        ))}
    </Space>
  );
};

export default ConcertList;
