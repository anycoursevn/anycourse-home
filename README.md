# AnyCourse — Nền tảng Giáo dục, Khảo thí & LMS Đa Môn Học (Desktop Open Source + Cloud Thương Mại)

Landing page độc lập phục vụ giới thiệu, quảng bá sản phẩm, launching site và documentation hub cho nền tảng **AnyCourse**.

## ⚖️ Chính Sách Giấy Phép & Quyền Sử Dụng

- **Desktop App — Open Source (AGPL-3.0)**: ứng dụng Desktop (kèm payload SPA + local SQLite server) miễn phí 100% cho **mọi đối tượng và mục đích** — cá nhân, giáo viên, trung tâm, kể cả lớp học thu phí. Nghĩa vụ duy nhất khi phân phối lại bản sửa đổi: kèm mã nguồn theo AGPL-3.0. Repo công khai: `phuongfullstack/anycourse-desktop`.
- **Cloud Platform & Web — Thương Mại**: nền tảng web-cloud do AnyCourse vận hành (đồng bộ đa thiết bị, AI Speaking/Writing theo quota, quản lý tổ chức, white-label) thuộc gói **Pro Managed Cloud** hoặc **Commercial License**.
- **Phần còn lại của monorepo** (`.NET backend`, docker production stack, landing) là **proprietary** — xem `../LICENSE` ở root.

---

## 🎯 Định Vị Sản Phẩm

**AnyCourse** là hệ sinh thái đào tạo số toàn diện (*All-in-One LMS, TMS & Assessment Engine*), hỗ trợ linh hoạt cho **mọi môn học và lĩnh vực giáo dục**:
- 📚 **Toán học, Khoa học tự nhiên & Xã hội**
- 🌐 **Ngoại ngữ & Luyện thi chứng chỉ** (IELTS, TOEIC, HSK, JLPT...)
- 💼 **Đào tạo kỹ năng nghề & Nội bộ doanh nghiệp**
- 🏫 **K-12, Đại học, Trung tâm luyện thi & Gia sư tự do**

---

## 🚀 Công nghệ & Kiến trúc

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 5](https://vitejs.dev/)
- **Styling**: [TailwindCSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono (Google Fonts)

---

## 🛠️ Hướng dẫn cài đặt & Khởi chạy

### 1. Cài đặt dependencies
```bash
cd landing
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Truy cập tại: `http://localhost:4000`

### 3. Build sản xuất (Production Build)
```bash
npm run build
```
Kết quả build được xuất ra thư mục `dist/`.
