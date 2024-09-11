import { Button, Form, Input, Carousel, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import responsive from "../../img/responsive-design.png";
import customer from "../../img/customer.png";
import admin from "../../img/computer-engineer.png";
import istatistic from "../../img/bar-graph.png";
import AuthCarousel from "../../components/auth/AuthCarosel";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      if (res.status === 200) {
        message.success("Kayıt Başarılı");
        navigate("/login");
        setLoading(false);
      }
    } catch (error) {
      message.error("Kayıt Başarısız");
    }
  };
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="relative flex flex-col justify-center w-full h-full px-10 xl:px-20 xl:w-1/3">
          <div className="mb-2 text-5xl font-bold text-center">
            <h1 className="mb-2 text-5xl font-bold text-center">LOGO</h1>
            <Form layout="vertical" onSubmit="handleSubmit" onFinish={onFinish}>
              <Form.Item
                label="Kullanıcı Adı"
                name={"username"}
                rules={[
                  {
                    required: true,
                    message: "Kullanıcı Adı Alanı Boş Bırakılamaz!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
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
              <Form.Item
                label="Şifre Tekrar"
                name={"passwordAgain"}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Şifreler aynı olması gerekiyor!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  size="large"
                  loading={loading}
                >
                  Kaydol
                </Button>
              </Form.Item>
            </Form>
            <div className="absolute left-0 flex justify-center w-full text-xl bottom-10">
              Bir hesabınız var mı?&nbsp;
              <Link to="/login" className="text-blue-600">
                Şimdi giriş yap
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

export default Register;
