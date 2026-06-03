import Image from "next/image";
import { Reveal } from "@/components/motion";
import { Card, PageHero, Section } from "@/components/ui";
import { capabilities, company } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  path: "/about",
  description: "Learn about Royal Engitech, an ISO 9001:2015 precision engineered components manufacturer and exporter established in Ahmedabad in 1965.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Royal Engitech"
        title="Engineering confidence since 1965."
        intro={`${company.name} is an ${company.certification} company established to manufacture and export high-tech precision engineered components and assemblies.`}
      />
      <Section
        title="Focused on precision, quality and responsive industrial service."
        intro="Royal Engitech supports customer requirements for castings, forgings, high-precision machined components, tooling and fixtures. The new rebuild preserves this legacy content while presenting it in a modern buyer-friendly format."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/cnc-workshop.jpg"
              alt="Royal Engitech CNC machining infrastructure"
              width={900}
              height={640}
              className="rounded-[2rem] border border-white/10 object-cover shadow-premium"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <p className="text-lg leading-8 text-mist">
                The company has continued steady investments in computerized technology and machinery, helping it serve global markets with precision quality products and services from inquiry to dispatch.
              </p>
              <div className="mt-8 grid gap-3">
                {capabilities.map((cap) => (
                  <div className="rounded-2xl bg-white/5 p-4 text-white" key={cap}>
                    {cap}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
