import { Form, Modal, Input, Button, message } from "antd";
import React from "react";

const Add = ({
  isAddModalOpen,
  setAddIsModalOpen,
  categories,
  setCategories,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/category/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi");
      form.resetFields();
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal
        title="Yeni Ktegori Ekle"
        open={isAddModalOpen}
        onCancel={() => setAddIsModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategory Ekle"
            rules={[
              { required: true, message: "Kategory alanı boş geçilemez!" },
            ]}
          >
            <Input type="text" />
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

export default Add;
