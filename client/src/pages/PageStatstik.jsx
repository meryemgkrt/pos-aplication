import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import user from "../img/user.png";
import money from "../img/money.png";
import product from "../img/product.png";
import sale from "../img/sale.png";
import StatisticCard from "../components/statistic/StatisticCard";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Spin } from "antd";

Chart.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement
);

const StatisticPages = () => {
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu için state
  const posUser = JSON.parse(localStorage.getItem("user"));
  console.log(posUser);

  // Ürün verilerini çekme işlemi
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        /* console.log(error); */
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bills/get-all");
        const json = await response.json();
        /*  console.log("Fatura verileri:", json); */
        setBills(json);
        setLoading(false);
      } catch (error) {
        /*  console.log("fetch data failed", error); */
        setLoading(false);
      }
    };
    asyncFetch();
  }, []);

  const totalAmount = () => {
    if (!bills || bills.length === 0) {
      return "0₺";
    }
    const amount = bills.reduce((total, item) => item.totalAmount + total, 0);
    return `${amount.toFixed(2)}₺`;
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const pieData = {
    labels: bills.map((bill) => bill.customerName),
    datasets: [
      {
        label: "SubTotal",
        data: bills.map((bill) => bill.subTotal),
        backgroundColor: COLORS,
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: bills.map((bill) => bill.customerName),
    datasets: [
      {
        label: "Total Amount (₺)",
        data: bills.map((bill) => bill.totalAmount),
        backgroundColor: bills.map(
          (bill, index) => COLORS[index % COLORS.length]
        ),
        borderRadius: 10,
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}₺`,
        },
      },
    },
    cutout: "50%",
    radius: "80%",
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Header />
      {loading ? (
        <Spin
          size="large"
          className="absolute flex items-center justify-center w-screen h-screen top-1/3 left-1/2"
        />
      ) : (
        <div className="px-6 pb-2 md:pb-20">
          <h1 className="mb-4 text-4xl font-bold text-center">
            İSTATİSTİKLERİM
          </h1>
          <div className="statistic-section">
            <h2 className="text-lg">
              {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  /*  console.log(item.id || index); */
                  return <div key={item.id || index}>{item.name}</div>;
                })}
              Hoş Geldin{" "}
              <span className="text-xl font-bold text-green-700">
                {posUser.userName}
              </span>
            </h2>

            {/* Toplam Kazanç Kartı */}
            <div className="grid gap-4 my-10 md:gap-10 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
              <StatisticCard
                title={"Toplam Müşteri"}
                amount={"10"}
                img={user}
              />
              <StatisticCard
                title={"Toplam Kazanç"}
                amount={totalAmount()}
                img={money}
              />
              <StatisticCard title={"Toplam Satış"} amount={"6"} img={sale} />
              <StatisticCard
                title={"Toplam Ürün"}
                amount={"34"}
                img={product}
              />
            </div>

            {/* Grafikler */}
            {bills.length > 0 ? (
              <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
                {/* Pie Chart */}
                <div className="w-full lg:w-1/2" style={{ height: "400px" }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>

                {/* Bar Chart */}
                <div className="w-full lg:w-1/2" style={{ height: "400px" }}>
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
            ) : (
              <Spin
                size="large"
                className="absolute flex items-center justify-center w-screen h-screen top-1/2 left-1/2"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticPages;
