import React from "react";
import { Badge, Input } from "antd";
import  {useSelector} from "react-redux";
import {
  SearchOutlined,
  LogoutOutlined,
  BarChartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mb-6 border-b">
      <header className="flex items-center justify-between gap-10 px-6 py-4">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="flex justify-center flex-1 header-search">
          <Input
            size="large"
            placeholder="Ürün Ara"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links">
          <Link to={"/"} className="menu-link ">
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Ana Sayfa</span>
          </Link>
          <Badge count={cart.cartItems.length} offset={[0, 2]} className="hidden md:flex">
            <Link to={"/cart"} className="menu-link ">
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="md:text-[10px] text-[12px]">Sepet</span>
            </Link>
          </Badge>
          <Link to={"/bills"} className="menu-link ">
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Faturalar</span>
          </Link>
          <Link to={"/customeers"} className="menu-link ">
            <UserOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Müşteriler</span>
          </Link>
          <Link to={"/statistic"} className="menu-link ">
            <BarChartOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">İstatistikler</span>
          </Link>
          <Link to={"/register"} className=" menu-link">
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={cart.cartItems.length} offset={[0, 2]} className="flex items-center justify-center text-2xl md:hidden">
          <Link to={"/cart"} className="menu-link ">
            <ShoppingCartOutlined className="text-xl md:text-2xl" />
           
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
