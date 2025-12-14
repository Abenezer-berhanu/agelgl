import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/profile.php?id=61581538504360",
    icon: FaFacebook,
    isActive: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/agelgl_digital_solutions/",
    icon: FaInstagram,
    isActive: true,
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@agelgl_digital_solutions",
    icon: FaTiktok,
    isActive: true,
  },
];

export const images = {
  logo: "/logo.png",
  landingPageLogo: "/logo_landing.png",
  services: "/services.png",
};

export const companyInfo = {
  name: "Agelgl Digital Solutions",
  email: "contact@agelgl.com",
  phone: "+251986190354",
  address: "Addis Ababa, Ethiopia",
  city: "Addis Ababa",
  state: "Addis Ababa",
};

export const navbarLinks = [
  {
    name: "Home",
    href: "/",
    isActive: true,
  },
  {
    name: "About",
    href: "/#about",
    isActive: true,
  },
  {
    name: "How we implement",
    href: "/#how-we-implement",
    isActive: true,
  },
  // Parent Category
  {
    name: "Services",
    href: "/#services", // This will be ignored in the UI logic in favor of the dropdown
    isActive: true,
    // Children added here
    children: [
      {
        name: "Mobile Development",
        href: "/#services-mobile-development",
        description: "iOS and Android apps tailored to your needs.",
        isActive: true,
      },
      {
        name: "Web Development",
        href: "/#services-web-development",
        description: "High performance web applications.",
        isActive: true,
      },
      {
        name: "Website Design (UI/UX)",
        href: "/#services-website-design",
        description: "User-centric interfaces and experiences.",
        isActive: true,
      },
      {
        name: "Graphics Solutions",
        href: "/#services-graphics-solutions",
        description: "Branding and visual identity.",
        isActive: true,
      },
      {
        name: "System Upgrade & Maintenance",
        href: "/#services-system-upgrade-maintenance",
        description: "Keeping your infrastructure secure.",
        isActive: true,
      },
    ],
  },
  {
    name: "Portfolio",
    href: "/#portfolio",
    isActive: true,
  },
  {
    name: "Trusted By",
    href: "/#trusted-by",
    isActive: false, // This will be hidden
  },
  {
    name: "Contact",
    href: "/#contact",
    isActive: true,
    isButton: true,
  },
];

export const keywords: string[] = [
  "software company for small business",
  "app development company",
  "website and mobile app developers",
  "custom software solutions for business",
  "business software development",
  "digital solutions for my business",
  "IT company for business",
  "website development company",
  "professional website for business",
  "company to build a business website",
  "small business website design",
  "website developers near me",
  "affordable website design",
  "mobile app development company",
  "app developers for startups",
  "build a mobile app for my business",
  "Android and iOS app developers",
  "how much does it cost to build an app",
  "app development services",
  "software for managing customers",
  "booking system for business",
  "inventory management software",
  "employee management software",
  "billing and invoicing software",
  "online ordering system for business",
  "CRM software for small business",
  "affordable software development company",
  "low cost app development",
  "best software company for small business",
  "software development cost",
  "app development price",
  "reliable software developers",
  "software company near me",
  "app developers in Ethiopia",
  "app developers in Ethiopia Addis Ababa",
  "local website developers",
  "IT services in Addis Ababa",
  "best app development company",
  "top software companies for startups",
  "website vs mobile app for business",
  "do I need an app or website for my business",
  "how can software help my business",
  "benefits of having a mobile app",
  "why my business needs a website",
  "digital transformation for small business",
];
