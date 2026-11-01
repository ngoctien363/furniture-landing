import type { SiteConfig } from "@/types/content";
import { images } from "./images";

/**
 * Site-wide settings (future Payload `SiteSettings` + `Navigation` globals).
 *
 * ⚠️ DEMONSTRATION CONTENT
 * Every contact value below is intentionally `null`. The real hotline, Zalo,
 * Facebook, address and company facts have NOT been provided and must never
 * be invented. While a value is `null`, the UI shows its labelled placeholder
 * and renders no link or action for it.
 */
export const siteConfig: SiteConfig = {
  name: "MINH KHOI",
  legalName: {
    value: null,
    placeholder: "Tên pháp lý sẽ được cập nhật",
  },
  tagline: "Thiết kế & Thi công Nội thất Nhà ở",
  description:
    "MINH KHOI thiết kế và thi công nội thất nhà ở — căn hộ, nhà phố và biệt thự — theo tinh thần sang trọng tĩnh lặng, tinh tế và bền vững theo thời gian.",
  // Explicit URL first; on Vercel fall back to the project's production domain.
  url:
    process.env.NEXT_PUBLIC_SERVER_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  locale: "vi",
  ogLocale: "vi_VN",

  /** Temporary text wordmark. Replace with the official logo file later. */
  logo: {
    kind: "wordmark",
    primary: "MINH KHOI",
    secondary: "Nội thất",
  },

  isDemoContent: true,
  demoNotice: {
    short: "Bản demo · Nội dung minh hoạ",
    full: "Đây là website demo. Hình ảnh là ảnh minh hoạ từ thư viện ảnh (Unsplash) và các dự án hiển thị chỉ mang tính minh hoạ — không phải công trình thực tế của MINH KHOI. Thông tin liên hệ chính thức sẽ được cập nhật sau.",
  },

  navigation: [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Dịch vụ", href: "/services" },
    { label: "Dự án", href: "/projects" },
    { label: "Liên hệ", href: "/contact" },
  ],

  ctas: {
    startProject: { label: "Bắt đầu dự án", href: "/contact#tu-van" },
    exploreProjects: { label: "Khám phá dự án", href: "/projects" },
    bookShowroom: { label: "Đặt lịch tham quan showroom", href: "/contact#showroom" },
  },

  contact: {
    primary: "hotline",
    channels: {
      hotline: {
        id: "hotline",
        label: "Hotline",
        contact: { value: null, placeholder: "Hotline sắp cập nhật" },
        actionLabel: "Gọi ngay",
      },
      zalo: {
        id: "zalo",
        label: "Zalo",
        contact: { value: null, placeholder: "Zalo sắp cập nhật" },
        actionLabel: "Nhắn Zalo",
      },
      facebook: {
        id: "facebook",
        label: "Facebook",
        contact: { value: null, placeholder: "Facebook sắp cập nhật" },
        actionLabel: "Xem Facebook",
      },
      messenger: {
        id: "messenger",
        label: "Messenger",
        contact: { value: null, placeholder: "Messenger sắp cập nhật" },
        actionLabel: "Nhắn Messenger",
      },
    },
    showroomAddress: {
      value: null,
      placeholder: "Địa chỉ showroom sẽ được công bố",
    },
    openingHours: {
      value: null,
      placeholder: "Giờ mở cửa sẽ được công bố",
    },
    email: { value: null, placeholder: "Email sắp cập nhật" },
  },

  footer: {
    statement: "Không gian sống tĩnh lặng, tinh tế và bền vững theo thời gian.",
    imageCredit: "Ảnh minh hoạ: Unsplash",
  },

  seo: {
    keywords: [
      "thiết kế nội thất",
      "thi công nội thất",
      "nội thất nhà ở",
      "nội thất cao cấp",
      "nội thất căn hộ",
      "nội thất biệt thự",
      "nội thất nhà phố",
      "sản xuất đồ nội thất",
      "MINH KHOI",
    ],
    ogImage: images.heroLivingRoom,
  },
};
