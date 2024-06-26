import { Table, Card, Button, Modal } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";
import CreateBills from "../components/cart/CreateBills";
const CartPages = () => {
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
  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="flex justify-end mt-4 cart-total">
          <Card className=" w-72">
            <div className="flex justify-between">
              <span className="">Ara Toplam</span>
              <span className="">500₺</span>
            </div>
            <div className="flex justify-between">
              <span className="">KDV Toplam %10</span>
              <span className="font-semibold text-red-600">+50₺</span>
            </div>
            <div className="flex justify-between border-t">
              <b className="font-bold text-green-600">Toplam</b>
              <b className="">550₺</b>
            </div>
            <Button onClick={showModal} size="large" className="w-full mt-4" type="primary">
              Siparişi Oluştur
            </Button>
          </Card>
        </div>
       <CreateBills isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  />
      </div>
    </>
  );
};

export default CartPages;
