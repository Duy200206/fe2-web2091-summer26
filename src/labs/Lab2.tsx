import { Image, Table , Tag, Button, Space } from "antd";

function Lab2() {
  const studentColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (value: string) => <Image width={60} src={value} />,
    },
  ];

  const studentData = [
    {
      key: 1,
      id: 1,
      name: "Duy",
      age: 25,
      major: "Computer Science",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      key: 2,
      id: 2,
      name: "Tran",
      age: 20,
      major: "Information Technology",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  const productColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value: number) => `${value.toLocaleString()} VND`,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
  ];

  const productData = [
    {
      key: 1,
      id: 1,
      productName: "Laptop ASUS",
      price: 18000000,
      category: "Electronics",
    },
    {
      key: 2,
      id: 2,
      productName: "iPhone 15",
      price: 25000000,
      category: "Electronics",
    },
    {
      key: 3,
      id: 3,
      productName: "Sneaker Nike",
      price: 2200000,
      category: "Fashion",
    },
    {
      key: 4,
      id: 4,
      productName: "Smart Watch",
      price: 5000000,
      category: "Electronics",
    },
    {
      key: 5,
      id: 5,
      productName: "Backpack",
      price: 1200000,
      category: "Accessories",
    },
  ];
  const userData = [
  {
    key: 1,
    id: 1,
    name: "Duy",
    email: "duy@gmail.com",
    status: "active",
  },
  {
    key: 2,
    id: 2,
    name: "Tran",
    email: "tran@gmail.com",
    status: "inactive",
  },
  {
    key: 3,
    id: 3,
    name: "Nam",
    email: "nam@gmail.com",
    status: "active",
  },
];

  const userColumns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (value: string) => (
      <Tag color={value === "active" ? "green" : "red"}>
        {value}
      </Tag>
    ),
  },
  {
    title: "Action",
    render: () => (
      <Space>
        <Button type="primary">Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];
    return (
  <>
    <div>
      <h2>Danh sách sinh viên</h2>
      <Table
        columns={studentColumns}
        dataSource={studentData}
        pagination={false}
      />
    </div>

    <div>
      <h2>Danh sách sản phẩm</h2>
      <Table
        columns={productColumns}
        dataSource={productData}
        pagination={{ pageSize: 3 }}
      />
    </div>

    <div>
      <h2> User Management</h2>
      <Table
        columns={userColumns}
        dataSource={userData}
        pagination={false}
      />
    </div>
  </>
);
}

export default Lab2;