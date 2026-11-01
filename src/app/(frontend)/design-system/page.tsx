import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import {
  Button,
  ButtonLink,
  ContactAction,
  Container,
  Eyebrow,
  Heading,
  ImageFrame,
  MockBadge,
  Reveal,
  Section,
  SectionHeading,
  type ImageRatio,
  type SectionTone,
} from "@/components/ui";
import { images } from "@/data/images";

/**
 * INTERNAL review page for the Phase 1 design system. Not linked from the
 * navigation and excluded from search indexing. Sample text below is
 * typographic filler, not business content.
 */
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Ivory", token: "ivory", hex: "#F4F0E9", className: "bg-ivory" },
  { name: "Sand", token: "sand", hex: "#D9CBB8", className: "bg-sand" },
  { name: "Taupe", token: "taupe", hex: "#A58B72", className: "bg-taupe" },
  { name: "Walnut", token: "walnut", hex: "#51483F", className: "bg-walnut" },
  { name: "Charcoal", token: "charcoal", hex: "#252421", className: "bg-charcoal" },
];

const supporting = [
  { name: "Ivory deep", hex: "#ECE6DC", className: "bg-ivory-deep" },
  { name: "Paper", hex: "#FAF8F4", className: "bg-paper" },
  { name: "Taupe deep", hex: "#725D4A", className: "bg-taupe-deep" },
  { name: "Stone", hex: "#9C9185", className: "bg-stone" },
];

const typeScale = [
  { token: "text-display", sample: "Không gian tĩnh lặng", className: "text-display font-light" },
  { token: "text-h1", sample: "Sang trọng từ sự tiết chế", className: "text-h1 font-light" },
  { token: "text-h2", sample: "Ánh sáng và tỷ lệ", className: "text-h2 font-light" },
  { token: "text-h3", sample: "Vật liệu chân thật", className: "text-h3" },
  { token: "text-h4", sample: "Thiết kế cho đời sống", className: "text-h4 font-medium" },
];

const ratios: ImageRatio[] = ["4/5", "3/2", "1/1", "21/9"];
const tones: SectionTone[] = ["ivory", "ivory-deep", "paper", "charcoal"];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 border-t border-line py-14 lg:grid-cols-12">
      <h2 className="eyebrow text-taupe-deep lg:col-span-3">{title}</h2>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <PageIntro
        eyebrow="Phase 1 · Nội bộ"
        title="Design system"
        lede="Token, typography và các component dùng chung cho website Siêu Thị Nội Thất. Trang này chỉ dùng để review, không hiển thị trong điều hướng."
      />

      <Container className="pb-section">
        <Block title="Bảng màu">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {palette.map((c) => (
              <li key={c.token}>
                <div className={`aspect-[4/5] border border-line ${c.className}`} />
                <p className="mt-3 font-display text-h4">{c.name}</p>
                <p className="text-sm text-walnut">
                  {c.hex} · <code>{c.token}</code>
                </p>
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {supporting.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <span className={`size-10 border border-line ${c.className}`} />
                <span className="text-sm">
                  {c.name}
                  <br />
                  <span className="text-walnut">{c.hex}</span>
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Typography">
          <div className="space-y-8">
            {typeScale.map((t) => (
              <div key={t.token} className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                <code className="w-32 shrink-0 text-xs text-taupe-deep">{t.token}</code>
                <p className={`font-display ${t.className}`}>{t.sample}</p>
              </div>
            ))}
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <code className="w-32 shrink-0 text-xs text-taupe-deep">text-lede</code>
              <p className="max-w-2xl text-lede text-walnut">
                Đoạn mở đầu dùng Manrope với khoảng cách dòng rộng để dễ đọc trên mọi kích thước màn hình.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <code className="w-32 shrink-0 text-xs text-taupe-deep">body</code>
              <p className="max-w-reading">
                Nội dung chính dùng cỡ 16px, dòng 1.75. Tiếng Việt có dấu được kiểm tra với cả hai font: ắ ằ ẳ ẵ ặ ấ
                ầ ẩ ẫ ậ ế ề ể ễ ệ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ứ ừ ử ữ ự.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <code className="w-32 shrink-0 text-xs text-taupe-deep">eyebrow</code>
              <div className="space-y-4">
                <Eyebrow>Nhãn mục</Eyebrow>
                <Eyebrow index="01">Nhãn có số thứ tự</Eyebrow>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Section heading">
          <SectionHeading
            eyebrow="Nhãn mục"
            index="02"
            title="Tiêu đề phần với độ cân bằng dòng tự nhiên"
            lede="Đoạn dẫn ngắn giải thích nội dung của phần này."
            aside={
              <ButtonLink href="/projects" variant="text" arrow>
                Xem tất cả
              </ButtonLink>
            }
          />
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Solid</Button>
            <Button arrow>Solid + arrow</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text" arrow>
              Text link
            </Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 bg-charcoal p-8">
            <Button tone="light">Solid</Button>
            <Button tone="light" variant="outline" arrow>
              Outline
            </Button>
            <Button tone="light" variant="text" arrow>
              Text link
            </Button>
          </div>
        </Block>

        <Block title="Contact actions">
          <p className="mb-6 max-w-2xl text-sm text-walnut">
            Khi chưa có số điện thoại / URL thật, component hiển thị nhãn chờ cập nhật (viền nét đứt), không tạo
            liên kết giả.
          </p>
          <div className="flex flex-wrap gap-4">
            <ContactAction channel="hotline" />
            <ContactAction channel="zalo" />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ContactAction channel="hotline" appearance="row" />
            <ContactAction channel="facebook" appearance="row" />
          </div>
        </Block>

        <Block title="Images">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {ratios.map((r, i) => (
              <figure key={r} className={r === "21/9" ? "col-span-2 md:col-span-4" : ""}>
                <ImageFrame
                  image={[images.apt1Master, images.apt2Dining, images.apt2Entry, images.apt1Panorama][i]}
                  ratio={r}
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <figcaption className="mt-2 text-xs text-walnut">ratio {r}</figcaption>
              </figure>
            ))}
          </div>
          <a href="#hover-demo" id="hover-demo" className="group mt-8 block max-w-md">
            <ImageFrame image={images.apt1Sofa} ratio="3/2" sizes="28rem" zoom />
            <span className="mt-2 block text-xs text-walnut">Hover: slow zoom</span>
          </a>
        </Block>

        <Block title="Badges">
          <div className="flex flex-wrap gap-4 bg-sand/50 p-6">
            <MockBadge label="Dự án minh hoạ" />
            <MockBadge label="Ảnh minh hoạ" tone="dark" />
          </div>
        </Block>

        <Block title="Motion">
          <div className="grid gap-4 sm:grid-cols-3">
            {[0, 0.1, 0.2].map((d) => (
              <Reveal key={d} delay={d} className="border border-line p-8">
                <p className="font-display text-h4">Reveal</p>
                <p className="text-sm text-walnut">delay {d}s</p>
              </Reveal>
            ))}
          </div>
        </Block>
      </Container>

      {tones.map((tone) => (
        <Section key={tone} tone={tone} spacing="compact">
          <Container>
            <Eyebrow tone={tone === "charcoal" ? "light" : "dark"}>Section tone · {tone}</Eyebrow>
            <Heading level={2} size="h3" className="mt-4">
              Nhịp điệu khoảng trắng giữa các phần
            </Heading>
          </Container>
        </Section>
      ))}
    </>
  );
}
