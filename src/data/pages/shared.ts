import type { CtaBlockData, DesignPhilosophyBlockData, ProcessStep } from "@/types/content";
import { images } from "../images";
import { siteConfig } from "../site-config";

/** Content blocks reused on several pages (single source, edited once). */

export const consultationCta: CtaBlockData = {
  id: "cta-consultation",
  blockType: "cta",
  visible: true,
  eyebrow: "Tư vấn thiết kế",
  heading: "Hãy bắt đầu từ cách bạn muốn sống",
  description:
    "Chia sẻ về ngôi nhà và mong muốn của bạn. Chúng tôi sẽ cùng bạn định hình hướng đi phù hợp cho không gian.",
  image: images.apt2Living,
  primaryCta: siteConfig.ctas.startProject,
  secondaryCta: siteConfig.ctas.bookShowroom,
  showHotline: true,
};

export const designPhilosophy: DesignPhilosophyBlockData = {
  id: "design-philosophy",
  blockType: "designPhilosophy",
  visible: true,
  eyebrow: "Triết lý thiết kế",
  heading: "Sự sang trọng tĩnh lặng được cảm nhận trước khi được nhìn thấy",
  principles: [
    {
      title: "Tiết chế",
      body: "Ít hơn nhưng tốt hơn. Mỗi đường nét, chất liệu và món đồ đều có lý do để hiện diện.",
    },
    {
      title: "Vật liệu chân thật",
      body: "Gỗ, đá và vải tự nhiên được chọn vì cách chúng đẹp lên theo thời gian, không chỉ vì vẻ ngoài.",
    },
    {
      title: "Ánh sáng & tỷ lệ",
      body: "Không gian được tổ chức quanh ánh sáng tự nhiên, tầm nhìn và nhịp sinh hoạt hằng ngày.",
    },
  ],
  image: images.apt2TvWall,
};

/** Generic working process (placeholder until the official process is confirmed). */
export const workProcess: { eyebrow: string; heading: string; steps: ProcessStep[]; isPlaceholder: boolean } = {
  eyebrow: "Quy trình",
  heading: "Một lộ trình rõ ràng từ ý tưởng đến bàn giao",
  steps: [
    { title: "Gặp gỡ & khảo sát", body: "Lắng nghe nhu cầu, khảo sát hiện trạng và thống nhất phạm vi công việc." },
    { title: "Ý tưởng thiết kế", body: "Đề xuất bố cục, phong cách, vật liệu và hình ảnh tham khảo." },
    { title: "Thiết kế chi tiết", body: "Hoàn thiện phối cảnh, bản vẽ kỹ thuật và dự toán." },
    { title: "Sản xuất & thi công", body: "Sản xuất đồ nội thất và thi công theo hồ sơ đã duyệt." },
    { title: "Hoàn thiện & bàn giao", body: "Lắp đặt, trang trí, kiểm tra chất lượng và bàn giao." },
  ],
  isPlaceholder: true,
};
