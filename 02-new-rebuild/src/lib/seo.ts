import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.royalengitech.com";

export function pageMetadata({ title, description, path = "/" }: { title: string; description: string; path?: string }): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Royal Engitech",
      type: "website",
      images: [{ url: "/images/precision-machining.jpg", width: 1200, height: 630, alt: "Royal Engitech precision engineering facility" }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export { siteUrl };
