import { useState } from "react";
import { Form, Input, Button, InputNumber, Select } from "antd";

function Lab3() {
  const [postData, setPostData] = useState<any>(null);

  const onLogin = (data: any) => {
    console.log(data);
  };

  const onRegister = (data: any) => {
    console.log(data);
  };

  const onProduct = (data: any) => {
    console.log(data);
  };

  const onPost = (data: any) => {
    setPostData(data);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Form đăng nhập</h2>

      <Form onFinish={onLogin} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>

      <hr />
      <h2>Form đăng ký người dùng</h2>

      <Form onFinish={onRegister} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Hãy nhập name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Hãy nhập email",
            },
            {
              type: "email",
              message: "Email không đúng định dạng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Hãy nhập phone",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập password",
            },
            {
              min: 6,
              message: "Password phải có ít nhất 6 ký tự",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Hãy nhập lại password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Confirm Password không trùng Password")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>

      <hr />

      <h2>Form thêm sản phẩm</h2>

      <Form onFinish={onProduct} layout="vertical">
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên sản phẩm",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[
            {
              required: true,
              message: "Hãy nhập giá",
            },
            {
              min: 0,
              type: "number",
              message: "Giá không được nhỏ hơn 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Hãy nhập số lượng",
            },
            {
              min: 0,
              type: "number",
              message: "Số lượng không được nhỏ hơn 0",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <hr />

      <h2>Form thêm bài viết</h2>

      <Form onFinish={onPost} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Hãy nhập title",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Hãy chọn category",
            },
          ]}
        >
          <Select
            placeholder="Chọn category"
            options={[
              {
                label: "Tin tức",
                value: "tin-tuc",
              },
              {
                label: "Công nghệ",
                value: "cong-nghe",
              },
              {
                label: "Giải trí",
                value: "giai-tri",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[
            {
              required: true,
              message: "Hãy nhập slug",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: "Hãy nhập content",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="imageUrl"
          rules={[
            {
              required: true,
              message: "Hãy nhập Image URL",
            },
            {
              type: "url",
              message: "Image URL không đúng định dạng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {postData && (
        <div>
          <h3>Dữ liệu bài viết</h3>

          <p>Title: {postData.title}</p>
          <p>Category: {postData.category}</p>
          <p>Slug: {postData.slug}</p>
          <p>Content: {postData.content}</p>
          <p>Image URL: {postData.imageUrl}</p>
        </div>
      )}
    </div>
  );
}

export default Lab3;