import React, { useEffect } from "react";

import HomePages from "./pages/HomePages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CartPages from "./pages/CartPages";
import BillsPages from "./pages/BillsPages";
import CustomersPages from "./pages/CustomersPages";
import StatisticPages from "./pages/StatisticPages";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductsPages from "./pages/ProductsPages";
import { useSelector } from "react-redux";


const App = () => {
  const cart = useSelector((state) => state.cart);
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RouterControl>
             <HomePages />
          </RouterControl>
         } />
        <Route path="/cart" element={
          <RouterControl>
             <CartPages />
          </RouterControl>
        } />
        <Route path="/bills" element={
          <RouterControl>
             <BillsPages />
          </RouterControl>
        } />
        <Route path="/customers" element={
          <RouterControl>
             <CustomersPages />
          </RouterControl>
        } />
        <Route path="/statistic" element={
          <RouterControl>
             <StatisticPages />
          </RouterControl>
        } />
        <Route path="/products" element={
          <RouterControl>
             <ProductsPages />
          </RouterControl>
        } />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


export const RouterControl =({children})=>{
  if(localStorage.getItem("user")){
    return children;
}else{
  return <Navigate to="/login" />
}
}