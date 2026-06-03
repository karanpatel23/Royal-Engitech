import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileCheck2 } from "lucide-react";
import { HoverLift, Reveal } from "@/components/motion";
import { Button, Panel, Section, StatStrip } from "@/components/ui";
import { capabilities, company, exportReadiness, industries, productCategories, qualityProcess, trustSignals } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="absolute inset-0 engineering-grid opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-copper">{company.certification} · Established {company.founded} · Ahmedabad, India</p>
            <h1 className="text-balance font-display text-5xl font-semibold tracking-tight text-graphite sm:text-7xl">Precision engineered components for demanding industrial buyers.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">Royal Engitech manufactures and exports custom engineered components and assemblies for textile machinery, power transmission, pumps, valves, automobile, pharmaceutical and industrial equipment sectors.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button href="/contact">Send RFQ <ArrowRight className="ml-2" size={18} /></Button><Button href="/products" variant="secondary">View capabilities</Button></div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-brass/30" />
              <div className="overflow-hidden rounded-[2.5rem] border border-line bg-porcelain p-3 shadow-editorial">
                <Image src="/images/hero-cnc-vmc.jpg" alt="Royal Engitech CNC machining facility" width={1100} height={620} priority className="h-[520px] w-full rounded-[2rem] object-cover" />
              </div>
              <div className="absolute -bottom-8 left-6 right-6 rounded-[1.5rem] border border-line bg-porcelain/95 p-5 shadow-metal backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-3">
                  {trustSignals.slice(0, 3).map((item) => <div key={item.label}><p className="font-display text-2xl font-semibold text-graphite">{item.value}</p><p className="text-xs uppercase tracking-[0.18em] text-smoke">{item.label}</p></div>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="pt-24" eyebrow="Manufacturing credibility" title="Built around drawings, repeatability and export-ready dispatch." intro="The company combines machining, casting, fabrication, tooling and inspection support so sourcing teams can discuss complete component families—not just isolated operations.">
        <StatStrip items={trustSignals} />
      </Section>

      <Section className="bg-porcelain" eyebrow="Capabilities" title="A connected shop-floor capability, presented as a production route." intro="From a casting or forging concept to a machined and packaged part, Royal Engitech supports the sequence needed by OEM and export buyers.">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-metal">
          {capabilities.map((capability, index) => (
            <div key={capability.label} className="grid gap-4 border-b border-line p-6 last:border-b-0 md:grid-cols-[120px_260px_1fr] md:items-center">
              <span className="font-display text-4xl font-semibold text-brass">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold text-graphite">{capability.label}</h3>
              <p className="leading-7 text-smoke">{capability.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Products" title="Component categories for drawing-based manufacturing." intro="Core product families are organized for quick RFQ discovery, with catalog references preserved for buyer review.">
        <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-metal md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => (
            <Link key={product.id} href={`/products#${product.id}`} className="group min-h-72 border-b border-line p-5 transition hover:bg-paper md:border-r lg:[&:nth-child(4n)]:border-r-0">
              <div className="relative mb-5 h-32 overflow-hidden rounded-2xl bg-steel">
                <Image src={product.image} alt={`${product.title} manufactured by Royal Engitech`} width={420} height={260} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <product.icon className="mb-3 text-copper" size={24} />
              <h3 className="font-display text-xl font-semibold text-graphite">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-smoke">{product.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-porcelain" eyebrow="Quality process" title="Inspection and process control from RFQ to dispatch." intro="Royal Engitech positions quality as a working discipline: material planning, process monitoring, computerized measurement and export-aware packaging.">
        <div className="relative border-l border-brass/40 pl-6 lg:ml-8">
          {qualityProcess.map((step, index) => (
            <Reveal key={step.title} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[35px] grid h-14 w-14 place-items-center rounded-full border border-brass/30 bg-paper text-copper shadow-sm"><step.icon size={22} /></span>
              <div className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-graphite">{step.title}</h3>
                <p className="mt-3 leading-7 text-smoke">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries served" title="Application-led component manufacturing." intro="Royal Engitech supports multiple industrial sectors with parts that fit machinery, motion, fluid handling and repeat-production requirements.">
        <div className="divide-y divide-line overflow-hidden rounded-[2rem] border border-line bg-white shadow-metal">
          {industries.slice(0, 6).map((industry) => (
            <div key={industry.title} className="grid gap-5 p-6 md:grid-cols-[240px_1fr] md:items-center">
              <div className="flex items-center gap-3"><industry.icon className="text-copper" /><h3 className="font-display text-2xl font-semibold text-graphite">{industry.title}</h3></div>
              <p className="leading-7 text-smoke">{industry.text} Examples: {industry.examples.join(", ")}.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white" eyebrow="Export confidence" title="A practical supplier profile for international sourcing teams." intro="Clear communication, documentation readiness and repeat-production focus help buyers evaluate Royal Engitech as a long-term engineering supplier.">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3"><Image src="/images/quality-measurement-systems.jpg" alt="Quality measurement systems for precision inspection" width={900} height={520} className="h-full min-h-80 rounded-[1.5rem] object-cover" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {exportReadiness.map((item) => <Panel key={item.title} className="bg-white text-graphite"><item.icon className="mb-4 text-copper" /><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-3 text-smoke">{item.text}</p></Panel>)}
          </div>
        </div>
      </Section>

      <Section className="bg-brushed" title="Ready to review a component drawing or export requirement?" intro="Send drawings, material, tolerance, quantity and destination details. The team will review the most suitable manufacturing route and respond to your inquiry.">
        <div className="flex flex-col gap-4 sm:flex-row"><Button href="/contact">Start business inquiry</Button><Button href="/downloads/royal-engitech-catalog.pdf" variant="secondary"><Download className="mr-2" size={18}/>Download catalog</Button><Button href="/downloads/royal-engitech-iso-certificate-2024.pdf" variant="ghost"><FileCheck2 className="mr-2" size={18}/>ISO certificate</Button></div>
      </Section>
    </>
  );
}
