import type { Metadata } from "next";
import { RenderBlocks } from "@/blocks/render-blocks";
import { homePage } from "@/data/pages/home";

export const metadata: Metadata = {
  title: { absolute: homePage.seo.title },
  description: homePage.seo.description,
};

export default function HomePage() {
  return <RenderBlocks blocks={homePage.blocks} />;
}
