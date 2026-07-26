import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ACT Engineering HVAC Sri Lanka" },
      { name: "description", content: "Recent AC installation, HVAC and cold room projects completed by ACT Engineering across Sri Lanka." },
      { property: "og:title", content: "Our Projects — ACT Engineering" },
      { property: "og:description", content: "A selection of residential, commercial and industrial cooling projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Layout>
      <section className="gradient-hero text-navy-foreground py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">Projects</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Our Recent Work</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">A snapshot of cooling and HVAC projects we've delivered for homes, offices and businesses.</p>
        </div>
      </section>

      <section className="py-10 lg:py-10">
        <div className="w-full px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">{p.category}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-secondary text-center">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Have a Project in Mind?</h2>
          <p className="text-muted-foreground text-lg mb-7">We design, supply and install cooling systems of every scale.</p>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Discuss Your Project</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
