import Image from "next/image";
import { Globe2 } from "lucide-react";
import { PageHero, Section, Card, Button } from "@/components/ui";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Export & Global Presence", path: "/export-global-presence", description: "Royal Engitech is an export-focused precision components manufacturer in Ahmedabad, India serving international industrial buyers." });

export default function ExportPage(){return <><PageHero eyebrow="Export / Global Presence" title="Built to support international sourcing teams." intro="Royal Engitech's new website positions the company for trust, documentation, direct inquiry handling and global buyer confidence."/><Section><div className="grid gap-8 lg:grid-cols-2"><Card><Globe2 className="mb-5 text-copper" size={42}/><h2 className="text-3xl font-semibold text-white">Export-focused engineering communication</h2><p className="mt-5 leading-8 text-mist">From Ahmedabad, Gujarat, India, {company.name} supports inquiries requiring identification, packaging, certification and service expectations aligned with international norms of quality.</p><Button href="/contact" className="mt-8">Send an export inquiry</Button></Card><Image src="/images/export-engineering.jpg" alt="Export-ready precision industrial components" width={900} height={640} className="rounded-[2rem] object-cover shadow-premium"/></div></Section></>}
