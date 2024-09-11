import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import user from "../img/user.png";
import money from "../img/money.png";
import product from "../img/product.png";
import sale from "../img/sale.png";
import StatisticCard from "../components/statistic/StatisticCard";
import { Column, Pie, Line } from "@ant-design/plots";

const StatisticPages = () => {
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]); 
  const [items, setItems] = useState([]);

  // Ürün verilerini çekme işlemi
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  // Fatura verilerini çekme işlemi
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bills/get-all");
        const json = await response.json();
        setBills(json);
      } catch (error) {
        console.log("fetch data failed", error);
      }
    };
    asyncFetch();
  }, []);

  // Column (Sütun) Grafiği için config
  const columnConfig = {
    data: bills,
    xField: "customerName", 
    yField: "subTotal", 
    colorField: "customerName", 
    label: {
      position: 'middle', 
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      customerName: { alias: 'Müşteri Adı' },
      subTotal: { alias: 'Toplam Tutar' },
    },
  };

  // Pie chart için config
  const pieConfig = {
    appendPadding: 10,
    data: bills,
    angleField: "subTotal",
    colorField: "customerName",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Toplam\nDeğer",
      },
    },
  };

  
  const lineConfig = {
    data: bills,
    xField: "createdAt", 
    yField: "subTotal", 
    seriesField: "customerName", 
    yAxis: {
      label: {
        formatter: (v) => `${v}₺`,
      },
    },
    xAxis: {
      type: 'time',
      title: {
        text: "Fatura Tarihi",
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: {
      showMarkers: true,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };

  const totalAmount = () => {
    const amount = bills.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };

  return (
    <>
      <Header />
      <div className="px-6 pb-2 md:pb-20">
        <h1 className="mb-4 text-4xl font-bold text-center">İSTATİSTİKLERİM</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            {items &&
              items.length > 0 &&
              items.map((item, index) => {
                console.log(item.id || index); 
                return <div key={item.id || index}>{item.name}</div>;
              })}
            Hoş Geldin{" "}
            <span className="text-xl font-bold text-green-700">Admin</span>.
          </h2>

          <div className="grid gap-4 my-10 md:gap-10 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
            <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={user} />
            <StatisticCard title={"Toplam Kazanç"} amount={totalAmount()} img={money} />
            <StatisticCard title={"Toplam Satış"} amount={"6"} img={sale} />
            <StatisticCard title={"Toplam Ürün"} amount={"34"} img={product} />
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="w-full h-100 lg:w-1/2 lg:h-full">
              <Column {...columnConfig} />
            </div>
            <div className="w-full mb-12 h-100 lg:w-1/2 lg:h-full">
              <Pie {...pieConfig} />
            </div>
          </div>

          {/* <div className="mt-12">
            <Line {...lineConfig} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default StatisticPages;
