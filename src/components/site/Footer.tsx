import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import logoDark from "@/assets/logo/logo-dark.png";

const SERVICES = [
  "AC Installation",
  "AC Repair",
  "AC Servicing",
  "Gas Refilling",
  "Maintenance Contracts",
  "Commercial HVAC",
  "Cold Room Service",
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="w-full px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Link to="/" className="inline-flex items-center mb-4 group">
              <img src={logoDark} alt="ACT Engineering" className="h-10 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-5">
              Professional air conditioning, HVAC, refrigeration and engineering services across Sri Lanka.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-base">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-base">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /><a href={SITE.phoneHref} className="hover:text-primary-glow">{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /><a href={`mailto:${SITE.email}`} className="hover:text-primary-glow">{SITE.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /><span>{SITE.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs opacity-70">
          <div>© {new Date().getFullYear()} ACT Engineering. All rights reserved.</div>
          <div>Built for reliable cooling across Sri Lanka.</div>
        </div>
      </div>
    </footer>
  );
}
