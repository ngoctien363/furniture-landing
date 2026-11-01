import type { Project, ProjectCategory, SelectOption } from "@/types/content";
import { images } from "./images";

/**
 * ⚠️ ILLUSTRATIVE PROJECTS — future Payload `Projects` collection.
 * Every project is demonstration content (`isMock: true`). Names, areas,
 * styles and descriptions are invented for layout purposes and the
 * photography is generic stock imagery. None of these are real MINH KHOI
 * commissions. Replace with real projects (and `isMock: false`) once supplied.
 */

const pendingLocation = { value: null, placeholder: "Chưa công bố" };
const pendingYear = { value: null, placeholder: "—" };

export const projectCategories: SelectOption<ProjectCategory>[] = [
  { value: "apartment", label: "Căn hộ" },
  { value: "townhouse", label: "Nhà phố" },
  { value: "villa", label: "Biệt thự" },
  { value: "renovation", label: "Cải tạo" },
];

export function getCategoryLabel(category: ProjectCategory): string {
  return projectCategories.find((c) => c.value === category)?.label ?? category;
}

export const projects: Project[] = [
  {
    id: "demo-01",
    slug: "ivory-residence",
    name: "Ivory Residence",
    category: "apartment",
    areaSqm: 120,
    designStyle: "Tối giản đương đại",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.apartmentLiving,
    gallery: [images.apartmentLounge, images.apartmentBedroom, images.apartmentKitchen],
    shortDescription:
      "Ý tưởng căn hộ đô thị với sắc xám dịu, gỗ ấm và ánh sáng tự nhiên trải dài khắp không gian.",
    story: [
      "Dự án minh hoạ này hình dung một căn hộ gia đình được mở thành một không gian sinh hoạt liền mạch, với mảng tường gỗ làm điểm tựa cho phòng khách.",
      "Bảng màu tiết chế gồm xám, ngà và gỗ sồi để ánh sáng và chất liệu dẫn dắt cảm xúc, trong khi hệ tủ âm giữ mọi bề mặt luôn gọn gàng.",
    ],
    featured: true,
    isMock: true,
  },
  {
    id: "demo-02",
    slug: "serene-villa",
    name: "Serene Villa",
    category: "villa",
    areaSqm: 420,
    designStyle: "Sang trọng đương đại",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.villaPoolTerrace,
    gallery: [images.villaFacade, images.villaGlassStair, images.villaEvening, images.villaGarden],
    shortDescription:
      "Ý tưởng biệt thự nơi nội thất và sân hiên hoà làm một quanh mặt hồ tĩnh lặng.",
    story: [
      "Dự án minh hoạ này khám phá một biệt thự được tổ chức xoay quanh hồ bơi, với vách kính kịch trần xoá nhoà ranh giới trong và ngoài.",
      "Đá sáng màu, tường trắng và chi tiết kim loại mảnh tạo nên phông nền điềm tĩnh cho ánh chiều và đời sống ngoài trời.",
    ],
    featured: true,
    isMock: true,
  },
  {
    id: "demo-03",
    slug: "walnut-townhouse",
    name: "Walnut Townhouse",
    category: "townhouse",
    areaSqm: 210,
    designStyle: "Hiện đại ấm áp",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.townhouseLiving,
    gallery: [images.townhouseLounge, images.townhouseConsole, images.townhouseFamilyRoom],
    shortDescription:
      "Ý tưởng nhà phố kết hợp da bò màu cognac, gỗ óc chó và đồng thau trong một không khí thư thái.",
    story: [
      "Dự án minh hoạ này tái hiện một ngôi nhà phố hẹp với ghế ngồi thấp, rộng rãi và chất liệu ấm áp mời gọi sự nán lại.",
      "Da, gỗ óc chó và đồng thau xước được lặp lại qua các tầng, tạo nên một tính cách nhẹ nhàng và kết nối cho cả ngôi nhà.",
    ],
    featured: true,
    isMock: true,
  },
  {
    id: "demo-04",
    slug: "nocturne-suite",
    name: "Nocturne Suite",
    category: "renovation",
    areaSqm: 85,
    designStyle: "Cổ điển hiện đại",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.suiteBedroom,
    gallery: [images.suiteBedroomDark, images.suiteBedroomArt, images.suiteSitting],
    shortDescription:
      "Ý tưởng cải tạo phòng ngủ master cân bằng giữa gam màu trầm và chất liệu bọc nệm mềm mại.",
    story: [
      "Dự án minh hoạ này hình dung việc cải tạo phòng ngủ master, thay sắc trắng sáng bằng những mảng tường trầm bao bọc.",
      "Giường bọc nệm chần sọc, ánh sáng nhiều lớp và góc ngồi yên tĩnh biến căn phòng thành một nơi nghỉ ngơi riêng tư.",
    ],
    featured: false,
    isMock: true,
  },
  {
    id: "demo-05",
    slug: "sage-family-home",
    name: "Sage Family Home",
    category: "townhouse",
    areaSqm: 180,
    designStyle: "Đương đại tự nhiên",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.familyDining,
    gallery: [images.familyEntry, images.familyReading, images.familyBedroom],
    shortDescription:
      "Ý tưởng nhà gia đình với sắc xanh xô thơm, sợi tự nhiên và một phòng ăn ấm cúng.",
    story: [
      "Dự án minh hoạ này đặt đời sống gia đình vào trung tâm là phòng ăn rộng, với ghế nhung và đèn chùm điêu khắc.",
      "Tường xanh xô thơm, mây, tre và gỗ óc chó mang lại sự mềm mại tự nhiên trải dài từ sảnh vào, góc đọc sách đến phòng ngủ.",
    ],
    featured: true,
    isMock: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByIds(ids: string[]): Project[] {
  return ids.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string): { previous: Project; next: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  const count = projects.length;
  return {
    previous: projects[(index - 1 + count) % count],
    next: projects[(index + 1) % count],
  };
}
