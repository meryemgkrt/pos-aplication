import Header from "../components/header/Header";
import Categories from "../components/categoies/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";
import { useEffect, useState } from "react";
const HomePages = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/category/get-all");
        const data = await res.json();
        console.log(data);
        data && setCategories(
          data.map((item, index) => {
            return {
              ...item,
              value: item.title,
              key: item.id || index,
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  

  console.log(categories)
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen gap-10 px-6 pb-32 md:pb-0 justify-b etween md:flex-row home">
        <div className="categories overflow-y-auto max-h-[calc(100vh_-_112px)]  md:pb-64">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto">
          <Products categories={categories}/>
        </div>
        <div className="md:mr-0  cart-wrapper min-w-[300px] -mr-[24px] md:-mt-[24px] sm:-mr-[24px] sm:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default HomePages;
