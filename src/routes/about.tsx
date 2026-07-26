import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ACT Engineering — HVAC Experts in Sri Lanka" },
      { name: "description", content: "Learn about ACT Engineering — a trusted Sri Lankan HVAC and air conditioning company serving residential, commercial and industrial clients." },
      { property: "og:title", content: "About ACT Engineering" },
      { property: "og:description", content: "Trusted HVAC engineering partner across Sri Lanka." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="gradient-hero text-navy-foreground py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">About Us</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Your Trusted HVAC Engineering Partner</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Quality, safety and long-term reliability — that's how we earn trust, one project at a time.</p>
        </div>
      </section>

      <section className="py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <img src={aboutImg} alt="ACT Engineering team" loading="lazy" className="rounded-3xl shadow-elegant w-full" />
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-5">Built on Engineering Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                ACT Engineering is a Sri Lankan air conditioning and HVAC company built on a simple promise: deliver every job to the standard we'd want in our own homes and businesses.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over a decade of hands-on experience, our team of qualified technicians has installed, serviced and maintained thousands of cooling systems — from single-room split units to full commercial HVAC projects.
              </p>
              <ul className="space-y-3">
                {["Licensed and insured technicians", "Genuine parts and refrigerants only", "Clear pricing with no surprises", "Service warranty on all work"].map((x) => (
                  <li key={x} className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="w-full px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", text: "Deliver dependable cooling and engineering solutions that protect your comfort, productivity and equipment." },
              { icon: Eye, title: "Our Vision", text: "To be Sri Lanka's most trusted HVAC engineering partner for homes, businesses and industries." },
              { icon: Award, title: "Our Values", text: "Honesty, technical excellence, safety and respect for every customer's home or workplace." },
            ].map((v) => (
              <div key={v.title} className="bg-card p-7 rounded-2xl border border-border shadow-soft">
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-5">Let's Get Your Cooling Sorted</h2>
          <p className="text-muted-foreground text-lg mb-8">Talk to our team today for a free quote or expert advice.</p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get in Touch</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
