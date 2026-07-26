import {
  Wrench, Settings, Droplets, ShieldCheck, Building2, Snowflake, Zap, Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "ac-installation",
    title: "AC Installation",
    description: "Expert installation of split, inverter, cassette and ducted AC systems for homes and businesses.",
    icon: Hammer,
  },
  {
    slug: "ac-repair",
    title: "AC Repair",
    description: "Same-day diagnosis and repair for all major AC brands. Get cool again — fast.",
    icon: Wrench,
  },
  {
    slug: "ac-servicing",
    title: "AC Servicing & Maintenance",
    description: "Deep cleaning and tune-ups that improve cooling efficiency and extend unit lifespan.",
    icon: Settings,
  },
  {
    slug: "gas-refilling",
    title: "Gas Refilling",
    description: "Leak detection and refrigerant top-ups using genuine R32, R410A and R22 gas.",
    icon: Droplets,
  },
  {
    slug: "maintenance-contracts",
    title: "Maintenance Contracts",
    description: "Scheduled preventive maintenance plans tailored for offices, shops and homes.",
    icon: ShieldCheck,
  },
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC Solutions",
    description: "Design, supply and installation of central HVAC systems for buildings and factories.",
    icon: Building2,
  },
  {
    slug: "cold-room",
    title: "Cold Room & Refrigeration",
    description: "Walk-in cold rooms, freezers and commercial refrigeration setup and service.",
    icon: Snowflake,
  },
  {
    slug: "electrical",
    title: "Electrical & Engineering Support",
    description: "Wiring, breakers, dedicated power lines and engineering support for HVAC systems.",
    icon: Zap,
  },
];
