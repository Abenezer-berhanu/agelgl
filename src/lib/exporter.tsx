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
  description:
    "Agelgl Digital Solutions is a company that provides digital solutions to businesses.",
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
