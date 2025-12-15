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
};

export const videos = {
  conceptVideo: "/concept_video.mp4",
  uiux: "/uiux_video.mp4",
  development: "/development_video.mp4",
  deployment: "/deployment_video.mp4",
};

export const companyInfo = {
  name: "Agelgl Digital Solutions",
  email: "contact@agelgl.com",
  phone: "+251986190354",
  address: "Addis Ababa, Ethiopia",
  city: "Addis Ababa",
  state: "Addis Ababa",
};

export const content = [
  {
    title: "Our Mission",
    description:
      "We are driven by a single purpose: to build Solution that accelerates your business, not complicates it. We focus on lean, scalable, and secure architecture, translating complex business challenges into elegant digital solutions that deliver measurable ROI.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src={images.mission}
          width={600}
          height={600}
          className="h-full w-full object-contain"
          alt="Our Mission"
        />
      </div>
    ),
  },
  {
    title: "The Core Team & Expertise",
    description:
      "Our team is a carefully curated blend of senior architects, seasoned developers, and dedicated Graphics and UX/UI designers. We specialize in modern frameworks and cloud infrastructure, ensuring your project is handled by specialists who live and breathe high-performance technology.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        {/* Placeholder: Replace with an image of your team, or a graphic representing expertise/tech stack */}
        <Image
          src={images.team}
          width={600}
          height={600}
          className="h-full w-full object-contain"
          alt="Technical expertise and core team"
        />
      </div>
    ),
  },
  {
    title: "Our Development Philosophy: Uptime & Scale",
    description:
      "We operate on principles of transparency, iteration, and absolute reliability. We prioritize comprehensive testing and DevOps automation to ensure the 'Maximum Uptime' we promise is delivered. We don't just build code; we build dependable systems ready for global scale.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src={images.development}
          width={600}
          height={600}
          className="h-full w-full object-contain"
          alt="Our Development Philosophy: Uptime & Scale"
        />
      </div>
    ),
  },
  {
    title: "Why Choose Our Custom Approach?",
    description:
      "Off-the-shelf solutions often fail to meet unique business demands. Our 'Offers Choice' promise means we tailor every feature and integration to fit your exact processes, eliminating bottlenecks, providing unparalleled flexibility, and safeguarding your long-term success.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src={images.whywe}
          width={600}
          height={600}
          className="h-full w-full object-contain"
          alt="Why Choose Our Custom Approach"
        />
      </div>
    ),
  },
];

export const implementationStepsData = [
  {
    title: "Concept",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          During this initial phase, we conduct thorough Discovery and Research
          to lay a precise foundation for the entire project. We perform
          in-depth Market and User Research to identify core needs, pain points,
          and competitive gaps. This process allows us to gather and define
          detailed technical and business Requirements, establish the exact
          project Scope, and develop a high-level conceptual outline of the
          solution. Finally, we create a definitive Project Plan and Timeline
          and assign all necessary project roles and responsibilities.
        </p>
        <div className="gap-4">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="none"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <source src={videos.conceptVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          We begin with Wireframing and Prototyping to visualize the complete
          user flow, interface structure, and user experience. Following client
          approval, we develop comprehensive Visual Designs and high-fidelity
          Assets that define the final look, feel, and brand identity of the
          software.
        </p>
        <div className="gap-4">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="none"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <source src={videos.uiux} type="video/mp4" />
          </video>
        </div>
      </div>
    ),
  },
  {
    title: "Development",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          In the Development and Implementation phase, we rapidly build the
          software, translating the finalized design and specifications into
          functional code. We utilize agile sprints for iterative development,
          writing, integrating, and rigorously testing the software in parallel.
          Quality assurance is continuous, ensuring that all issues and bugs are
          identified and resolved as they arise.
        </p>

        <div className="gap-4">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="none"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <source src={videos.development} type="video/mp4" />
          </video>
        </div>
      </div>
    ),
  },
  {
    title: "Testing & QA",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          The Quality Assurance (QA) Phase involves rigorous and multi-faceted
          testing to validate the solution against all functional and
          non-functional requirements. We perform stress, scalability, security,
          and integration testing to ensure the software is not only reliable
          under load but also secure against vulnerabilities. All identified
          defects and issues are meticulously documented and resolved until the
          system achieves optimal performance and stability.
        </p>

        <div className="gap-4">
          <Image
            src={images.testing}
            alt="startup template"
            width={600}
            height={600}
            className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Deployment & Go live",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          The Deployment and Launch Phase focuses on seamlessly migrating the
          validated solution into your production environment. This involves
          setting up and configuring all necessary cloud infrastructure
          components (servers, databases, networking), often managed through
          automated DevOps pipelines. We ensure the software is fully configured
          to meet your business{"'"}s specific operational requirements and is
          correctly integrated with all existing internal systems for a
          successful go-live.
        </p>
        <div className="gap-4">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="none"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <source src={videos.deployment} type="video/mp4" />
          </video>
        </div>
      </div>
    ),
  },
  {
    title: "Maintenance and Support",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm">
          Our commitment extends far beyond launch with a comprehensive
          Maintenance and Support framework. We provide continuous monitoring,
          performance optimization, and proactive system updates to guarantee
          long-term reliability and security. Our support includes rapid
          response to critical issues, bug fixes, and scheduled preventative
          maintenance, ensuring your software remains fast, secure, and aligned
          with evolving technology and business demands.
        </p>

        <div className="gap-4">
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="none"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          >
            <source src={videos.development} type="video/mp4" />
          </video>
        </div>
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
