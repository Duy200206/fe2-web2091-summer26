import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Button, Image, Input, Spin, Table } from "antd";
import axios from "axios";
import { useState } from "react";

function Lab4() {
  const [keyword, setKeyword] = useState("");

  const queryClient = useQueryClient();

  // useQuery lấy danh sách truyện
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  // Bài 2: Xóa truyện
  const deleteStory = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  const handleDelete = (id: number) => {
    deleteStory.mutate(id);
  };

  // Bài 5: Tìm kiếm theo tên truyện
  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Hinh anh",
      dataIndex: "cover",
      render: (url: string) => <Image src={url} width={60} />,
    },

    // Bài 1: Created At
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },

    // Bài 2: Action xóa
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  // Loading
  if (isLoading) {
    return <Spin />;
  }

  // Error
  if (isError) {
    return <p>Lỗi khi tải dữ liệu</p>;
  }

  return (
    <div>
      <h2>Danh sách truyện</h2>

      {/* Bài 5: Search */}
      <Input
        placeholder="Tìm kiếm theo tên truyện"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        style={{
          width: 300,
          marginBottom: 20,
        }}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
}

export default Lab4;