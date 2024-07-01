import React from "react";
import { Badge, Input } from "antd";
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

const Header = () => {
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
        <div className="fixed bottom-0 left-0 z-50 flex items-center justify-between w-screen px-4 py-1 bg-white border-t menu-links gap-7 md:static md:w-auto md:bg-transparent md:border-t-0 md:px-0">
          <Link to={"/"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Ana Sayfa</span>
          </Link>
          <Badge count={5} offset={[0, 2]} className="hidden md:flex">
            <Link to={"/cart"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="md:text-[10px] text-[12px]">Sepet</span>
            </Link>
          </Badge>
          <Link to={"/bills"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Faturalar</span>
          </Link>
          <Link to={"/customeers"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <UserOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Müşteriler</span>
          </Link>
          <Link to={"/statistic"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <BarChartOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">İstatistikler</span>
          </Link>
          <Link to={"/register"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={5} offset={[0, 2]} className="flex items-center justify-center text-2xl md:hidden">
          <Link to={"/cart"} className="menu-link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <ShoppingCartOutlined className="text-xl md:text-2xl" />
           
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
