"use client";
import { deleteConcert } from "@/controller/concerts";
import {
  DeleteOutlined,
  ExclamationCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex, Modal, Space, message } from "antd";

const { confirm } = Modal;

const ConcertList = ({
  concerts,
  fetchConcerts,
}: {
  concerts: any;
  fetchConcerts: () => Promise<void>;
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  // const [concerts, setConcerts] = useState<any[]>([]);

  const onDelete = async (concertId: string) => {
    try {
      const adminToken = localStorage.getItem("adminToken") as string;
      const deteledItem = await deleteConcert(concertId, adminToken);
      messageApi.open({
        type: "success",
        content: "Create Successfully",
      });
      if (deteledItem.id) {
        // const concerts = await getConcerts();
        // setConcerts(concerts);
        fetchConcerts();
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: `${error}`,
      });
    }
  };

  const showDeleteConfirm = (concertId: string, name: string) => {
    confirm({
      title: "Are you sure to delete?",
      icon: <ExclamationCircleFilled />,
      content: `"${name}"`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onDelete(concertId);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     (async () => {
  //       try {
  //         const concerts = await getConcerts();
  //         setConcerts(concerts);
  //       } catch {
  //         console.log("Fail to fatch!");
  //       }
  //     })();
  //   }
  // }, []);

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

              <Button
                type="primary"
                size="large"
                icon={<DeleteOutlined />}
                danger
                onClick={() => {
                  showDeleteConfirm(concert.id, concert.name);
                }}
              >
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
    </Space>
  );
};

export default ConcertList;
