import { OptimizedVideo } from "@/components/OptimizedVideo";
import Image from "next/image";
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
  mission: "/mission.png",
  team: "/team.png",
  whywe: "/whywe.png",
  testing: "/testing.png",
  development: "/development.png",
  webDevelopment: "/web_development.png",
  mobileDevelopment: "/mobile_development.png",
  uiuxDesign: "/ui-ux_design.png",
  graphicsDesign: "/graphics_design.png",
  maintenance: "/maintenance.png",
};

export const videos = {
  conceptVideo: "/concept_video.mp4",
  uiux: "/uiux_video.mp4",
  development: "/development_video.mp4",
  deployment: "/deployment_video.mp4",
  maintenance: "/maintenance_video.mp4",
  testing: "/testing_video.mp4",
  mission: "/mission_video.mp4",
  team: "/team_video.mp4",
  aboutUsDevelopment: "/about_development_video.mp4",
  whychooseUs: "/choseus_video.mp4",
};

export const companyInfo = {
  name: "Agelgl Digital Solutions",
  email: "contact@agelgl.com",
  phone: "+251986190354",
  address: "Addis Ababa, Ethiopia",
  city: "Addis Ababa",
  state: "Addis Ababa",
};

export const aboutUsContent = [
  {
    title: "Our Mission",
    description:
      "We are driven by a single purpose: to build Solution that accelerates your business, not complicates it. We focus on lean, scalable, and secure architecture, translating complex business challenges into elegant digital solutions that deliver measurable ROI.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <OptimizedVideo mp4Src={videos.mission} />
      </div>
    ),
  },
  {
    title: "The Core Team & Expertise",
    description:
      "Our team is a carefully curated blend of senior architects, seasoned developers, and dedicated Graphics and UX/UI designers. We specialize in modern frameworks and cloud infrastructure, ensuring your project is handled by specialists who live and breathe high-performance technology.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <OptimizedVideo mp4Src={videos.team} />
      </div>
    ),
  },
  {
    title: "Our Development Philosophy: Uptime & Scale",
    description:
      "We operate on principles of transparency, iteration, and absolute reliability. We prioritize comprehensive testing and DevOps automation to ensure the 'Maximum Uptime' we promise is delivered. We don't just build code; we build dependable systems ready for global scale.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <OptimizedVideo mp4Src={videos.aboutUsDevelopment} />
      </div>
    ),
  },
  {
    title: "Why Choose Our Custom Approach?",
    description:
      "Off-the-shelf solutions often fail to meet unique business demands. Our 'Offers Choice' promise means we tailor every feature and integration to fit your exact processes, eliminating bottlenecks, providing unparalleled flexibility, and safeguarding your long-term success.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <OptimizedVideo mp4Src={videos.whychooseUs} />
      </div>
    ),
  },
];

export const implementationStepsData = [
  {
    title: "Concept",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg text-neutral-800 dark:text-neutral-200">
          During this initial phase, we conduct thorough Discovery and Research
          to lay a precise foundation for the entire project.
        </p>

        <OptimizedVideo mp4Src={videos.conceptVideo} />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg text-neutral-800 dark:text-neutral-200">
          We begin with Wireframing and Prototyping to visualize the complete
          user experience.
        </p>

        <OptimizedVideo mp4Src={videos.uiux} />
      </div>
    ),
  },
  {
    title: "Development",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          We translate approved designs into production-ready software using
          agile sprints.
        </p>

        <OptimizedVideo mp4Src={videos.development} />
      </div>
    ),
  },
  {
    title: "Testing & QA",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          Rigorous testing ensures stability, performance, and security.
        </p>

        <OptimizedVideo mp4Src={videos.testing} />
      </div>
    ),
  },
  {
    title: "Deployment & Go Live",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          We deploy and configure production infrastructure for seamless launch.
        </p>

        <OptimizedVideo mp4Src={videos.deployment} />
      </div>
    ),
  },
  {
    title: "Maintenance & Support",
    content: (
      <div>
        <p className="mb-8 text-sm md:text-lg">
          Continuous monitoring and proactive maintenance keep systems reliable.
        </p>

        <OptimizedVideo mp4Src={videos.maintenance} />
      </div>
    ),
  },
];

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
        name: "Website / App Design (UI/UX)",
        href: "/#services-ui-ux-design",
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

export const ourServices = [
  {
    title: "Mobile Development",
    value: "Mobile Development",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200">
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-[600px] border border-purple-100">
          <p className="text-3xl md:text-7xl bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
            Mobile <br /> Development
          </p>
          <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
            We build high-performance iOS and Android applications tailored
            specifically to your business needs, ensuring a seamless user
            experience with modern features and robust security protocols.
          </p>
        </div>
        <Image
          src={images.mobileDevelopment}
          alt="Mobile Development"
          width={800}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
        />
      </div>
    ),
  },
  {
    title: "Website Development",
    value: "Website Development",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200">
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-[600px] border border-purple-100">
          <p className="text-3xl md:text-7xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
            Website <br /> Development
          </p>
          <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
            Our team creates fast, responsive, and SEO-optimized web
            applications that scale with your growth, utilizing the latest
            technologies to deliver a powerful digital presence for your brand.
          </p>
        </div>
        <Image
          src={images.webDevelopment}
          alt="Web Development"
          width={800}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
        />
      </div>
    ),
  },
  {
    title: "Website / App Design (UI/UX)",
    value: "UI/UX",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200">
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-[600px] border border-purple-100">
          <p className="text-3xl md:text-7xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
            UI / UX <br /> Design
          </p>
          <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
            We focus on user-centric design principles to create intuitive
            interfaces and engaging experiences, blending aesthetic beauty with
            functional simplicity to keep your users coming back.
          </p>
        </div>
        <Image
          src={images.uiuxDesign}
          alt="UI/UX Design"
          width={800}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
        />
      </div>
    ),
  },
  {
    title: "Graphics Solutions",
    value: "Graphics Solutions",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200">
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-[600px] border border-purple-100">
          <p className="text-3xl md:text-7xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
            Graphics <br /> Solutions
          </p>
          <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
            Elevate your brand with professional visual identity services,
            including custom logos, business cards, and high-impact marketing
            posters that effectively communicate your company{"'"}s values.
          </p>
        </div>
        <Image
          src={images.graphicsDesign}
          alt="Graphics Solutions"
          width={800}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
        />
      </div>
    ),
  },
  {
    title: "System Upgrade & Maintenance",
    value: "Maintenance",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl border-2 border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 via-violet-100 to-purple-200">
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-fit ml-auto mt-auto p-8 rounded-xl shadow-xl max-w-[600px] border border-purple-100">
          <p className="text-3xl md:text-7xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-end font-bold leading-tight">
            System <br /> Maintenance
          </p>
          <p className="text-gray-700 text-end mt-4 leading-relaxed text-base">
            We provide comprehensive system audits, regular software updates,
            and proactive security maintenance to ensure your digital
            infrastructure stays secure, efficient, and downtime-free.
          </p>
        </div>
        <Image
          src={images.maintenance}
          alt="System Upgrade & Maintenance"
          width={800}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover left-0 top-0 opacity-90"
        />
      </div>
    ),
  },
];
