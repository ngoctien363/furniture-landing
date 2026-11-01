import type { ImageAsset, ImageCategory } from "@/types/content";

/**
 * Central image registry.
 *
 * All demonstration photography is generic stock imagery from Unsplash
 * (Unsplash License), stored locally under /public/images/placeholders so the site
 * never depends on remote hosts. These photos are NOT Minh Khoi projects.
 *
 * To replace an image: drop the new file into /public/images, update `src`,
 * dimensions, `alt`, and set `source: { kind: "official" }`.
 */

const MOCK_DIR = "/images/placeholders";

/** All mock photos share a 3:2 crop (2000×1333) for visual consistency. */
const W = 2000;
const H = 1333;

function stock(
  file: string,
  unsplashId: string,
  category: ImageCategory,
  alt: string,
): ImageAsset {
  return {
    src: `${MOCK_DIR}/${file}.jpg`,
    alt,
    width: W,
    height: H,
    category,
    source: {
      kind: "stock",
      provider: "Unsplash",
      url: `https://unsplash.com/photos/${unsplashId}`,
    },
  };
}

export const images = {
  /* Site-level ------------------------------------------------------------ */
  heroLivingRoom: stock(
    "hero-living-room",
    "photo-1598928506311-c55ded91a20c",
    "living-room",
    "Phòng khách sáng với trần ô kẻ, kệ âm tường và sofa tông trung tính",
  ),
  aboutCalmBedroom: stock(
    "about-calm-bedroom",
    "photo-1617325247661-675ab4b64ae2",
    "bedroom",
    "Phòng ngủ tối giản với giường gỗ thấp và chăn ga trắng mềm mại",
  ),

  /* Apartment ------------------------------------------------------------- */
  apartmentLiving: stock(
    "apartment-living",
    "photo-1600607687939-ce8a6c25118c",
    "apartment",
    "Không gian sinh hoạt mở của căn hộ với sofa xám và mảng tường gỗ",
  ),
  apartmentLounge: stock(
    "apartment-lounge",
    "photo-1600566753086-00f18fb6b3ea",
    "apartment",
    "Phòng khách thông tầng với cầu thang gỗ bay và vách kính kịch trần",
  ),
  apartmentBedroom: stock(
    "apartment-bedroom",
    "photo-1631049307264-da0ec9d70304",
    "bedroom",
    "Phòng ngủ căn hộ với đầu giường bọc nệm và cửa sổ nhìn ra thành phố",
  ),
  apartmentKitchen: stock(
    "apartment-kitchen",
    "photo-1600489000022-c2086d79f9d4",
    "dining",
    "Bếp với tủ màu than chì, gạch trắng và kệ gỗ mở",
  ),

  /* Villa ----------------------------------------------------------------- */
  villaPoolTerrace: stock(
    "villa-pool-terrace",
    "photo-1613977257363-707ba9348227",
    "villa",
    "Biệt thự đương đại màu trắng với sân hồ bơi và khu thư giãn ngoài trời",
  ),
  villaFacade: stock(
    "villa-facade",
    "photo-1613490493576-7fde63acd811",
    "villa",
    "Mặt tiền biệt thự đương đại với trần gỗ nhìn ra hồ bơi dài",
  ),
  villaGlassStair: stock(
    "villa-glass-stair",
    "photo-1600573472550-8090b5e0745e",
    "villa",
    "Nội thất biệt thự với cầu thang hở và vách kính hướng ra hồ bơi",
  ),
  villaEvening: stock(
    "villa-evening",
    "photo-1600585154340-be6161a56a0c",
    "villa",
    "Biệt thự hiện đại rực sáng lúc hoàng hôn với không gian sinh hoạt mở",
  ),
  villaGarden: stock(
    "villa-garden",
    "photo-1600607688969-a5bfcd646154",
    "villa",
    "Mặt sau biệt thự ốp tối màu dưới tán cây lớn trong vườn",
  ),

  /* Townhouse ------------------------------------------------------------- */
  townhouseLiving: stock(
    "townhouse-living",
    "photo-1618221195710-dd6b41faaea6",
    "living-room",
    "Phòng khách ấm áp với sofa thấp, đôn da và cửa sổ lấy sáng cao",
  ),
  townhouseLounge: stock(
    "townhouse-lounge",
    "photo-1600210492486-724fe5c67fb0",
    "living-room",
    "Phòng khách ngập nắng với sofa da màu cognac và mảng tường tranh",
  ),
  townhouseConsole: stock(
    "townhouse-console",
    "photo-1618220179428-22790b461013",
    "furniture-detail",
    "Bàn console đồng thau với gương tròn, gốm và ghế bành màu cam đất",
  ),
  townhouseFamilyRoom: stock(
    "townhouse-family-room",
    "photo-1616137466211-f939a420be84",
    "living-room",
    "Phòng sinh hoạt gia đình với sofa góc xám nhạt và cửa sổ cao",
  ),

  /* Suite / bedrooms ------------------------------------------------------ */
  suiteBedroom: stock(
    "suite-bedroom",
    "photo-1616594039964-ae9021a400a0",
    "bedroom",
    "Phòng ngủ với giường bọc nệm chần sọc, tường tối màu và đèn thả đồng",
  ),
  suiteBedroomDark: stock(
    "suite-bedroom-dark",
    "photo-1617104678098-de229db51175",
    "bedroom",
    "Phòng ngủ trầm với tường tối có vân và cửa sổ hướng ra vườn",
  ),
  suiteBedroomArt: stock(
    "suite-bedroom-art",
    "photo-1617098900591-3f90928e8c54",
    "bedroom",
    "Phòng ngủ với đèn chùm pha lê, ghế băng bọc nệm và tranh trừu tượng",
  ),
  suiteSitting: stock(
    "suite-sitting",
    "photo-1616486338812-3dadae4b4ace",
    "living-room",
    "Phòng ngồi với sofa góc màu kem, bàn trà tròn và mảng tường trang trí",
  ),

  /* Family home ----------------------------------------------------------- */
  familyDining: stock(
    "family-dining",
    "photo-1617806118233-18e1de247200",
    "dining",
    "Phòng ăn với ghế nhung xanh lá và đèn chùm cầu điêu khắc",
  ),
  familyEntry: stock(
    "family-entry",
    "photo-1616046229478-9901c5536a45",
    "furniture-detail",
    "Sảnh vào với tủ gỗ óc chó, gương tròn và tường xanh xô thơm",
  ),
  familyReading: stock(
    "family-reading",
    "photo-1618219908412-a29a1bb7b86e",
    "furniture-detail",
    "Góc đọc sách với đèn mây, tủ đan mây và ghế da",
  ),
  familyBedroom: stock(
    "family-bedroom",
    "photo-1615874959474-d609969a20ed",
    "bedroom",
    "Phòng ngủ nhiều lớp với đèn đan, tranh thực vật và chăn mềm",
  ),

  /* Furniture details ----------------------------------------------------- */
  detailLoungeChair: stock(
    "detail-lounge-chair",
    "photo-1586023492125-27b2c045efd7",
    "furniture-detail",
    "Ghế thư giãn màu mù tạt cạnh đèn cây đồng thau và tranh đơn sắc",
  ),
  detailVelvetSofa: stock(
    "detail-velvet-sofa",
    "photo-1555041469-a586c61ea9bc",
    "furniture-detail",
    "Sofa nhung xanh rêu trên chân gỗ thuôn",
  ),
  detailCabinetry: stock(
    "detail-cabinetry",
    "photo-1594026112284-02bb6f3352fe",
    "furniture-detail",
    "Hệ tủ treo gỗ và trắng với đồ trang trí",
  ),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
