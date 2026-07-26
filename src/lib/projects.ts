import projectHome from "@/assets/project-home.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectColdroom from "@/assets/project-coldroom.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

export const PROJECTS = [
  { title: "Home AC Installation", category: "Residential", image: projectHome, description: "Inverter split unit installation in a Colombo apartment with concealed piping." },
  { title: "Office AC Maintenance", category: "Commercial", image: projectOffice, description: "Quarterly maintenance contract for ceiling cassette units across an open-plan office." },
  { title: "Commercial HVAC Setup", category: "Commercial", image: projectCommercial, description: "Full ducted HVAC design, supply and installation for a 3-floor retail building." },
  { title: "Cold Room Service", category: "Industrial", image: projectColdroom, description: "Refrigeration system overhaul for a food-grade walk-in cold room." },
  { title: "Industrial Cooling Support", category: "Industrial", image: projectIndustrial, description: "Outdoor chiller installation and electrical support for a factory facility." },
  { title: "Restaurant Kitchen AC", category: "Hospitality", image: projectRestaurant, description: "Kitchen-grade AC servicing and grease-resistant filter replacement." },
];
