import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import user from "../img/user.png";
import money from "../img/money.png";
import product from "../img/product.png";
import sale from "../img/sale.png";
import StatisticCard from "../components/statistic/StatisticCard";
import { Column, Pie, Scatter, Funnel } from "@ant-design/plots";
import { Spin } from "antd";

const StatisticPages = () => {
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState();
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
        console.log("Fatura verileri:", json);
        setBills(json);
        setLoading(false); // Veri yüklendiğinde loading'i false yapıyoruz
      } catch (error) {
        console.log("fetch data failed", error);
        setLoading(false); // Hata olduğunda da loading'i kapatıyoruz
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

  const pieConfig = {
    appendPadding: 10,
    data: bills || [], // Fatura verisi, undefined ise boş bir dizi atanır
    angleField: "subTotal", // Pasta dilimi büyüklüğü
    colorField: "customerName", // Renkler müşteri adına göre
    radius: 1, // Tam ekran bir grafik için yarıçapı 1 yapıyoruz
    label: {
      type: "outer", // Etiketler grafiğin dışına yerleştirilecek
      content: "{name}\n{percentage}", // Müşteri adı ve yüzdelik oranı
      style: {
        fontSize: 12,
        fontWeight: "bold",
      },
    },
    interactions: [
      { type: "element-selected" }, // Seçim etkileşimi
      { type: "element-active" }, // Aktif eleman vurgusu
    ],
    statistic: {
      title: {
        content: "Toplam Satış", // Ortadaki başlık
      },
      content: {
        content: `${totalAmount()}₺`, // Toplam tutarı gösterir
      },
    },
    legend: {
      position: "bottom", // Renkli açıklamalar alt kısımda gösterilecek
    },
    responsive: true, // Mobil uyumlu hale getirildi
  };

  const scatterConfig = {
    appendPadding: 10,
    data: bills,
    xField: "subTotal",
    yField: "totalAmount",
    colorField: "customerName",
    shape: "circle",
    size: 5,
    tooltip: {
      showTitle: false,
      formatter: (datum) => ({
        name: datum.customerName,
        value: `Toplam: ${datum.totalAmount}₺`,
      }),
    },
    xAxis: {
      label: {
        formatter: (val) => `${val}₺`,
      },
      title: {
        text: "SubTotal (₺)",
      },
    },
    yAxis: {
      title: {
        text: "Toplam Tutar (₺)",
      },
    },
    interactions: [{ type: "element-active" }],
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
                  console.log(item.id || index);
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
              <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                <div className="w-full h-full">
                  <Pie {...pieConfig} />
                </div>
                <div className="w-full h-100 lg:w-1/2 lg:h-96">
                  <Scatter {...scatterConfig} />
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
