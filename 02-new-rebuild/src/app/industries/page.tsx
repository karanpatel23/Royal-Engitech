import { PageHero, Section, Card, Button } from "@/components/ui";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Industries Served", path: "/industries", description: "Royal Engitech serves textile machinery, power transmission, water pumps, valves, automobile, pharmaceutical and industrial sectors." });

export default function IndustriesPage(){return <><PageHero eyebrow="Industries Served" title="Precision engineering for critical industrial sectors." intro="The legacy site references a broad industrial footprint. The rebuild turns those sectors into focused buyer pathways."/><Section><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map((item)=><Card key={item.title}><item.icon className="mb-4 text-copper" size={36}/><h2 className="text-2xl font-semibold text-white">{item.title}</h2><p className="mt-4 leading-7 text-mist">{item.text}</p></Card>)}</div><Button href="/contact" className="mt-10">Discuss your industry requirement</Button></Section></>}
