import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AC, HVAC & Refrigeration | ACT Engineering" },
      { name: "description", content: "AC installation, repair, servicing, gas refilling, commercial HVAC, cold rooms and engineering support across Sri Lanka." },
      { property: "og:title", content: "Our Services — ACT Engineering" },
      { property: "og:description", content: "Complete AC, HVAC and refrigeration services for homes, businesses and industries." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <Layout>
      <section className="gradient-hero text-navy-foreground py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">Our Services</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Complete AC & HVAC Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">From a quick AC service to full commercial HVAC projects — we handle it all with engineering precision.</p>
        </div>
      </section>

      <section className="py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Card key={s.slug} className="group p-7 border-border hover:border-primary/40 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.description}</p>
                <Link to="/contact" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Request Service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-navy text-navy-foreground">
        <div className="w-full px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="opacity-90 text-lg mb-7">Send us a message — we'll inspect, advise and quote you honestly.</p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Book a Service</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
