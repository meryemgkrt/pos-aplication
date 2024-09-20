import { Form, Modal, Input, Button, message, Select } from "antd";
import React from "react";

const AddProduct = ({
  isAddModalOpen,
  setAddIsModalOpen,
  categories,
 
  products,
  setProducts,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      message.success("Ürün başarıyla eklendi");
      form.resetFields();
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);
      setAddIsModalOpen(false);
    } catch (error) {
    /*   console.log(error); */
    }
  };
  return (
    <div>
      <Modal
        title="Yeni Ürün Ekle"
        open={isAddModalOpen}
        onCancel={() => setAddIsModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Ürün Adı"
            rules={[
              { required: true, message: "Ürün adı alanı boş geçilemez!" },
            ]}
          >
            <Input placeholder="Bir ürün adı giriniz" />
          </Form.Item>
          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli alanı boş geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün görseli giriniz" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[
              { required: true, message: "Ürün fiyat alanı boş geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Kategori Seç"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
