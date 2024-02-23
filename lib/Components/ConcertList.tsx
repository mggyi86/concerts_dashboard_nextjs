import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Space } from "antd";

const ConcertList = ({ concerts }: any) => {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
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
              >
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
      <Card title="Card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          repellendus quaerat facere quam tempora pariatur veritatis officia
          odio consequatur debitis perferendis aliquam quidem, doloribus
          molestiae hic minus vitae. Numquam, magni.
        </p>
        <Flex
          gap="middle"
          justify="space-between"
          style={{ marginTop: "32px" }}
        >
          <span style={{ fontSize: "18px" }}>
            <UserOutlined style={{ fontSize: "24px" }} /> 500
          </span>

          <Button type="primary" size="large" icon={<DeleteOutlined />} danger>
            Delete
          </Button>
        </Flex>
      </Card>
    </Space>
  );
};

export default ConcertList;
