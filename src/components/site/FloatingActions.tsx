import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-whatsapp text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-40 animate-ping" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-40 h-14 w-14 rounded-full gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform sm:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
