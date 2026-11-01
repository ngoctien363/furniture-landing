/**
 * Typed content model for the Siêu Thị Nội Thất website.
 *
 * Every piece of business content lives in `src/data/*` and conforms to these
 * types. UI components only consume these shapes — they never hardcode
 * business facts — so real content can replace the mock data without
 * restructuring the application.
 */

/* -------------------------------------------------------------------------- */
/* Images                                                                     */
/* -------------------------------------------------------------------------- */

export type ImageCategory =
  | "living-room"
  | "apartment"
  | "villa"
  | "bedroom"
  | "dining"
  | "kitchen"
  | "hallway"
  | "floor-plan"
  | "furniture-detail";

export interface ImageAsset {
  /** Path under `/public` (local) or an allow-listed remote URL. */
  src: string;
  /** Descriptive alt text. Describe what is shown — never claim ownership. */
  alt: string;
  width: number;
  height: number;
  category: ImageCategory;
  /**
   * Where the image came from. `stock` images are generic demonstration
   * photography and must never be presented as real Siêu Thị Nội Thất work.
   */
  source:
    | { kind: "stock"; provider: string; url: string }
    | { kind: "official" };
}

/* -------------------------------------------------------------------------- */
/* Placeholder-aware values                                                   */
/* -------------------------------------------------------------------------- */

/**
 * A business value that may not be known yet.
 * `value: null` means "not provided" — the UI shows `placeholder` instead and
 * must not create a link or action from it.
 */
export interface PendingValue<T = string> {
  value: T | null;
  /** Visible, clearly-labelled stand-in text shown while `value` is null. */
  placeholder: string;
}

/* -------------------------------------------------------------------------- */
/* Brand & site configuration                                                 */
/* -------------------------------------------------------------------------- */

export type LogoConfig =
  /** Temporary typographic wordmark rendered from text. */
  | { kind: "wordmark"; primary: string; secondary?: string }
  /** Official logo file — drop it into /public and switch to this variant. */
  | {
      kind: "image";
      src: string;
      /** Optional variant for dark backgrounds (e.g. over the hero image). */
      srcOnDark?: string;
      alt: string;
      width: number;
      height: number;
    };

export type ContactChannelId = "hotline" | "zalo" | "facebook" | "messenger";

export interface ContactChannel {
  id: ContactChannelId;
  label: string;
  /**
   * Raw channel value:
   * - hotline / zalo: phone number (any formatting; digits are extracted)
   * - facebook / messenger: full https URL
   */
  contact: PendingValue;
  /** Short call-to-action text, e.g. "Call now". */
  actionLabel: string;
}

/** Maps to the future Payload `Navigation` global. */
export interface NavItem {
  label: string;
  href: string;
  /** Hidden items stay in config but are not rendered. */
  visible?: boolean;
}

/** A call-to-action link (label + internal path or real external URL). */
export interface CtaLink {
  label: string;
  href: string;
}

/**
 * Site-wide settings. Maps to the future Payload `SiteSettings` global.
 * Page-level content (homepage sections, page copy) lives in page data, not here.
 */
export interface SiteConfig {
  name: string;
  legalName: PendingValue;
  tagline: string;
  description: string;
  /** Production URL. Read from NEXT_PUBLIC_SERVER_URL when available. */
  url: string;
  /** BCP 47 language tag for <html lang>, e.g. "vi". */
  locale: string;
  /** Open Graph locale, e.g. "vi_VN". */
  ogLocale: string;
  logo: LogoConfig;
  /** True while the site runs on demonstration content. */
  isDemoContent: boolean;
  demoNotice: { short: string; full: string };
  navigation: NavItem[];
  ctas: {
    /** Main action when the hotline is not configured yet. */
    startProject: CtaLink;
    exploreProjects: CtaLink;
    bookShowroom: CtaLink;
  };
  contact: {
    primary: ContactChannelId;
    channels: Record<ContactChannelId, ContactChannel>;
    showroomAddress: PendingValue;
    openingHours: PendingValue;
    email: PendingValue;
  };
  footer: {
    statement: string;
    imageCredit: string;
  };
  seo: {
    keywords: string[];
    ogImage: ImageAsset;
  };
}

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export interface Service {
  id: string;
  slug: string;
  /** Display order (1-based) — also used as the editorial index number. */
  order: number;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  image: ImageAsset;
  /** True while copy is placeholder text pending official descriptions. */
  isPlaceholder: boolean;
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = "apartment" | "villa" | "townhouse" | "renovation";

export interface Project {
  id: string;
  /** URL segment for /projects/[slug]. */
  slug: string;
  name: string;
  category: ProjectCategory;
  /** Floor area in square metres (pending until supplied). */
  area: PendingValue<number>;
  designStyle: string;
  location: PendingValue;
  year: PendingValue<number>;
  mainImage: ImageAsset;
  gallery: ImageAsset[];
  shortDescription: string;
  /** Longer narrative for the project detail page. */
  story: string[];
  featured: boolean;
  /**
   * Real project whose name/area/location/year are not confirmed yet.
   * The UI shows a "details will be updated" note.
   */
  detailsPending: boolean;
  /**
   * Illustrative demonstration project — not a real Siêu Thị Nội Thất commission.
   * The UI must label every mock project as demonstration content.
   */
  isMock: boolean;
}

/* -------------------------------------------------------------------------- */
/* Consultation form                                                          */
/* -------------------------------------------------------------------------- */

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}

/* -------------------------------------------------------------------------- */
/* Homepage blocks (future Payload blocks on the Pages collection)            */
/* -------------------------------------------------------------------------- */

/** Fields shared by every block. `visible: false` hides it (CLAUDE.md §13.3). */
interface BlockBase {
  id: string;
  visible: boolean;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface HeroBlockData extends BlockBase {
  blockType: "hero";
  eyebrow: string;
  heading: string;
  subheading: string;
  image: ImageAsset;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export interface BrandIntroductionBlockData extends BlockBase {
  blockType: "brandIntroduction";
  eyebrow: string;
  heading: string;
  body: string[];
  image: ImageAsset;
  secondaryImage?: ImageAsset;
  cta?: CtaLink;
  isPlaceholder: boolean;
}

export interface ServicesBlockData extends BlockBase {
  blockType: "services";
  eyebrow: string;
  heading: string;
  lede?: string;
  /** Service ids to show, in order. Empty = all services. */
  serviceIds: string[];
  cta?: CtaLink;
}

export interface FeaturedProjectsBlockData extends BlockBase {
  blockType: "featuredProjects";
  eyebrow: string;
  heading: string;
  lede?: string;
  /** Project ids to show, in order. */
  projectIds: string[];
  cta?: CtaLink;
}

export interface DesignPhilosophyBlockData extends BlockBase {
  blockType: "designPhilosophy";
  eyebrow: string;
  heading: string;
  principles: FeatureItem[];
  image?: ImageAsset;
}

export interface WhyChooseUsBlockData extends BlockBase {
  blockType: "whyChooseUs";
  eyebrow: string;
  heading: string;
  lede?: string;
  items: FeatureItem[];
  image?: ImageAsset;
}

export interface CtaBlockData extends BlockBase {
  blockType: "cta";
  eyebrow: string;
  heading: string;
  description?: string;
  image?: ImageAsset;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  /** Show the hotline action (rendered only when a real number exists). */
  showHotline: boolean;
}

export interface ContactBlockData extends BlockBase {
  blockType: "contact";
  eyebrow: string;
  heading: string;
  lede?: string;
  /** Contact values come from SiteSettings; the block only controls layout. */
  showShowroom: boolean;
}

export type HomeBlock =
  | HeroBlockData
  | BrandIntroductionBlockData
  | ServicesBlockData
  | FeaturedProjectsBlockData
  | DesignPhilosophyBlockData
  | WhyChooseUsBlockData
  | CtaBlockData
  | ContactBlockData;

export type HomeBlockType = HomeBlock["blockType"];

/* -------------------------------------------------------------------------- */
/* Page content (future Payload Pages collection, fixed fields per page)      */
/* -------------------------------------------------------------------------- */

export interface PageSeo {
  title: string;
  description: string;
}

export interface PageIntroData {
  eyebrow: string;
  title: string;
  lede?: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface HomePageContent {
  seo: PageSeo;
  blocks: HomeBlock[];
}

export interface AboutPageContent {
  seo: PageSeo;
  intro: PageIntroData;
  banner: ImageAsset;
  story: BrandIntroductionBlockData;
  process: { eyebrow: string; heading: string; steps: ProcessStep[]; isPlaceholder: boolean };
  philosophy: DesignPhilosophyBlockData;
  cta: CtaBlockData;
}

export interface ServicesPageContent {
  seo: PageSeo;
  intro: PageIntroData;
  benefitsLabel: string;
  serviceCtaLabel: string;
  process: AboutPageContent["process"];
  cta: CtaBlockData;
}

export interface ProjectsPageContent {
  seo: PageSeo;
  intro: PageIntroData;
  allLabel: string;
  emptyLabel: string;
  cta: CtaBlockData;
}

export interface ProjectDetailLabels {
  category: string;
  area: string;
  style: string;
  location: string;
  year: string;
  story: string;
  gallery: string;
  previous: string;
  next: string;
  backToProjects: string;
  mockNotice: string;
  pendingNotice: string;
}

export interface ContactPageContent {
  seo: PageSeo;
  intro: PageIntroData;
  channels: { eyebrow: string; heading: string; lede: string };
  showroom: { eyebrow: string; heading: string; lede: string; image: ImageAsset };
  form: { eyebrow: string; heading: string; lede: string };
}
