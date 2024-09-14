import React from "react";
import { Badge, Input, message } from "antd";
import { useSelector } from "react-redux";
import {
  SearchOutlined,
  LogoutOutlined,
  BarChartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const Header = ({ setSearch }) => {
  const cart = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  const logOut = () => {
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("user");
      window.location.reload();
      navigate("/login");
      message.success("Çıkış Yapıldı");
    }
  };

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
            onClick={() => {
              pathname !== "/" && navigate("/");
            }}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className="menu-links">
          <Link to={"/"} className={`menu-link ${pathname === "/" && "active"}`}>
            <HomeOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Ana Sayfa</span>
          </Link>

          {/* Sepet item count kontrolü */}
          <Badge
            count={cart?.cartItems?.length || 0} // Güvenli kontrol ve varsayılan değer
            offset={[0, 2]}
            className="hidden md:flex"
          >
            <Link
              to={"/cart"}
              className={`menu-link ${pathname === "/cart" && "active"}`}
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
              <span className="md:text-[10px] text-[12px]">Sepet</span>
            </Link>
          </Badge>

          <Link
            to={"/bills"}
            className={`menu-link ${pathname === "/bills" && "active"}`}
          >
            <CopyOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Faturalar</span>
          </Link>
          <Link
            to={"/customers"}
            className={`menu-link ${pathname === "/customers" && "active"}`}
          >
            <UserOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Müşteriler</span>
          </Link>
          <Link
            to={"/statistic"}
            className={`menu-link ${pathname === "/statistic" && "active"}`}
          >
            <BarChartOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">İstatistikler</span>
          </Link>
          <Link onClick={logOut} className={`menu-link`}>
            <LogoutOutlined className="text-xl md:text-2xl" />
            <span className="md:text-[10px] text-[12px]">Çıkış</span>
          </Link>
        </div>

        {/* Mobil için sepet item count kontrolü */}
        <Badge
          count={cart?.cartItems?.length || 0} // Güvenli kontrol ve varsayılan değer
          offset={[0, 2]}
          className="flex items-center justify-center text-2xl md:hidden"
        >
          <Link
            to={"/cart"}
            className={`menu-link ${pathname === "/cart" && "active"}`}
          >
            <ShoppingCartOutlined className="text-xl md:text-2xl" />
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
