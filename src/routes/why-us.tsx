import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose ACT Engineering — HVAC Sri Lanka" },
      { name: "description", content: "Qualified technicians, transparent pricing, fast response, genuine parts and island-wide service. Here's why customers trust ACT Engineering." },
      { property: "og:title", content: "Why Choose ACT Engineering" },
      { property: "og:description", content: "Reasons clients trust us for AC, HVAC and refrigeration services." },
    ],
  }),
  component: WhyUs,
});

const REASONS = [
  { title: "Qualified Technicians", text: "Factory-trained engineers with proven hands-on experience across all major AC brands." },
  { title: "Transparent Pricing", text: "Clear quotes upfront. No hidden charges, no surprises after the work is done." },
  { title: "Fast Response Time", text: "Same-day service for most areas. We treat AC breakdowns as the urgent issue they are." },
  { title: "Genuine Spare Parts", text: "Only original refrigerants and OEM parts — for safety, performance and longer service life." },
  { title: "Clean & Safe Work", text: "We protect your space, follow safety protocols and clean up after every job." },
  { title: "Residential to Industrial", text: "From a single split AC to full HVAC systems and cold rooms — the same standard of care." },
  { title: "Maintenance Plans", text: "Tailored preventive maintenance contracts to keep your systems efficient year-round." },
];

function WhyUs() {
  return (
    <Layout>
      <section className="gradient-hero text-navy-foreground py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">Why Choose Us</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Engineering You Can Rely On</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Seven reasons customers across Sri Lanka choose ACT Engineering for their cooling needs.</p>
        </div>
      </section>

      <section className="py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <img src={aboutImg} alt="HVAC engineers" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
            </div>
            <div className="space-y-5">
              {REASONS.map((r) => (
                <div key={r.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all">
                  <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy mb-1">{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-navy text-navy-foreground text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience the Difference</h2>
          <p className="opacity-90 text-lg mb-7">Book a service today and see what professional HVAC work feels like.</p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Book a Service</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
