import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar, Clock, Users, MapPin, ShieldCheck, ArrowRight, CheckCircle2, Search, ClipboardList, Wrench, BadgeCheck, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-hvac.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACT Engineering" },
      { name: "description", content: "Professional AC installation, repair, servicing, gas refilling and commercial HVAC solutions across Sri Lanka. Same-day service by experienced technicians." },
      { property: "og:title", content: "ACT Engineering" },
      { property: "og:description", content: "Reliable installation, repair, maintenance and commercial cooling solutions." },
    ],
  }),
  component: Home,
});

const TRUST_BADGES = [
  { icon: Calendar, label: "Same-Day Service" },
  { icon: Users, label: "Experienced Technicians" },
  { icon: ShieldCheck, label: "Residential & Commercial" },
  { icon: MapPin, label: "Island-Wide Support" },
];

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Completed Jobs" },
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "Customer Focus" },
];

const PROCESS = [
  { icon: Phone, title: "Contact Us", desc: "Call, WhatsApp or fill the form. We respond fast." },
  { icon: Search, title: "Inspection & Quotation", desc: "On-site assessment and a transparent, no-obligation quote." },
  { icon: Wrench, title: "Professional Service", desc: "Qualified technicians complete the job cleanly and safely." },
  { icon: BadgeCheck, title: "Final Testing & Support", desc: "We test, hand over and support you with after-service care." },
];

const REASONS = [
  "Qualified, factory-trained technicians",
  "Transparent, upfront pricing — no hidden fees",
  "Fast response, often same-day service",
  "Genuine spare parts and refrigerants",
  "Clean, safe and respectful work standards",
  "Residential, commercial and industrial expertise",
  "Tailored maintenance plans available",
];

const TESTIMONIALS = [
  { name: "Nadeesha P.", role: "Homeowner, Colombo", text: "Quick response and very neat installation. They explained everything clearly and the AC has been running perfectly." },
  { name: "Asanka Perera", role: "Restaurant Owner, Negombo", text: "ACT services all our kitchen units monthly. Reliable, professional and reasonably priced. Highly recommended." },
  { name: "Roshan F.", role: "Facilities Manager", text: "We use ACT for our entire office HVAC contract. Their team is responsive and the technicians are genuinely skilled." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center overflow-hidden gradient-hero text-navy-foreground perspective-container">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        </div>
        <div className="relative w-full px-4 sm:px-6 py-12 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium mb-6">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Available Island-Wide • Sri Lanka
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] mb-6">
                Professional AC & HVAC Engineering Services in <span className="text-gradient">Sri Lanka</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-xl leading-relaxed">
                Reliable installation, repair, maintenance and commercial cooling solutions by experienced technicians.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Book a Service <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <a href={SITE.phoneHref}><Phone className="h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                {TRUST_BADGES.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 backdrop-blur border border-white/15">
                    <b.icon className="h-4 w-4 text-primary-glow shrink-0" />
                    <span className="text-xs font-medium leading-tight">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative">
                <div className="absolute -inset-4 gradient-primary opacity-30 blur-3xl rounded-3xl" />
                <img src={heroImg} alt="HVAC technician servicing AC unit" width={1600} height={1200} className="relative rounded-3xl shadow-3d transform-3d hover:rotate-x-2 hover:-rotate-y-2 transition-transform duration-500" />
                <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-2xl p-4 shadow-elegant border border-border max-w-[220px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}</div>
                    <span className="text-xs font-semibold">4.9/5</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Trusted by 500+ homes & businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center py-10 lg:py-10 bg-background perspective-container">
        <div className="w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img src={aboutImg} alt="ACT Engineering team" loading="lazy" width={1024} height={1024} className="rounded-3xl shadow-3d transform-3d hover:rotate-y-2 hover:-translate-y-1 transition-all duration-500 w-full" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold mb-4 tracking-wide uppercase">About Us</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-5">Your Trusted HVAC Engineering Partner</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                ACT Engineering delivers professional air conditioning, HVAC, refrigeration and engineering services with a focus on quality, safety and long-term reliability. We support homes, offices, shops, restaurants, factories and commercial buildings across Sri Lanka.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {STATS.map((s) => (
                  <div key={s.label} className="p-5 rounded-2xl bg-secondary border border-border">
                    <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{s.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
              <Button asChild variant="navy" size="lg">
                <Link to="/about">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10 lg:py-10 gradient-subtle">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold mb-4 tracking-wide uppercase">Our Services</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4">Complete Cooling & Engineering Services</h2>
            <p className="text-muted-foreground text-lg">From a single split AC service to full commercial HVAC projects — we handle it all.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Card key={s.slug} className="group p-6 border-border hover:border-primary/40 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card shadow-3d transform-3d hover:-translate-y-2 hover:rotate-x-2 hover:shadow-3d-hover duration-500" animate-fade-up style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <Link to="/contact" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Request Service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center py-10 lg:py-10 bg-background perspective-container">
        <div className="w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold mb-4 tracking-wide uppercase">Why Choose Us</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-5">Why Customers Trust ACT Engineering</h2>
              <p className="text-muted-foreground text-lg mb-8">We combine technical expertise, genuine parts and customer-first service to deliver cooling that lasts.</p>
              <ul className="space-y-3.5">
                {REASONS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-6 gradient-primary opacity-15 blur-3xl rounded-full" />
              <img src={aboutImg} alt="Engineers at work" loading="lazy" className="relative rounded-3xl shadow-elegant w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 lg:py-10 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary opacity-20 blur-3xl rounded-full" />
        <div className="w-full px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">Our Process</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Simple Service Process</h2>
            <p className="opacity-80 text-lg">From first call to final handover — clear, professional, hassle-free.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="relative p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-primary-glow/50 transition-all glass-3d shadow-3d transform-3d hover:-translate-y-2 hover:rotate-x-2 duration-500" animate-zoom-in style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full gradient-primary flex items-center justify-center font-bold text-sm shadow-glow">
                  {i + 1}
                </div>
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <p.icon className="h-6 w-6 text-primary-glow" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-10 lg:py-10 gradient-subtle">
        <div className="w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold mb-4 tracking-wide uppercase">Our Projects</div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy">Recent Work Across Sri Lanka</h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View All Projects <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-3d transform-3d hover:shadow-3d-hover hover:-translate-y-2 hover:rotate-x-2 transition-all duration-500 animate-fade-up style={{ animationDelay: `${i * 100}ms` }}">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">{p.category}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center py-10 lg:py-10 bg-background perspective-container">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold mb-4 tracking-wide uppercase">Testimonials</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Card key={t.name} className="p-7 bg-card border-border shadow-3d transform-3d hover:shadow-3d-hover hover:-translate-y-1 transition-all duration-500 animate-fade-in style={{ animationDelay: `${i * 150}ms` }}">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                <p className="text-foreground leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center py-10 bg-secondary border-y border-border perspective-container">
        <div className="w-full px-4 sm:px-6 text-center">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3">Service Areas</h2>
          <p className="text-muted-foreground text-lg">
            We provide services across <span className="font-semibold text-navy">Sri Lanka</span>, with fast response based on location. Transport charges may apply for distant areas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[100dvh] py-12 md:py-20 flex flex-col justify-center py-12 gradient-hero text-navy-foreground perspective-container">
        <div className="w-full px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Ready for Reliable Cooling?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Book a service today — our technicians are ready to help.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Book a Service</Link></Button>
            <Button asChild variant="whatsapp" size="lg"><a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
