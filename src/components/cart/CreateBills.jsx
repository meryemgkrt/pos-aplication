import React from "react";
import { Form, Modal, Input, Select, Button, Card } from "antd";

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const CreateBills = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      footer={false}
      title="Fatura Oluştur"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      className="w-full md:w-1/2"
    >
      <Form
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="customerName"
          label="Müşteri Adı:"
          rules={[{ required: true, message: "Bu alan zorunludur!" }]}
        >
          <Input placeholder="Ad Soyad yaz" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Tel No:"
          rules={[{ required: true, message: "Bu alan zorunludur!" }]}
        >
          <Input placeholder="Telefon numaranı gir..." />
        </Form.Item>
        <Form.Item
          name="address"
          label="Adres:"
          rules={[{ required: true, message: "Bu alan zorunludur!" }]}
        >
          <Input placeholder="Adresi bilgileri..." />
        </Form.Item>
        <Form.Item
          name="paymentMethod"
          label="Ödeme Yöntemi:"
          rules={[{ required: true, message: "Bu alan zorunludur!" }]}
        >
          <Select placeholder="Ödeme yöntemi seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kart">Kredi Kart</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>500₺</span>
          </div>
          <div className="flex justify-between">
            <span>KDV Toplam %10</span>
            <span className="font-semibold text-red-600">+50₺</span>
          </div>
          <div className="flex justify-between border-t">
            <b className="font-bold text-green-600">Toplam</b>
            <b>550₺</b>
          </div>
          <div className="flex justify-end">
            <Button size="middle" className="mt-4" type="primary" htmlType="submit">
              Siparişi Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBills;
