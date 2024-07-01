import { Button, Form, Input, Carousel } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import statistic from "../../img/12.webp"
const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between h-full md:flex-row">
        <div className="relative flex flex-col items-center justify-center w-full h-full px-10 md:px-20">
          <h1 className="mb-2 text-3xl font-bold text-center md:text-5xl">
            LOGO
          </h1>
          <Form
            layout="vertical"
            style={{
              fontFamily: "Electrolize",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Form.Item
              label="Kullanıcı Adı"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Kullanıcı adı alanı boş bırakılamaz",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-posta"
              name="email"
              rules={[
                {
                  required: true,
                  message: "E-mail alanı boş bırakılamaz",
                },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Şifre alanı boş bırakılamaz",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Şifre Tekrar"
              name="passwordAgain"
              rules={[
                {
                  required: true,
                  message: "Şifrenizi onaylayınız",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="absolute left-0 flex items-center justify-center w-full bottom-10">
            Bir hesabınız var mı?
            <Link to="/login" className="ml-2 text-blue-500">
              Giriş Yap
            </Link>
          </div>
        </div>

        <div className="hidden h-screen xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex bg-custom-gradient">
          <div className="w-full">
          <Carousel >
      <div>
        <h3 >1</h3>
        <img src={statistic} alt=""/>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3 >3</h3>
      </div>
      <div>
        <h3 >4</h3>
      </div>
    </Carousel>
    
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
