import { Table, Card, Button, message, Popconfirm } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";
import CreateBills from "../components/cart/CreateBills";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { deleteCart, increase, decrease, reset } from "../redux/cartSlice";

const CartPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      with: "125px",
      render: (img) => (
        <img src={img} alt="img" className="object-cover w-20 h-20" />
      ),
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },

    {
      title: "Ürün Adeti",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center">
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />
            <span className="inline-block w-6 font-bold text-center">
              {record.quantity}
            </span>
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("Ürün Silinsin Mi?")) {
                    dispatch(decrease(record));
                    message.success("Ürün Sepetten Silindi.");
                  }
                }
                if (record.quantity > 1) {
                  dispatch(decrease(record));
                }
              }}
            />
          </div>
        );
      },
    },

    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => <span className="">{text.toFixed(2)}₺</span>,
    },
    {
      title: "Toplam Fiyat",

      render: (text, record) => (
        <span className="font-semibold">
          {(record.price * record.quantity).toFixed(2)}₺
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Ürünü silmek istediğinize emin misiniz?"
          onConfirm={() => {
            if (window.confirm("Ürün Silinsin Mi?")) {
              dispatch(deleteCart(record));
              message.success("Ürün Sepetten Silindi.");
            }
          }}
          okText="Evet"
          cancelText="Hayır"
        >
          <Button
            danger
            type="link"
            shape="circle"
            icon={<ClearOutlined className="text-red-500" />}
          />
        </Popconfirm>
      ),
    },
  ];
  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="flex justify-end mt-4 cart-total">
          <Card className=" w-72">
            <div className="flex justify-between">
              <span className="">Ara Toplam</span>
              <span className="">
                {cart.total > 0 ? cart.total.toFixed(2) : 0}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>KDV %{cart.tax}</b>
              <span className="font-semibold text-red-600">
                {(cart.total * cart.tax) / 100 > 0
                  ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                  : 0}
                ₺
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-grey">
              <b className="font-bold text-green-600">Toplam</b>
              <b className=""> {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺</b>
            </div>
            <Button
              onClick={showModal}
              size="large"
              className="w-full mt-4"
              type="primary"
            >
              Siparişi Oluştur
            </Button>
          </Card>
        </div>
        <CreateBills
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

export default CartPages;
