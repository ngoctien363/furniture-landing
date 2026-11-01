import type { Service } from "@/types/content";
import { images } from "./images";

/**
 * The four service categories (PRODUCT-DISCOVERY §3) — future Payload
 * `Services` collection.
 *
 * Titles are confirmed; descriptions and benefits are placeholder copy
 * (`isPlaceholder: true`) pending official service descriptions.
 */
export const services: Service[] = [
  {
    id: "svc-consultation",
    slug: "tu-van-thiet-ke",
    order: 1,
    title: "Tư vấn thiết kế nội thất",
    summary:
      "Định hướng bố cục, vật liệu và phong cách trước khi bạn bắt đầu một thiết kế hoàn chỉnh.",
    description:
      "Buổi tư vấn giúp làm rõ cách bạn muốn sống trong ngôi nhà của mình. Chúng tôi khảo sát không gian, trao đổi ưu tiên và đề xuất định hướng thiết kế, các lưu ý về ngân sách cùng những bước tiếp theo.",
    benefits: [
      "Rõ ràng về bố cục và định hướng thiết kế",
      "Lời khuyên sớm về vật liệu và ngân sách",
      "Lộ trình thực hiện cụ thể",
    ],
    image: images.apt2Dining,
    isPlaceholder: true,
  },
  {
    id: "svc-design-build",
    slug: "thiet-ke-thi-cong-tron-goi",
    order: 2,
    title: "Thiết kế và thi công nội thất trọn gói",
    summary:
      "Một đội ngũ duy nhất đồng hành từ ý tưởng, bản vẽ đến thi công và bàn giao.",
    description:
      "Dịch vụ trọn gói bao gồm thiết kế ý tưởng, hồ sơ kỹ thuật, lựa chọn vật liệu, thi công và hoàn thiện — được điều phối bởi một đội ngũ để ngôi nhà sau cùng đúng với tinh thần thiết kế ban đầu.",
    benefits: [
      "Một đầu mối chịu trách nhiệm",
      "Giữ trọn tinh thần thiết kế khi thi công",
      "Kiểm soát tiến độ và chất lượng đồng bộ",
    ],
    image: images.apt1Living,
    isPlaceholder: true,
  },
  {
    id: "svc-furniture",
    slug: "san-xuat-do-noi-that",
    order: 3,
    title: "Sản xuất và cung cấp đồ nội thất",
    summary:
      "Đồ nội thất và tủ bếp, tủ âm tường được sản xuất theo kích thước riêng của từng không gian.",
    description:
      "Đồ rời, nội thất liền tường và tủ được sản xuất theo kích thước, chất liệu và tỷ lệ của ngôi nhà, cùng với việc cung cấp các món đồ bổ trợ phù hợp với tổng thể thiết kế.",
    benefits: [
      "Kích thước vừa vặn với từng không gian",
      "Hoàn thiện đồng nhất trong toàn bộ ngôi nhà",
      "Phối hợp chặt chẽ với thiết kế tổng thể",
    ],
    image: images.apt2Entry,
    isPlaceholder: true,
  },
  {
    id: "svc-construction",
    slug: "thi-cong-theo-ban-ve",
    order: 4,
    title: "Thi công nội thất theo bản thiết kế có sẵn",
    summary:
      "Thi công chính xác theo bản thiết kế bạn đã có, với sự chăm chút trong từng chi tiết.",
    description:
      "Đã có bản vẽ từ đơn vị thiết kế khác? Chúng tôi rà soát hồ sơ, đề xuất điều chỉnh kỹ thuật khi cần và thi công với cùng một tiêu chuẩn chất lượng.",
    benefits: [
      "Rà soát kỹ thuật hồ sơ có sẵn",
      "Thi công chính xác, chú trọng chi tiết",
      "Báo giá và tiến độ rõ ràng",
    ],
    image: images.apt2Kitchen,
    isPlaceholder: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
