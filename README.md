# BIRD'S NEST – LANDING PAGE YẾN SÀO CAO CẤP

Landing page chuyên nghiệp, hiện đại và chuẩn nhận diện thương hiệu cao cấp dành cho ngành hàng **Tổ Yến / Yến Sào / Quà Tặng Sức Khỏe**.

---

## 💎 Điểm Nổi Bật Về Thiết Kế & Trải Nghiệm (UX/UI)

1. **Bộ nhận diện thương hiệu độc quyền (Visual Identity):**
   - Tông màu chủ đạo: **Đỏ Burgundy / Đỏ Ruby thượng hạng** phối cùng **Vàng Champagne / Vàng Kim** trên nền **Kem / Trắng ngà (Ivory)** tự nhiên, tinh tế.
   - Logo thương hiệu dập kim với họa tiết chim yến sải cánh trên vầng trăng khuyết và tổ yến.
   - Hình ảnh bao bì tái hiện chuẩn xác phong cách quà biếu cao cấp: Túi giấy đỏ sang trọng, quai dây bện vàng, hộp cứng dập kim sắc nét.

2. **Cấu trúc One-Page chuẩn chuyển đổi (High-Converting Architecture):**
   - **01. Announcement Bar**: Thông báo miễn phí giao hàng & hotline tư vấn 24/7.
   - **02. Sticky Header**: Thanh điều hướng cố định kính mờ (Liquid Glass backdrop blur) với nút gọi điện thoại & Đặt hàng nhanh.
   - **03. Hero Section**: Tiêu đề ấn tượng, thông điệp cảm xúc, bộ quà tặng sắc đỏ burgundy, chỉ số niềm tin nhanh.
   - **04. Brand Story**: Câu chuyện thương hiệu tinh tế & 3 giá trị cốt lõi: **01 CHẤT LƯỢNG - 02 TẬN TÂM - 03 TIN CẬY**.
   - **05. Sản phẩm nổi bật**: Bộ lọc danh mục thông minh, card sản phẩm sang trọng kèm modal xem nhanh chi tiết & nút "Mua ngay" tự động điền form.
   - **06. USP (Vì sao chọn BIRD'S NEST)**: 6 giá trị thực tế chuẩn mực (không cam kết y tế/chữa bệnh sai sự thật).
   - **07. Quy trình sản phẩm**: Dòng thời gian 4 bước chuẩn mực từ Lựa chọn -> Kiểm tra -> Đóng gói -> Giao nhận.
   - **08. Thưởng thức đúng cách**: Cẩm nang bảo quản, chế biến và thời điểm sử dụng tối ưu.
   - **09. Quà tặng sức khỏe**: Phân loại theo 7 đối tượng & dịp tặng (Cha mẹ, Đối tác, Người thân, Doanh nghiệp, Tết...).
   - **10. Gallery thực tế**: Thư viện ảnh cận cảnh với bộ lọc và Lightbox phóng to full-screen.
   - **11. Testimonials**: Khu vực đánh giá minh bạch, tôn trọng phản hồi thực tế của người dùng.
   - **12. FAQ Accordion**: 9 câu hỏi giải đáp thắc mắc khách hàng hay gặp nhất.
   - **13. CTA Banner**: Dải kêu gọi hành động lớn gần cuối trang thôi thúc chuyển đổi.
   - **14. Form đặt hàng & Liên hệ**: Form đặt hàng tối ưu (Họ tên, SĐT, Sản phẩm, Số lượng, Ghi chú) + thông tin liên hệ đa kênh (Hotline, Zalo, Facebook, TikTok, Maps).
   - **15. Điều chúng tôi cam kết**: 4 cam kết uy tín rõ ràng.
   - **16. Sticky Bottom Bar Mobile**: Thanh công cụ cố định đáy màn hình di động: **☎ GỌI NGAY - 💬 ZALO - 🛒 ĐẶT HÀNG**.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
Landing Page/
├── index.html                  # File HTML chính (Semantic HTML5, chuẩn SEO)
├── README.md                   # Hướng dẫn sử dụng & tùy biến
├── css/
│   └── style.css               # Hệ thống CSS Design System chuẩn mực, responsive
├── js/
│   ├── data.js                 # Dữ liệu tách rời (Sản phẩm, Liên hệ, FAQ, Cam kết...)
│   └── main.js                 # Logic điều hướng, modal, accordion, lightbox, form
└── images/
    ├── brand/                  # Logo thương hiệu tròn & logo ngang
    ├── hero/                   # Ảnh trực quan khu vực Hero
    ├── products/               # Ảnh 4 dòng sản phẩm chính
    ├── gift/                   # Ảnh bộ sưu tập quà tặng
    └── gallery/                # 6 ảnh thực tế cho thư viện ảnh
```

---

## ⚙️ Hướng Dẫn Tùy Biến Nhanh (Không Cần Chạm Vào HTML)

Dự án được thiết kế theo kiến trúc **Data-Driven**, cho phép quý khách thay đổi toàn bộ nội dung sản phẩm, giá cả và thông tin liên hệ chỉ bằng cách mở file `js/data.js`:

### 1. Thay đổi thông tin liên hệ:
Mở `js/data.js`, tìm mục `contact`:
```javascript
contact: {
  address: "123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh", // Cập nhật địa chỉ thực tế
  hotline: "0909 123 456",                                 // Số điện thoại hiển thị
  hotlineTel: "tel:0909123456",                            // Link bấm gọi
  zaloUrl: "https://zalo.me/0909123456",                   // Link nhắn Zalo
  facebookUrl: "https://facebook.com/birdnest",            // Link Fanpage
  email: "lienhe@birdnest.vn"                             // Email nhận phản hồi
}
```

### 2. Thay đổi sản phẩm & giá:
Trong `js/data.js`, mảng `products` quản lý tất cả sản phẩm. Quý khách có thể sửa giá, khối lượng hoặc thêm sản phẩm mới:
```javascript
{
  id: "yen-chung",
  name: "Sản phẩm Yến Chưng",
  price: "450.000đ / Hộp 6 hũ",    // Thay thế chữ "Liên hệ để nhận giá" khi có giá chính thức
  weight: "70ml / hũ",
  image: "images/products/yen-chung.jpg" // Đổi đường dẫn ảnh nếu có ảnh chụp thật
}
```

### 3. Thay thế ảnh sản phẩm thực tế:
- Quý khách chỉ cần chụp ảnh sản phẩm thật và lưu vào thư mục `images/products/` (ví dụ: `yen-chung.jpg`, `yen-to.jpg`), sau đó cập nhật thuộc tính `image` trong `js/data.js`.
- Kích thước ảnh khuyến nghị:
  - Ảnh Hero: `1600 x 900 px` hoặc `1200 x 800 px`
  - Ảnh Sản phẩm: `800 x 800 px` (Vuông)
  - Ảnh Gallery: `800 x 600 px` (Tỷ lệ 4:3)

---

## 🚀 Hướng Dẫn Chạy & Xuất Bản Website

### Chạy thử nghiệm trên máy tính:
1. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Safari, Edge, Firefox).
2. Hoặc khởi động local server bằng lệnh:
   ```bash
   python -m http.server 8080
   ```
   Sau đó mở trình duyệt tại: `http://localhost:8080`

### Triển khai lên Internet:
Website được đóng gói hoàn toàn ở dạng tĩnh (Static HTML/CSS/JS thuần), không cần cài đặt database hay Node.js phức tạp:
- **Cách 1 (Vercel / Netlify):** Kéo thả toàn bộ thư mục `Landing Page` vào trang quản trị Vercel hoặc Netlify là có ngay website chạy 24/7 với chứng chỉ SSL miễn phí.
- **Cách 2 (Hosting truyền thống):** Tải toàn bộ các file trong thư mục này lên thư mục `public_html` của hosting qua FTP/cPanel.

---

© 2026 **BIRD'S NEST – YẾN SÀO CAO CẤP**. Tinh hoa từ thiên nhiên – Trao trọn sức khỏe.
