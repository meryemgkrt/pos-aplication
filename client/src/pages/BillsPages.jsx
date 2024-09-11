import React from "react";
import Header from "../components/header/Header";
import { Table, Card, Button } from "antd";
import PrintBills from "../components/bills/PrintBills";
import { useState, useEffect } from "react";
const BillsPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [billsItems, setBillsItems] = useState();
  const [customer, setCustomer] = useState();

 
  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();
        setBillsItems(data);
      } catch (error) {
        console.log("Error:", error.message || error);
      }
    };
    getBills();
  }, []);

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Oluşturulma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render(text) {
        return <span>{text.substring(0, 10)}</span>;
      },
    },

    {
      title: "Ödenme Yöntemi",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render(text) {
        return <span className="">{text}₺</span>;
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render(_, record) {
        return (
          <Button
            className="w-full mt-4"
            type="primary"
            size="large"
            onClick={() => {
              setIsModalOpen(true);
              setCustomer(record);
            }}
          >
            Yazdır
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className="mb-4 text-4xl font-bold text-center">FATURALAR</h1>
        <Table
          dataSource={billsItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x:1000,
            y:300
          }}
        />
      </div>
      <PrintBills customer={customer} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default BillsPages;
