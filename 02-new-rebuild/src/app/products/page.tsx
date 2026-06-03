import Image from "next/image";
import { PageHero, Section, Card, Button } from "@/components/ui";
import { productCategories } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Products & Capabilities", path: "/products", description: "Explore Royal Engitech precision CNC turned parts, aluminum parts, castings, sheet metal parts, gears, timing pulleys and ground shafts." });

export default function ProductsPage() {
  return <><PageHero eyebrow="Products / Capabilities" title="Precision component families for OEM and export buyers." intro="Legacy product pages have been consolidated into clear, searchable capability sections with redirect anchors for migration."/><Section><div className="grid gap-8">{productCategories.map((p,idx)=><Card key={p.id} className="scroll-mt-28 overflow-hidden p-0" ><div id={p.id} className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]"><Image src={p.image} alt={`${p.title} precision component capability`} width={720} height={480} className="h-full min-h-80 w-full object-cover"/><div className="p-8 md:p-10"><p.icon className="mb-5 text-copper" size={36}/><p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-copper">Capability {String(idx+1).padStart(2,"0")}</p><h2 className="font-display text-3xl font-semibold text-white">{p.title}</h2><p className="mt-4 text-lg leading-8 text-mist">{p.summary}</p><p className="mt-4 leading-7 text-platinum/80">{p.details}</p><Button href={`/contact?interest=${encodeURIComponent(p.title)}`} className="mt-8">Inquire about {p.title}</Button></div></div></Card>)}</div></Section></>;
}
