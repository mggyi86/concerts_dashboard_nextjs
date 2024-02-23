"use client";
import { Table, Space, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import type { TableProps } from 'antd';
import { getAllLogs } from '@/controller/logs';

interface DataType {
  key: string;
  reservedAt: string;
  userName: string;
  concertName: string;
  action: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Date Time',
    dataIndex: 'reservedAt',
    key: 'date',
    responsive: ['md'],
    render: (date) => `${new Date(date).toLocaleString('en-US')}`,
  },
  {
    title: 'Username',
    dataIndex: 'userName',
    key: 'user_name',
  },
  {
    title: 'Concert Name',
    dataIndex: 'concertName',
    key: 'concert_name',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const HistoryPage = () => {
  const [logs, setLogs] = useState<DataType[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async() => {
        try {
          const adminToken = localStorage.getItem("adminToken") as string;
          let logs = await getAllLogs(adminToken);
          logs = logs.map((log: any) => ({
            ...log,
            key: log.id,
            userName: log.user.name,
            concertName: log.concert.name
          }))
          setLogs(logs);
        } catch {
          console.log("Fatch Fail!");
        }
      })();
    }
  }, []);

  return (
    <Table columns={columns} dataSource={logs} />
  );
};

export default HistoryPage;
