import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";

import { useNavigate } from "react-router-dom";

const Products = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setAddIsModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        console.log(data);
        setProducts(data);
        setAddIsModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="grid gap-4 products-wrapper grid-cols-card ">
      {products.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h-[180px] max-h-[90px]">
        <PlusOutlined
          onClick={() => setAddIsModalOpen(true)}
          className="flex items-center justify-center text-4xl text-white"
        />
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px] max-h-[90px]">
        <EditOutlined
          onClick={() => navigate("/products")}
          className="flex items-center justify-center text-4xl text-white"
        />
      </div>

      <AddProduct
        setProducts={setProducts}
        products={products}
        categories={categories}
        isAddModalOpen={isAddModalOpen}
        setAddIsModalOpen={setAddIsModalOpen}
      />
  
    </div>
  );
};

export default Products;
