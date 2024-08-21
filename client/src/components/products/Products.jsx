import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { useNavigate } from "react-router-dom";

const Products = ({categories}) => {
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

    <div className="flex items-center justify-center transition bg-purple-700 border cursor-pointer select-none hover:opacity-90 product-item hover:shadow-lg-all min-h-[180px]">
     <PlusOutlined onClick={()=>setAddIsModalOpen(true)} className="flex items-center justify-center text-4xl text-white" />
    </div>
    <div className="flex items-center justify-center transition bg-orange-700 border cursor-pointer select-none product-item hover:shadow-lg-all hover:opacity-90  min-h-[180px]">
     <EditOutlined onClick={()=>navigate("/products")} className="flex items-center justify-center text-4xl text-white" />
    </div>
    
    <AddProduct setProducts={setProducts} products={products} categories={categories} isAddModalOpen={isAddModalOpen} setAddIsModalOpen={setAddIsModalOpen} />
    <EditProduct setProducts={setProducts} products={products} categories={categories} isAddModalOpen={isAddModalOpen} setAddIsModalOpen={setAddIsModalOpen} />
    
     </div>
  
  
    
  );
};

export default Products;
