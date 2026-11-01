/**
 * Interface strings (Vietnamese). Kept out of component logic so a second
 * language can be added later without touching components (CLAUDE.md §13.5).
 * Business content belongs in site-config / page data, not here.
 */
export const uiText = {
  skipToContent: "Bỏ qua đến nội dung chính",
  home: "trang chủ",
  menu: "Menu",
  openMenu: "Mở menu",
  closeMenu: "Đóng menu",
  mainNavigation: "Điều hướng chính",
  footerNavigation: "Điều hướng chân trang",
  comingSoon: "Sắp cập nhật",
  openInMaps: "Xem trên Google Maps",
  contactUnavailable: "Thông tin liên hệ chính thức sẽ được cập nhật.",
  demoBadge: "Minh hoạ",
  demoProject: "Dự án minh hoạ",
  demoImage: "Ảnh minh hoạ",
  demoDetails: "Chi tiết",
  placeholderCopy: "Nội dung tạm — sẽ được cập nhật bằng thông tin chính thức",
  scrollDown: "Cuộn xuống",
  viewProject: "Xem dự án",
  gallery: {
    open: "Phóng to ảnh",
    close: "Đóng",
    previous: "Ảnh trước",
    next: "Ảnh tiếp theo",
    dialogLabel: "Thư viện ảnh dự án",
  },
  projectCount: (n: number) => `${n} dự án`,
  projectFilter: "Lọc dự án theo loại công trình",
  dismiss: "Đóng",
  footer: {
    explore: "Khám phá",
    services: "Dịch vụ",
    contact: "Liên hệ",
    showroom: "Showroom",
    openingHours: "Giờ mở cửa",
    email: "Email",
    rights: "Bảo lưu mọi quyền.",
  },
  notFound: {
    eyebrow: "404",
    title: "Không tìm thấy trang",
    body: "Trang bạn tìm có thể đã được di chuyển hoặc không còn tồn tại.",
    back: "Về trang chủ",
  },
} as const;
