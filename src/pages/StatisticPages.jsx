import React from "react";
import Header from "../components/header/Header";
import user from "../img/user.png";
import money from "../img/money.png";
import product from "../img/product.png";
import sale from "../img/sale.png";
import StatisticCard from "../components/statistic/StatisticCard";
import { Area, Pie } from "@ant-design/plots";

const StatisticPages = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    xField: (d) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "darkgreen",
        strokeWidth: 2,
      },
    },
  };

  const config2 = {
    data: [
      { type: "Category 1", value: 27 },
      { type: "Category 2", value: 25 },
      { type: "Category 3", value: 18 },
      { type: "Category 4", value: 15 },
      { type: "Category 5", value: 10 },
      { type: "Other", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    paddingRight: 80,
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "AntV\nCharts",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
          fontStyle: "bold",
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="px-6 pb-2 md:pb-20">
        <h1 className="mb-4 text-4xl font-bold text-center">İSTATİSTİKLERİM</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş Geldin{" "}
            <span className="text-xl font-bold text-green-700">Admin</span>.
          </h2>
          <div className="grid gap-4 my-10 md:gap-10 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
            <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={user} />
            <StatisticCard
              title={"Toplam Kazanç"}
              I
              amount={"657,67₺"}
              img={money}
            />
            <StatisticCard title={"Toplam Satış"} amount={"6"} img={sale} />
            <StatisticCard title={"Toplam Ürün."} amount={"34"} img={product} />
          </div>
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="w-full h-100 lg:w-1/2 lg:h-full">
              <Area {...config} />
            </div>
            <div className="w-full mb-12 h-100 lg:w-1/2 lg:h-full">
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPages;
