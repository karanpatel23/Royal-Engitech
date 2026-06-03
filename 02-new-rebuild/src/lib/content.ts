import { Factory, Globe2, ShieldCheck, Settings, Wrench, Cog, Droplets, Car, Pill, Shirt, Gauge, PackageCheck } from "lucide-react";

export const company = {
  name: "Royal Engitech Pvt. Ltd.",
  tagline: "Manufacturer & Exporter of Precision Engineered Components and Assemblies",
  founded: "1965",
  certification: "ISO 9001:2015",
  address: "15, 16 & 17, Nimesh Estate, Nr. Amar Estate, Memco, Naroda Road, Ahmedabad – 380025, Gujarat, India",
  contactPerson: "Mr. Sanket Panchal (Sales Department)",
  phone: "+91-79-2220 0993 / 994",
  fax: "+91-79-2220 4284",
  emails: ["sales@royalengitech.com", "info@royalengitech.com"],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality-infrastructure", label: "Quality" },
  { href: "/export-global-presence", label: "Export" },
  { href: "/contact", label: "Contact" },
];

export const productCategories = [
  {
    id: "cnc-turned-parts",
    title: "CNC Turned Parts",
    summary: "Precision CNC turned components from cast iron, mild steel, alloy steel, non-ferrous metals and forged materials.",
    details: "Turning capacity up to 300 mm diameter, 900 mm length, and components up to 500 mm wide by 400 mm thick.",
    image: "/images/product-1.jpg",
    icon: Settings,
  },
  {
    id: "aluminum-parts",
    title: "Aluminum Parts",
    summary: "Gravity die casting, pressure die casting, machined aluminum components and replacement ATC parts.",
    details: "Pressure die casting capacity up to 3.000 kgs with die-making and post-casting machining support.",
    image: "/images/product-20.jpg",
    icon: Factory,
  },
  {
    id: "non-ferrous-castings",
    title: "Non-Ferrous Castings & Machined Parts",
    summary: "Pattern development, casting, machining and accuracy-driven finishing for non-ferrous components.",
    details: "In-house pattern shop and CNC machine shop help reduce machining tolerance, time and cost.",
    image: "/images/product-60.jpg",
    icon: Gauge,
  },
  {
    id: "cast-iron-castings",
    title: "Cast Iron Castings & Machined Parts",
    summary: "Ferrous castings with in-house foundry, pattern capability and CNC machining for customer drawings.",
    details: "A complete machine shop supports high-accuracy cast iron components and assemblies.",
    image: "/images/product-100.jpg",
    icon: Cog,
  },
  {
    id: "sheet-metal-parts",
    title: "Sheet Metal Parts",
    summary: "Cutting, pressing, blanking, curling, bending, slitting, deep drawing and welded structures.",
    details: "CNC laser cutting capacity of 1500 x 3000 x 12 mm and bending capacity of 3000 x 8 mm thickness.",
    image: "/images/product-124.png",
    icon: PackageCheck,
  },
  {
    id: "gears-pulleys",
    title: "Rack, Pinion, Gears & Timing Pulleys",
    summary: "Hardened gears and pulleys for gear boxes, textile machinery and pharmaceutical applications.",
    details: "Gear manufacturing up to 6 module or per customer requirement.",
    image: "/images/product-130.jpg",
    icon: Wrench,
  },
  {
    id: "ground-shafts",
    title: "Ground Shafts",
    summary: "Ground shafts manufactured for precision motion, transmission and industrial machinery assemblies.",
    details: "Diameter up to 100 mm and length up to 6000 mm.",
    image: "/images/industrial-components.jpg",
    icon: Gauge,
  },
];

export const industries = [
  { title: "Textile Machinery", icon: Shirt, text: "Precision parts and assemblies for textile machinery and production systems." },
  { title: "Power Transmission", icon: Cog, text: "Gears, pulleys, shafts and engineered transmission components." },
  { title: "Water Pumps", icon: Droplets, text: "Machined and cast components supporting pump and fluid movement equipment." },
  { title: "Valves", icon: Settings, text: "Industrial valve components, non-return valve assemblies and custom hardware." },
  { title: "Automobile", icon: Car, text: "High-repeatability parts for automotive and industrial mobility applications." },
  { title: "Pharmaceutical", icon: Pill, text: "Precision engineered components for demanding pharmaceutical equipment." },
];

export const capabilities = [
  "Precision CNC machining and turning",
  "VMC machining with 4th-axis capability",
  "CNC laser cutting, press brake and fabrication",
  "Ferrous and non-ferrous foundry support",
  "Pattern shop, tooling and fixtures",
  "CAD/CAM support with Siemens Solid Edge/NX",
];

export const qualityPoints = [
  "Inquiry-to-dispatch process discipline",
  "Raw material procurement and traceability focus",
  "Inspection with computerized measuring instruments",
  "Packaging, certification and after-sales service",
  "International quality norms and export documentation readiness",
];

export const redirects = [
  ["/index.html", "/"],
  ["/about-us.html", "/about"],
  ["/products.html", "/products"],
  ["/contact-us.html", "/contact"],
  ["/inquiry.php.html", "/contact"],
  ["/inquiry.php", "/contact"],
  ["/infrastructure.html", "/quality-infrastructure"],
  ["/work-shop.html", "/quality-infrastructure"],
  ["/fabrication-shop.html", "/quality-infrastructure"],
  ["/foundry-shop.html", "/quality-infrastructure"],
  ["/cnc-turned-parts.html", "/products#cnc-turned-parts"],
  ["/aluminum-parts.html", "/products#aluminum-parts"],
  ["/non-ferrous-castings-and-machined-parts.html", "/products#non-ferrous-castings"],
  ["/cast-iron-castings-and-machined-parts.html", "/products#cast-iron-castings"],
  ["/sheet-metal-parts.html", "/products#sheet-metal-parts"],
  ["/gears-and-timing-pulleys.html", "/products#gears-pulleys"],
  ["/ground-shafts.html", "/products#ground-shafts"],
];
