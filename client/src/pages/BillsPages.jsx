import React from "react";
import Header from "../components/header/Header";
import { Table, Card, Button } from "antd";
import PrintBills from "../components/bills/PrintBills";
import { useState } from "react";
const BillsPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
      setIsModalOpen(true);
    };

  
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return <div>
    <Header/>
    <div className="px-6">
      <h1 className="mb-4 text-4xl font-bold text-center">FATURALAR</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="flex justify-end mt-4 cart-total">
          <Card className=" w-72">
            
            <Button onClick={showModal} size="large" className="w-full mt-4" type="primary">
              Siparişi Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <PrintBills isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  />
  </div>;
};

export default BillsPages;
