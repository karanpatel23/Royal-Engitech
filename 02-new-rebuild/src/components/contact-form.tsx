"use client";

import { Loader2, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { contactSchema, type ContactFormInput } from "@/lib/contact-schema";
import { productCategories } from "@/lib/content";

type ApiResponse = { ok: boolean; message: string; errors?: Partial<Record<keyof ContactFormInput, string[]>> };

type FormState = ContactFormInput;

const emptyForm: FormState = { name: "", companyName: "", email: "", phone: "", country: "", interest: "", message: "", website: "" };

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultInterest = searchParams.get("interest") ?? "";
  const [form, setForm] = useState<FormState>({ ...emptyForm, interest: defaultInterest });
  const [errors, setErrors] = useState<ApiResponse["errors"]>({});
  const [status, setStatus] = useState<ApiResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const options = useMemo(() => productCategories.map((item) => item.title), []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setErrors({});

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      const data = (await response.json()) as ApiResponse;
      setStatus(data);
      if (data.errors) setErrors(data.errors);
      if (data.ok) setForm({ ...emptyForm, interest: defaultInterest });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3 text-white outline-none transition placeholder:text-mist/60 focus:border-copper focus:ring-2 focus:ring-copper/30";
  const labelClass = "text-sm font-semibold text-platinum";
  const errorText = (name: keyof ContactFormInput) => errors?.[name]?.[0] ? <span className="mt-1 block text-sm text-amberline">{errors[name]?.[0]}</span> : null;

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-white/10 bg-white/[.045] p-6 shadow-premium backdrop-blur md:p-8" noValidate>
      <div className="hidden" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={form.website ?? ""} onChange={(event) => update("website", event.target.value)} /></label></div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>Name *<input className={fieldClass} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your full name" />{errorText("name")}</label>
        <label className={labelClass}>Company name *<input className={fieldClass} value={form.companyName} onChange={(event) => update("companyName", event.target.value)} placeholder="Company / organization" />{errorText("companyName")}</label>
        <label className={labelClass}>Email *<input className={fieldClass} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="name@company.com" type="email" />{errorText("email")}</label>
        <label className={labelClass}>Phone *<input className={fieldClass} value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Country code + number" />{errorText("phone")}</label>
        <label className={labelClass}>Country *<input className={fieldClass} value={form.country} onChange={(event) => update("country", event.target.value)} placeholder="Country" />{errorText("country")}</label>
        <label className={labelClass}>Product / service interest *<select className={fieldClass} value={form.interest} onChange={(event) => update("interest", event.target.value)}><option value="">Select interest</option>{options.map((option)=><option className="bg-graphite" value={option} key={option}>{option}</option>)}<option className="bg-graphite" value="Custom precision component inquiry">Custom precision component inquiry</option></select>{errorText("interest")}</label>
      </div>
      <label className={`${labelClass} mt-5 block`}>Message *<textarea className={`${fieldClass} min-h-36`} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Share drawings, material, quantity, tolerance, export destination, timeline or questions." />{errorText("message")}</label>
      {status && <div className={`mt-5 rounded-2xl border p-4 text-sm ${status.ok ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-amberline/40 bg-amberline/10 text-amberline"}`}>{status.message}</div>}
      <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center justify-center rounded-full bg-copper px-7 py-3 font-semibold text-white transition hover:bg-amberline hover:text-graphite disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <Loader2 className="mr-2 animate-spin" size={18}/> : <Send className="mr-2" size={18}/>} Submit inquiry
      </button>
      <p className="mt-4 text-xs leading-5 text-mist">Submissions are validated on the server. No secrets are stored in this frontend. Configure SMTP and optional database persistence using environment variables.</p>
    </form>
  );
}
