import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { Card, PageHero, Section } from "@/components/ui";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Contact & Inquiry", path: "/contact", description: "Send a precision component, product or export inquiry to Royal Engitech in Ahmedabad, Gujarat, India." });

export default function ContactPage(){return <><PageHero eyebrow="Contact / Inquiry" title="Send a secure product or export inquiry." intro="The old public copy only exposed a frontend inquiry form. This rebuild creates a fresh validated backend foundation for contact and product inquiries."/><Section><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="grid gap-5"><Card><h2 className="text-2xl font-semibold text-white">Royal Engitech Pvt. Ltd.</h2><p className="mt-4 leading-7 text-mist">{company.address}</p><p className="mt-4 text-mist">Contact Person: {company.contactPerson}</p><p className="mt-2 text-mist">Phone: {company.phone}</p><p className="mt-2 text-mist">Fax: {company.fax}</p><p className="mt-2 text-mist">Email: {company.emails.join(" / ")}</p></Card><Card><h3 className="font-semibold text-white">Backend foundation</h3><p className="mt-3 leading-7 text-mist">This form uses server-side Zod validation, a honeypot spam field, rate-limit-ready protection, clear success/error JSON responses and SMTP notification configuration through environment variables.</p></Card></div><Suspense fallback={<div className="rounded-[2rem] border border-white/10 p-8">Loading form…</div>}><ContactForm /></Suspense></div></Section></>}
