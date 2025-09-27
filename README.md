📘 BlogCrud_Vanish

Ứng dụng Blog CRUD đơn giản cho phép người dùng xem, thêm và xóa blog.
Dữ liệu được quản lý thông qua JSON Server, giao diện xây dựng bằng HTML, CSS và JavaScript.

Ứng dụng này tương tự như một Todo App mở rộng, nơi bạn có thể thao tác trực tiếp với dữ liệu blog.

🚀 Tính năng

Hiển thị danh sách blog từ server.

Thêm blog mới (gồm title, author, content).

Xóa blog theo id.

Cập nhật giao diện ngay sau khi thêm hoặc xóa.

🛠️ Công nghệ sử dụng

Frontend: HTML, CSS, JavaScript (Vanilla JS).

Backend giả lập: JSON Server.

Cấu trúc thư mục

```
02-backend-json-server-master/
│── node_modules/ # thư viện cài qua npm
│── db.json # database chính (dữ liệu blogs)
│── backup_db.json # file backup database
│── json-server.json # config cho json-server (port, routes, v.v.)
│── package.json # scripts & dependencies
│── package-lock.json
│── README.md
│── LICENSE.md
│── LICENSE_VI.md
│
└── src/
│── todo2.html # giao diện chính (form + bảng blog)
│── todo2.css # style giao diện
│── todo2.js # logic CRUD gọi API
```
```
📑 Cấu trúc dữ liệu db.json
{
  "blogs": [
    {
      "id": 1,
      "title": "Blog đầu tiên",
      "author": "Admin",
      "content": "Xin chào đây là blog đầu tiên!"
    },
    {
      "id": 2,
      "title": "Blog số 2",
      "author": "User",
      "content": "Nội dung blog thứ 2..."
    }
  ]
}
```
▶️ Cách chạy project

Cài dependencies:

npm install


Chạy backend JSON Server:

npm run dev


→ server chạy tại: http://localhost:8000/blogs

Mở file src/todo2.html trong trình duyệt để sử dụng giao diện.

📷 Demo

Danh sách blog hiển thị dạng bảng.

Form nhập blog để thêm mới.

Nút "Xóa" để xóa blog khỏi danh sách.

✅ Hướng phát triển thêm

Chức năng sửa blog (Edit).

Thêm tìm kiếm blog theo tiêu đề.

Phân trang (Pagination) khi danh sách dài.
