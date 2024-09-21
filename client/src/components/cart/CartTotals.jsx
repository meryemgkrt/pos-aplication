import React from "react";
import { Button, message } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { deleteCart, increase, decrease, reset } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="px-2 py-4 font-bold tracking-wide text-center text-white bg-green-600 cart-title">
        Sepetteki Ürünler
      </h2>
      <ul className="flex flex-col px-2 py-2 overflow-y-auto cart-items gap-y-3">
        {cart?.cartItems?.length > 0 ? (
          cart.cartItems
            .map((item) => (
              <li
                key={item._id}
                className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-16 h-16 rounded-lg"
                    onClick={() => {
                      dispatch(deleteCart(item));
                      message.success("Ürün sepetten silindi.");
                    }}
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">
                      {item.price}₺ x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={
                      <PlusCircleOutlined
                        onClick={() => dispatch(increase(item))}
                      />
                    }
                  />
                  <span>{item.quantity}</span>
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(decrease(item));
                      } else if (item.quantity === 1) {
                        if (
                          window.confirm(
                            "Ürün sepetinizden silinecektir. Onaylıyor musunuz?"
                          )
                        ) {
                          dispatch(decrease(item));
                          message.success("Ürün sepetten silindi.");
                        }
                      }
                    }}
                    icon={<MinusCircleOutlined />}
                  />
                </div>
              </li>
            ))
            .reverse()
        ) : (
          <h2 className="text-xl font-bold text-center text-gray-500">
            Sepetinizde ürün bulunmamaktadır.
          </h2>
        )}
      </ul>

      <div className="mt-auto cart-totals">
        <div className="border-t">
          <div className="flex justify-between p-2">
            <b>Ara Toplam:</b>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0} </span>
          </div>
        </div>
        <div className="border-b">
          <div className="flex justify-between p-2">
            <b>KDV %{cart.tax}</b>
            <span className="text-red-700">
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="mt-4 border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-600 ">Genel Toplam</b>
            <span className="text-xl">
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="items-center justify-center mx-4 my-4 fiex">
          <Button
            type="primary"
            size="large"
            className="w-full font-bold"
            disabled={cart?.cartItems?.length === 0}
            onClick={() => navigate("/cart")}
          >
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="flex items-center justify-center w-full my-4 font-bold"
            icon={<ClearOutlined />}
            danger
            disabled={cart?.cartItems?.length === 0}
            onClick={() => {
              if (
                window.confirm("Sepeti temizlemek istediğinize emin misiniz?")
              ) {
                dispatch(reset());
                message.success("Sepet temizlendi.");
              }
            }}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
