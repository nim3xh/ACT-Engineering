import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import logoLight from "@/assets/logo/logo-light.png";
import logoDark from "@/assets/logo/logo-dark.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-navy text-navy-foreground/90 text-xs">
        <div className="w-full px-4 sm:px-6 flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" /> {SITE.email}
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-navy-foreground/70">
            <MapPin className="h-3.5 w-3.5" /> {SITE.address}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-background border-b border-border shadow-soft">
        <div className="w-full px-4 sm:px-6">
          <div className="flex h-16 lg:h-[72px] items-center justify-between gap-4">
            <Link to="/" className="flex items-center group shrink-0">
              <img src={logoLight} alt="ACT Engineering" className="h-10 lg:h-12 w-auto object-contain dark:hidden group-hover:scale-105 transition-transform" />
              <img src={logoDark} alt="ACT Engineering" className="h-10 lg:h-12 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform" />
            </Link>

            <nav className="hidden lg:flex items-center h-full">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative h-full flex items-center px-5 text-sm font-semibold uppercase tracking-wide text-foreground/75 hover:text-primary transition-colors group"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-8 bg-primary transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
                <Link to="/contact">Book a Service</Link>
              </Button>
              <button
                className="lg:hidden p-2 text-navy"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden pb-4 border-t border-border pt-3 animate-fade-up">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-secondary"
                    activeProps={{ className: "bg-secondary text-primary" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="hero" className="mt-2 w-full">
                  <a href={SITE.phoneHref}>Call {SITE.phone}</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
