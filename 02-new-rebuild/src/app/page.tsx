import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { HoverLift, Reveal } from "@/components/motion";
import { Button, Card, Section } from "@/components/ui";
import { capabilities, company, industries, productCategories, qualityPoints } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="noise relative min-h-screen overflow-hidden bg-graphite px-5 pb-20 pt-36 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-radial-grid" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-copper/40 bg-copper/10 px-4 py-2 text-sm font-semibold text-amberline">{company.certification} · Established {company.founded} · Ahmedabad, India</p>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">Precision components engineered for global industry.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">Royal Engitech manufactures and exports high-tech precision engineered components and assemblies for textile machinery, power transmission, water pumps, valves, automobile, pharmaceutical and other industrial sectors.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button href="/contact">Start an Inquiry <ArrowRight className="ml-2" size={18} /></Button><Button href="/products" variant="secondary">Explore Capabilities</Button></div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-copper/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-premium">
              <Image src="/images/precision-machining.jpg" alt="Precision engineered components at Royal Engitech" width={900} height={720} priority className="h-[560px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid gap-4 rounded-3xl border border-white/10 bg-graphite/70 p-5 backdrop-blur md:grid-cols-3">
                {["50+ years experience", "Export-ready quality", "Inquiry-to-dispatch support"].map((stat) => <div className="text-sm font-semibold text-white" key={stat}>{stat}</div>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Credibility" title="A long-running engineering partner with modern manufacturing depth." intro="The rebuild preserves Royal Engitech's core strengths: ISO quality focus, nearly five decades of engineering experience, in-house manufacturing support and international norms of quality.">
        <div className="grid gap-5 md:grid-cols-3">
          {[{icon:BadgeCheck,title:"ISO quality focus",text:"Quality measurement, process monitoring and certification-ready dispatch."},{icon:ShieldCheck,title:"Precision assurance",text:"Computerized measuring instruments and inspection discipline across production."},{icon:Globe2,title:"Export mindset",text:"Packaging, documentation and service expectations aligned to global buyers."}].map((item)=> <HoverLift key={item.title}><Card><item.icon className="mb-5 text-copper" size={34}/><h3 className="text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 text-mist">{item.text}</p></Card></HoverLift>)}
        </div>
      </Section>

      <Section className="bg-steel/45" eyebrow="Manufacturing capabilities" title="From drawings to finished assemblies." intro="A broad in-house setup supports casting, machining, fabrication, tooling, fixtures and CAD/CAM development.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((cap)=><Reveal key={cap}><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5 text-white">{cap}</div></Reveal>)}</div>
      </Section>

      <Section eyebrow="Products/components" title="Core product families for industrial OEMs and exporters." intro="Use product pages from the legacy website as content reference; the new site structures them as clear capabilities for faster buyer evaluation.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{productCategories.slice(0,6).map((p)=><HoverLift key={p.id}><Link href={`/products#${p.id}`} className="block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045]"><Image src={p.image} alt={`${p.title} manufactured by Royal Engitech`} width={520} height={320} className="h-48 w-full object-cover"/><div className="p-6"><p.icon className="mb-4 text-copper"/><h3 className="text-xl font-semibold text-white">{p.title}</h3><p className="mt-3 text-sm leading-6 text-mist">{p.summary}</p></div></Link></HoverLift>)}</div>
      </Section>

      <Section className="bg-[#090f16]" eyebrow="Industries served" title="Built for demanding industrial sectors." intro="Royal Engitech supports customers across textile machinery, power transmission, pump, valve, automobile and pharmaceutical industries.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map((i)=><Card key={i.title}><i.icon className="mb-4 text-copper"/><h3 className="text-xl font-semibold text-white">{i.title}</h3><p className="mt-3 text-mist">{i.text}</p></Card>)}</div>
      </Section>

      <Section eyebrow="Why choose Royal Engitech" title="A practical partner from inquiry to dispatch." intro="The new experience emphasizes buyer confidence: capability clarity, clean inquiry flow, quality documentation and preservation of legacy product information.">
        <div className="grid gap-5 lg:grid-cols-5">{qualityPoints.map((point)=><div className="rounded-3xl border border-copper/20 bg-copper/10 p-5 text-white" key={point}>{point}</div>)}</div>
      </Section>

      <Section className="bg-radial-grid" eyebrow="Export/global trust" title="Ready for international sourcing conversations." intro="For overseas buyers, the new website provides fast discovery, clear inquiry handling and downloadable quality documentation.">
        <div className="flex flex-col gap-4 sm:flex-row"><Button href="/export-global-presence">View Global Presence</Button><Button href="/downloads/royal-engitech-catalog.pdf" variant="secondary">Download Catalog</Button></div>
      </Section>

      <Section className="bg-copper text-graphite" title="Have a component drawing, sample or export inquiry?" intro="Send the requirement and the Royal Engitech team can review product interest, country, contact details and message through the rebuilt backend foundation.">
        <Button href="/contact" className="bg-graphite text-white hover:bg-white hover:text-graphite">Send Contact / Product Inquiry</Button>
      </Section>
    </>
  );
}
