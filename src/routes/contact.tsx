import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ACT Engineering — Book AC & HVAC Service" },
      { name: "description", content: "Book an AC or HVAC service with ACT Engineering. Call, WhatsApp, email or send us a message — we respond fast across Sri Lanka." },
      { property: "og:title", content: "Contact ACT Engineering" },
      { property: "og:description", content: "Get in touch to book a service or request a quote." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  service: z.string().trim().min(2, "Please select a service").max(100),
  location: z.string().trim().min(2, "Please enter your location").max(100),
  message: z.string().trim().max(1000).optional(),
});

const SERVICE_OPTIONS = [
  "AC Installation", "AC Repair", "AC Servicing", "Gas Refilling",
  "Maintenance Contract", "Commercial HVAC", "Cold Room Service", "Other",
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    
    const text = `*New Service Request*
*Name:* ${parsed.data.name}
*Phone:* ${parsed.data.phone}
*Service:* ${parsed.data.service}
*Location:* ${parsed.data.location}
*Message:* ${parsed.data.message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    
    // Give a brief submitting state, then redirect
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Redirecting to WhatsApp...");
      window.open(whatsappUrl, '_blank');
      form.reset();
    }, 500);
  };

  return (
    <Layout>
      <section className="gradient-hero text-navy-foreground py-12 lg:py-24">
        <div className="w-full px-4 sm:px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-primary-glow text-xs font-semibold mb-4 tracking-wide uppercase">Contact</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Let's Talk Cooling</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Book a service, request a quote or just ask a question — we respond fast.</p>
        </div>
      </section>

      <section className="py-10 lg:py-24">
        <div className="w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <a href={SITE.phoneHref} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                <div><div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Call Us</div><div className="font-display font-bold text-navy text-lg">{SITE.phone}</div></div>
              </a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all">
                <div className="h-11 w-11 rounded-xl bg-whatsapp flex items-center justify-center shrink-0"><MessageCircle className="h-5 w-5 text-white" /></div>
                <div><div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">WhatsApp</div><div className="font-display font-bold text-navy text-lg">Chat Now</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-soft transition-all">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                <div><div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Email</div><div className="font-display font-bold text-navy text-lg break-all">{SITE.email}</div></div>
              </a>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
                <div><div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Address</div><div className="font-display font-bold text-navy">{SITE.address}</div></div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-video bg-secondary">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81325203723!2d79.82118269726562!3d6.9270785999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl border border-border shadow-elegant p-6 sm:p-9">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full gradient-primary mx-auto flex items-center justify-center shadow-glow mb-5">
                      <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Message Received</h3>
                    <p className="text-muted-foreground mb-6">Thanks! Our team will contact you shortly.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-2">Book a Service</h2>
                    <p className="text-muted-foreground mb-7">Fill the form and we'll get back to you fast.</p>
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" name="name" placeholder="Your name" required maxLength={100} />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="07X XXX XXXX" required maxLength={20} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="service">Service Needed</Label>
                          <select
                            id="service" name="service" required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select a service</option>
                            {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" name="location" placeholder="City / Area" required maxLength={100} />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message">Message (optional)</Label>
                        <Textarea id="message" name="message" placeholder="Tell us about the issue or job..." rows={5} maxLength={1000} />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                        {submitting ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
