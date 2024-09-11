import React  from 'react'
import Header from '../components/header/Header'
import { Table } from 'antd'

import { useEffect,useState } from "react";
const CustomersPages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [billsItems, setBillsItems] = useState();
  const showModal = () => {
      setIsModalOpen(true);
    };
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
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render:(text)=>{
        return <span>{text.substring(0,10)}</span>
      }
    },
  ];
  return (
    <div>
        <Header/>
        <div className="px-6">
      <h1 className="mb-4 text-4xl font-bold text-center">MÜŞTERİLER</h1>
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
     
    </div>
  )
}

export default CustomersPages