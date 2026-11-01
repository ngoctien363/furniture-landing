import type { Project, ProjectCategory, SelectOption } from "@/types/content";
import { images } from "./images";

/**
 * Projects — future Payload `Projects` collection.
 *
 * Imagery is Siêu Thị Nội Thất's own design visualisation (supplied by the business).
 * Project names below are WORKING TITLES; area, location and year have not
 * been provided yet, so they stay pending (`detailsPending: true`) and must
 * not be invented. Descriptions only describe what the renders show.
 */

const pendingLocation = { value: null, placeholder: "Sẽ cập nhật" };
const pendingYear = { value: null, placeholder: "Sẽ cập nhật" };
const pendingArea = { value: null, placeholder: "Sẽ cập nhật" };

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
    id: "apt-01",
    slug: "can-ho-01",
    name: "Căn hộ 01",
    category: "apartment",
    area: pendingArea,
    designStyle: "Hiện đại ấm áp",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.apt1Panorama,
    gallery: [
      images.apt1Living,
      images.apt1Sofa,
      images.apt1DiningTop,
      images.apt1OpenPlan,
      images.apt1Kitchen,
      images.apt1Hallway,
      images.apt1MasterBed,
      images.apt1Master,
      images.apt1MasterTop,
      images.apt1KidsRoom,
      images.apt1KidsDesk,
      images.apt1KidsTop,
    ],
    shortDescription:
      "Không gian sinh hoạt liên thông với vách đá vân, hệ đèn vòng và nội thất tông kem điểm sắc cam đất.",
    story: [
      "Phòng khách và khu bàn ăn được mở thành một không gian liền mạch. Mảng vách đá vân và kệ tivi ốp gỗ làm điểm nhấn, trong khi hệ đèn thả dạng vòng kết nối hai khu vực.",
      "Phòng ngủ master dùng tủ áo gỗ, đầu giường bọc nệm và bàn trang điểm với gương elip có đèn. Phòng ngủ cho bé được thiết kế tông hồng nhẹ nhàng cùng góc học tập riêng.",
    ],
    featured: true,
    detailsPending: true,
    isMock: false,
  },
  {
    id: "apt-02",
    slug: "can-ho-02",
    name: "Căn hộ 02",
    category: "apartment",
    area: pendingArea,
    designStyle: "Hiện đại tối giản",
    location: pendingLocation,
    year: pendingYear,
    mainImage: images.apt2Panorama,
    gallery: [
      images.apt2FloorPlan,
      images.apt2Living,
      images.apt2Dining,
      images.apt2TvWall,
      images.apt2Entry,
      images.apt2Kitchen,
      images.apt2Bedroom,
      images.apt2BedroomWardrobe,
      images.apt2BedroomDesk,
      images.apt2NavyArt,
      images.apt2NavyRoom,
      images.apt2NavyTop,
    ],
    shortDescription:
      "Căn hộ hai phòng ngủ với sofa nệm phồng, vách lam gỗ và hệ tủ âm tường gọn gàng từ sảnh vào đến bếp.",
    story: [
      "Mặt bằng căn hộ hai phòng ngủ tổ chức phòng khách, bàn ăn và bếp thành một trục liên thông. Vách lam gỗ phân tách nhẹ nhàng mà vẫn giữ được ánh sáng.",
      "Hệ tủ giày, tủ âm tường và tủ bếp gỗ phối trắng được bố trí liền mạch. Hai phòng ngủ mang hai tinh thần riêng: một phòng tông gỗ ấm với đầu giường uốn cong, một phòng tông xanh navy với góc làm việc.",
    ],
    featured: true,
    detailsPending: true,
    isMock: false,
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
