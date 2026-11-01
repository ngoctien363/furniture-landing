import type {
  AboutPageContent,
  ContactPageContent,
  ProjectDetailLabels,
  ProjectsPageContent,
  ServicesPageContent,
} from "@/types/content";
import { images } from "../images";
import { consultationCta, designPhilosophy, workProcess } from "./shared";

/** Fixed-field page content (future Payload `Pages` documents). */

export const aboutPage: AboutPageContent = {
  seo: {
    title: "Giới thiệu",
    description: "Siêu Thị Nội Thất — đơn vị thiết kế và thi công nội thất nhà ở theo tinh thần sang trọng tĩnh lặng.",
  },
  intro: {
    eyebrow: "Giới thiệu",
    title: "Thiết kế và tay nghề, cùng một tiêu chuẩn",
    lede: "Chúng tôi tin rằng một ngôi nhà đẹp bắt đầu từ sự thấu hiểu cách bạn sống mỗi ngày.",
  },
  banner: images.apt1OpenPlan,
  story: {
    id: "about-story",
    blockType: "brandIntroduction",
    visible: true,
    eyebrow: "Câu chuyện",
    heading: "Kiến tạo không gian điềm tĩnh và bền vững",
    body: [
      "Siêu Thị Nội Thất thiết kế và thi công nội thất cho căn hộ, nhà phố và biệt thự, với mong muốn mỗi không gian vừa đẹp vừa dễ sống.",
      "Nội dung này là văn bản tạm. Câu chuyện thành lập, lịch sử phát triển và giới thiệu đội ngũ chính thức sẽ được cập nhật khi có thông tin từ doanh nghiệp.",
    ],
    image: images.apt2BedroomWardrobe,
    secondaryImage: images.apt1KidsDesk,
    isPlaceholder: true,
  },
  process: workProcess,
  philosophy: { ...designPhilosophy, id: "about-philosophy", image: images.apt2NavyArt },
  cta: consultationCta,
};

export const servicesPage: ServicesPageContent = {
  seo: {
    title: "Dịch vụ",
    description:
      "Tư vấn thiết kế, thiết kế và thi công trọn gói, sản xuất đồ nội thất và thi công theo bản thiết kế có sẵn.",
  },
  intro: {
    eyebrow: "Dịch vụ",
    title: "Từ tư vấn đến bàn giao",
    lede: "Chọn hình thức hợp tác phù hợp với giai đoạn và nhu cầu của ngôi nhà bạn.",
  },
  benefitsLabel: "Lợi ích",
  serviceCtaLabel: "Tư vấn dịch vụ này",
  process: workProcess,
  cta: consultationCta,
};

export const projectsPage: ProjectsPageContent = {
  seo: {
    title: "Dự án",
    description: "Tuyển tập dự án nội thất nhà ở trình bày theo phong cách tạp chí.",
  },
  intro: {
    eyebrow: "Dự án",
    title: "Không gian được kể bằng hình ảnh",
    lede: "Phối cảnh thiết kế từ các dự án của Siêu Thị Nội Thất. Thông tin chi tiết từng dự án sẽ được cập nhật.",
  },
  allLabel: "Tất cả",
  emptyLabel: "Chưa có dự án trong danh mục này.",
  cta: consultationCta,
};

export const projectDetailLabels: ProjectDetailLabels = {
  category: "Loại công trình",
  area: "Diện tích",
  style: "Phong cách",
  location: "Địa điểm",
  year: "Năm",
  story: "Câu chuyện thiết kế",
  gallery: "Hình ảnh dự án",
  previous: "Dự án trước",
  next: "Dự án tiếp theo",
  backToProjects: "Tất cả dự án",
  mockNotice:
    "Đây là dự án minh hoạ. Hình ảnh và thông tin chỉ mang tính trình bày, không phải công trình thực tế của Siêu Thị Nội Thất.",
  pendingNotice: "Tên dự án hiện là tên tạm. Diện tích, địa điểm và năm thực hiện sẽ được cập nhật.",
};

export const contactPage: ContactPageContent = {
  seo: {
    title: "Liên hệ",
    description: "Liên hệ Siêu Thị Nội Thất để bắt đầu dự án nội thất cho ngôi nhà của bạn.",
  },
  intro: {
    eyebrow: "Liên hệ",
    title: "Bắt đầu dự án của bạn",
    lede: "Hãy chia sẻ về ngôi nhà bạn đang hình dung. Mỗi dự án đều bắt đầu từ một cuộc trò chuyện.",
  },
  channels: {
    eyebrow: "Kênh liên hệ",
    heading: "Trò chuyện trực tiếp",
    lede: "Gọi hotline hoặc nhắn Zalo để được tư vấn nhanh nhất.",
  },
  showroom: {
    eyebrow: "Showroom",
    heading: "Đặt lịch tham quan showroom",
    lede: "Trải nghiệm trực tiếp vật liệu và hoàn thiện. Giờ mở cửa sẽ được cập nhật.",
    image: images.apt2DiningKitchen,
  },
  form: {
    eyebrow: "Yêu cầu tư vấn",
    heading: "Để lại thông tin, chúng tôi sẽ liên hệ lại",
    lede: "Biểu mẫu đang ở chế độ demo: thông tin chưa được gửi đi cho đến khi hệ thống chính thức được kết nối.",
  },
};
