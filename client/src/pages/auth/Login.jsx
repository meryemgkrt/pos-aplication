import { Button, Form, Input, Carousel, Checkbox } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import responsive from "../../img/responsive-design.png";
import customer from "../../img/customer.png";
import admin from "../../img/computer-engineer.png";
import istatistic from "../../img/bar-graph.png";
import AuthCarousel from "../../components/auth/AuthCarosel";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="relative flex flex-col justify-center w-full h-full px-10 xl:px-20 xl:w-1/3">
          <div className="mb-2 text-5xl font-bold text-center">
            <h1 className="mb-2 text-5xl font-bold text-center">LOGO</h1>
            <Form layout="vertical" onSubmit="handleSubmit">
              <Form.Item
                label="E-mail"
                name={"email"}
                rules={[
                  {
                    required: true,
                    message: "E-mail Alanı Boş Bırakılamaz!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Şifre"
                name={"password"}
                rules={[
                  {
                    required: true,
                    message: "Şifre Alanı Boş Bırakılamaz!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item name={"remember"} valuePropName="checked">
                <div className="flex items-center justify-between">
                  <Checkbox>Remember Me</Checkbox>
                  <Link className="text-red-600">Forget Password?</Link>
                </div>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  size="large"
                >
                  Giriş Yap
                </Button>
              </Form.Item>
            </Form>
            <div className="absolute left-0 flex justify-center w-full text-xl bottom-10">
              Bir hesabınız yok mu?&nbsp;
              <Link to="/register" className="text-blue-600">
                Şimdi kayıt ol
              </Link>
            </div>
          </div>
        </div>

        <div className="rigth xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="flex items-center w-full h-full">
            <div className="w-full">
              <Carousel className="!h-full px-6" autoplay>
                <AuthCarousel
                  img={responsive}
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img={istatistic}
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img={customer}
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img={admin}
                   title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
