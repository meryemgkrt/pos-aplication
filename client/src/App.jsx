import React from "react";

import HomePages from "./pages/HomePages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPages from "./pages/CartPages";
import BillsPages from "./pages/BillsPages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/bills" element={<BillsPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
