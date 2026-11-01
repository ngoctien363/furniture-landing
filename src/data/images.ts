import type { ImageAsset, ImageCategory } from "@/types/content";

/**
 * Central image registry — Siêu Thị Nội Thất design visualisations (3D renders)
 * supplied by the business in /public/images/khoanh.
 *
 *   Căn hộ 01: files 1–18   ·   Căn hộ 02: files 19–36 (19 = floor plan)
 *
 * Files 7 and 32 have white side borders; trimmed copies live in
 * /public/images/khoanh/crop (originals untouched).
 *
 * To replace an image: drop the file into /public/images, then update `src`,
 * dimensions and `alt` here. Components never reference image paths directly.
 */

const DIR = "/images/khoanh";

function official(
  file: string,
  category: ImageCategory,
  alt: string,
  width = 2560,
  height = 1440,
): ImageAsset {
  return { src: `${DIR}/${file}`, alt, width, height, category, source: { kind: "official" } };
}

/** Files 15–19 are 2560×1536. */
const TALL = [2560, 1536] as const;

export const images = {
  /* Căn hộ 01 ------------------------------------------------------------ */
  apt1Living: official("1.jpg", "living-room", "Phối cảnh phòng khách với kệ tivi gỗ, đèn thả dạng vòng và bàn ăn bên cạnh"),
  apt1LivingTv: official("2.jpg", "living-room", "Phối cảnh phòng khách nhìn từ sofa về phía kệ tivi và khu bàn ăn"),
  apt1Sofa: official("3.jpg", "living-room", "Phối cảnh sofa tông kem, bàn trà tròn và tranh treo trên vách đá vân"),
  apt1OpenPlan: official("4.jpg", "living-room", "Phối cảnh không gian khách và bàn ăn liên thông với vách đá vân và đèn vòng"),
  apt1Dining: official("5.jpg", "dining", "Phối cảnh khu bàn ăn cạnh phòng khách dưới hệ đèn vòng"),
  apt1DiningTop: official("6.jpg", "dining", "Phối cảnh bàn ăn mặt đá với ghế bọc da màu cam đất nhìn từ trên cao"),
  apt1Kitchen: official("crop/7.jpg", "kitchen", "Phối cảnh bếp tủ gỗ phối trắng với kính ốp màu xanh ngọc", 1904, 1440),
  apt1Master: official("8.jpg", "bedroom", "Phối cảnh phòng ngủ master với tủ áo gỗ, bàn trang điểm và gương elip"),
  apt1Hallway: official("9.jpg", "hallway", "Phối cảnh hành lang với cửa gỗ và tranh trừu tượng"),
  apt1Panorama: official("10.jpg", "living-room", "Phối cảnh toàn cảnh phòng khách và bàn ăn với vách đá vân"),
  apt1MasterBed: official("11.jpg", "bedroom", "Phối cảnh phòng ngủ master với đầu giường bọc nệm và kệ trang trí có đèn"),
  apt1MasterVanity: official("12.jpg", "bedroom", "Phối cảnh góc bàn trang điểm và giường trong phòng ngủ master"),
  apt1MasterWall: official("13.jpg", "bedroom", "Phối cảnh phòng ngủ master với vách ốp nẹp đồng và rèm sáo"),
  apt1MasterTop: official("14.jpg", "bedroom", "Phối cảnh bàn trang điểm và giường phòng ngủ master nhìn từ trên cao"),
  apt1KidsRoom: official("15.jpg", "bedroom", "Phối cảnh phòng ngủ bé gái tông hồng với bàn học và tủ áo", ...TALL),
  apt1KidsBed: official("16.jpg", "bedroom", "Phối cảnh phòng ngủ tông hồng với giường bọc nệm và góc học tập", ...TALL),
  apt1KidsDesk: official("17.jpg", "bedroom", "Phối cảnh góc học tập có đèn trong phòng ngủ tông hồng", ...TALL),
  apt1KidsTop: official("18.jpg", "bedroom", "Phối cảnh phòng ngủ tông hồng nhìn từ trên với bàn học và tranh treo", ...TALL),

  /* Căn hộ 02 ------------------------------------------------------------ */
  apt2FloorPlan: official("19.jpg", "floor-plan", "Mặt bằng phối cảnh căn hộ hai phòng ngủ", ...TALL),
  apt2Living: official("20.jpg", "living-room", "Phối cảnh phòng khách với sofa nệm phồng và vách lam gỗ"),
  apt2Dining: official("21.jpg", "dining", "Phối cảnh bàn ăn mặt đá với bình hoa, nhìn về phía phòng khách"),
  apt2LivingTv: official("22.jpg", "living-room", "Phối cảnh kệ tivi ốp gỗ và sofa nhìn từ khu bàn ăn"),
  apt2TvWall: official("23.jpg", "living-room", "Phối cảnh mảng tường tivi với kệ gỗ có đèn hắt"),
  apt2Panorama: official("24.jpg", "living-room", "Phối cảnh toàn cảnh phòng khách, bàn ăn và bếp liên thông"),
  apt2DiningKitchen: official("25.jpg", "dining", "Phối cảnh khu bàn ăn và bếp với vách lam gỗ"),
  apt2Entry: official("26.jpg", "furniture-detail", "Phối cảnh tủ giày và tủ âm tường khu sảnh vào"),
  apt2Kitchen: official("27.jpg", "kitchen", "Phối cảnh hệ tủ bếp gỗ phối trắng với tủ lạnh và máy giặt âm tủ"),
  apt2Bedroom: official("28.jpg", "bedroom", "Phối cảnh phòng ngủ với đầu giường gỗ uốn cong và bàn trang điểm"),
  apt2BedroomWardrobe: official("29.jpg", "bedroom", "Phối cảnh phòng ngủ với tủ áo trắng, kệ treo và cây xanh"),
  apt2BedroomDesk: official("30.jpg", "bedroom", "Phối cảnh góc bàn làm việc cạnh cửa sổ trong phòng ngủ nhìn từ trên"),
  apt2BedroomWide: official("31.jpg", "bedroom", "Phối cảnh phòng ngủ với đầu giường gỗ và rèm sáo"),
  apt2NavyRoom: official("crop/32.jpg", "bedroom", "Phối cảnh phòng ngủ tông xanh navy với bàn làm việc", 1866, 1440),
  apt2NavyArt: official("33.jpg", "bedroom", "Phối cảnh phòng ngủ tông xanh navy với tranh trừu tượng và kệ sách"),
  apt2NavyTop: official("34.jpg", "bedroom", "Phối cảnh giường và bàn làm việc trong phòng ngủ tông xanh nhìn từ trên"),
  apt2NavyWardrobe: official("35.jpg", "bedroom", "Phối cảnh phòng ngủ tông xanh với tủ áo và kệ có đèn hắt"),
  apt2NavyDoor: official("36.jpg", "bedroom", "Phối cảnh phòng ngủ tông xanh nhìn từ cửa vào"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
