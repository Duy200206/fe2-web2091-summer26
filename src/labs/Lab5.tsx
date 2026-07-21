import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import message from "react-hot-toast";

const Lab5 = () => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);

      return res.data;
    },

    onSuccess: () => {
      message.success("Thêm thành công");
    },

    onError: () => {
      message.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Tác giả" name="author">
        <Input />
      </Form.Item>

      <Form.Item label="Image URL" name="cover">
        <Input />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Thêm truyện
      </Button>
    </Form>
  );
};

export default Lab5;