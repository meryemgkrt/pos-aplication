import React from "react";

import HomePages from "./pages/HomePages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPages from "./pages/CartPages";
import BillsPages from "./pages/BillsPages";
import CustomersPages from "./pages/CustomersPages";
import StatisticPages from "./pages/StatisticPages";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/bills" element={<BillsPages />} />
        <Route path="/customeers" element={<CustomersPages />} />
        <Route path="/statistic" element={<StatisticPages/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
