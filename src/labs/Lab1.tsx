import { useState } from "react";
import { Button, Card, Form, Input, Modal, Table, message } from "antd";

type User = {
  key: number;
  name: string;
  email: string;
  role: string;
};

const initialUsers: User[] = [
  { key: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Admin" },
  { key: 2, name: "Trần Thị B", email: "b@example.com", role: "User" },
];

export default function Lab1() {
  const [registerForm] = Form.useForm();
  const [addUserForm] = Form.useForm();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onRegisterFinish = (values: { name: string; email: string; password: string }) => {
    message.success(`Đăng ký thành công cho ${values.name}`);
    registerForm.resetFields();
  };

  const onAddUserFinish = (values: { name: string; email: string; role: string }) => {
    const newUser = {
      key: Date.now(),
      ...values,
    };

    setUsers((prev) => [newUser, ...prev]);
    addUserForm.resetFields();
    setIsModalOpen(false);
    message.success(`Đã thêm người dùng ${values.name}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div className="space-y-6 text-left">
      <Card title="Form đăng ký">
        <Form
          form={registerForm}
          layout="vertical"
          onFinish={onRegisterFinish}
          style={{ maxWidth: 480 }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <Input placeholder="Nhập tên" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card
        title="Danh sách user"
        extra={
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Add User
          </Button>
        }
      >
        <Table columns={columns} dataSource={users} pagination={{ pageSize: 5 }} />
      </Card>

      <Modal
        title="Thêm user"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={addUserForm} layout="vertical" onFinish={onAddUserFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <Input placeholder="Nhập tên" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Vui lòng nhập role" }]}
          >
            <Input placeholder="Ví dụ: Admin, User" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm user
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
