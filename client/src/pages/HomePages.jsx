import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Categories from "../components/categoies/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";
import { Spin } from "antd";

const HomePages = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setAddIsModalOpen] = useState(false); // Modal state'i tanımlandı

  useEffect(() => {
    const getProducts = async () => {
      try {
       
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
       /*  console.log(data); */
        setProducts(data);
      } catch (error) {
      /*   console.log("Error fetching products:", error); */
      }
    };

    getProducts();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/category/get-all");
        const data = await res.json();
        if (data) {
          setCategories(
            data.map((item, index) => ({
              ...item,
              value: item.title,
              key: item.id || index,
            }))
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  console.log(search);
  return (
    <div>
      <Header setSearch={setSearch} />
      {products && categories ? (
        <div className="flex flex-col justify-between gap-10 px-6 pb-24 home md:flex-row md:pb-0">
          <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
            <Categories
              categories={categories}
              setCategories={setCategories}
              setFiltered={setFiltered}
              products={products}
            />
          </div>
          <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto min-h-[600px]">
            <Products
              categories={categories}
              filtered={filtered}
              products={products}
              setProducts={setProducts}
              search={search}
            />
          </div>
          <div className="md:mr-0  cart-wrapper min-w-[300px] -mr-[24px] md:-mt-[24px] sm:-mr-[24px] sm:-mt-[24px] border">
            <CartTotals />
          </div>
        </div>
      ) : (
        <Spin
          size="large"
          className="absolute flex items-center justify-center w-screen h-screen top-1/2 left-1/2"
        />
      )}
    </div>
  );
};

export default HomePages;
