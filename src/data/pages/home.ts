import type { HomePageContent } from "@/types/content";
import { images } from "../images";
import { siteConfig } from "../site-config";
import { consultationCta, designPhilosophy } from "./shared";

/**
 * Homepage as an ordered list of blocks (future Payload `Pages` → blocks).
 * Reorder the array to reorder sections; set `visible: false` to hide one.
 */
export const homePage: HomePageContent = {
  seo: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  blocks: [
    {
      id: "hero",
      blockType: "hero",
      visible: true,
      eyebrow: siteConfig.tagline,
      heading: "Không gian sống tĩnh lặng, sang trọng theo thời gian",
      subheading:
        "Từ bản phác thảo đầu tiên đến chi tiết hoàn thiện cuối cùng, chúng tôi kiến tạo những ngôi nhà điềm tĩnh, tinh tế và mang dấu ấn riêng của bạn.",
      image: images.heroLivingRoom,
      primaryCta: siteConfig.ctas.exploreProjects,
      secondaryCta: siteConfig.ctas.startProject,
    },
    {
      id: "brand-introduction",
      blockType: "brandIntroduction",
      visible: true,
      eyebrow: "Về MINH KHOI",
      heading: "Thiết kế và thi công, cùng một tiêu chuẩn",
      body: [
        "MINH KHOI là đơn vị thiết kế và thi công nội thất nhà ở, đồng hành cùng chủ nhân căn hộ, nhà phố và biệt thự.",
        "Đoạn giới thiệu này là nội dung tạm và sẽ được thay bằng câu chuyện, lịch sử và đội ngũ chính thức của công ty.",
      ],
      image: images.aboutCalmBedroom,
      secondaryImage: images.detailLoungeChair,
      cta: { label: "Tìm hiểu thêm", href: "/about" },
      isPlaceholder: true,
    },
    {
      id: "services",
      blockType: "services",
      visible: true,
      eyebrow: "Dịch vụ",
      heading: "Đồng hành trọn vẹn cùng ngôi nhà của bạn",
      lede: "Bốn hình thức hợp tác linh hoạt, từ một buổi tư vấn đến một công trình hoàn chỉnh.",
      serviceIds: [],
      cta: { label: "Tất cả dịch vụ", href: "/services" },
    },
    {
      id: "featured-projects",
      blockType: "featuredProjects",
      visible: true,
      eyebrow: "Dự án tiêu biểu",
      heading: "Không gian được kể bằng hình ảnh",
      lede: "Các dự án dưới đây là ý tưởng minh hoạ, dùng ảnh từ thư viện ảnh — không phải công trình thực tế.",
      projectIds: ["demo-01", "demo-02", "demo-03", "demo-05"],
      cta: siteConfig.ctas.exploreProjects,
    },
    { ...designPhilosophy, id: "home-philosophy" },
    {
      id: "why-choose-us",
      blockType: "whyChooseUs",
      visible: true,
      eyebrow: "Vì sao chọn MINH KHOI",
      heading: "Một đội ngũ từ ý tưởng đến hoàn thiện",
      items: [
        {
          title: "Thiết kế & thi công đồng bộ",
          body: "Một đội ngũ theo dự án từ bản vẽ ý tưởng đến thi công, hạn chế khâu trung gian và sai lệch.",
        },
        {
          title: "Quy trình minh bạch",
          body: "Các giai đoạn rõ ràng, quyết định được ghi nhận và cập nhật tiến độ thường xuyên.",
        },
        {
          title: "Nội thất may đo",
          body: "Đồ nội thất và tủ được sản xuất theo kích thước, để mỗi món đồ vừa vặn với không gian.",
        },
        {
          title: "Bền vững cho đời sống",
          body: "Không gian đẹp nhưng vẫn thực tế, bền bỉ và dễ chăm sóc trong nhiều năm.",
        },
      ],
      image: images.familyEntry,
    },
    { ...consultationCta, id: "home-cta" },
    {
      id: "home-contact",
      blockType: "contact",
      visible: true,
      eyebrow: "Liên hệ",
      heading: "Ghé thăm showroom hoặc trò chuyện cùng chúng tôi",
      lede: "Thông tin liên hệ chính thức sẽ được cập nhật. Bạn vẫn có thể để lại yêu cầu tư vấn trên trang Liên hệ.",
      showShowroom: true,
    },
  ],
};
