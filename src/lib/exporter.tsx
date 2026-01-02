import { OptimizedVideo } from "@/components/OptimizedVideo";
import { ServiceCard } from "@/components/services/ServiceCard";
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

export const icons = [
  { src: "/icons/figma.png", class: "left-bottom" },
  { src: "/icons/pen-tool.png", class: "left-1" },
  { src: "/icons/photoshop.png", class: "left-2" },
  { src: "/icons/illustrator.png", class: "left-top" },
  { src: "/icons/programming.png", class: "top-left" },
  { src: "/icons/vscode.png", class: "top-right" },
  { src: "/icons/canva.png", class: "right-top" },
  { src: "/icons/mac.png", class: "right-2" },
  { src: "/icons/android.png", class: "right-1" },
  { src: "/icons/playstore.png", class: "right-bottom" },
];
export const images = {
  logo: "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766168390/Black_White_Simple_Bold_Elegant_Feminine_Fashion_Boutique_Logo_ujptw7.png",
  webDevelopment:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/c_scale,w_996/v1766166798/web_development_k8hhps.png",
  services:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766169020/services_ncxeqm.png",
  mobileDevelopment:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/e_improve,e_sharpen/v1766166780/mobile_development_romns5.png",
  uiuxDesign:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766166779/ui-ux_design_v35vp0.webp",
  graphicsDesign:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766166733/graphics_design_uxieuy.webp",
  maintenance:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766166766/maintenance_zkvn5v.avif",
  easycarrent:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/c_fit,w_743/v1766166760/easycarrent_qdclf0.png",
  aycc: "https://res.cloudinary.com/dg6ck04nm/image/upload/c_scale,w_1000/v1766166794/aycc_zu0cnl.png",
  adventureHub:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/c_scale,w_1000/v1766166778/adventure_hub_uk2ovf.png",
  instajobs:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766166751/instajobs_k2k0ca.png",
  blakcup:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766167679/blakcup_slq0ut.jpg",
  intuativeLms:
    "https://res.cloudinary.com/dg6ck04nm/image/upload/v1766166748/intuative_lms_zltwmv.png",
};

export const videos = {
  conceptVideo:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766404942/Concept_Video_Jfdsrj_rg3gzx.mp4",
  uiux: "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766249250/Uiux_Video2_l62bay.mp4",
  development:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766404754/Development_bbfmdy.mp4",
  deployment:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766404503/Deployment_k86ojj.mp4",
  maintenance:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766153202/maintenance_video_n3xug0.mp4",
  testing:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766153202/testing_video_wpy18v.mp4",
  mission:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766153209/mission_video_lf66nq.mp4",
  team: "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766153202/team_video_k8ogpq.mp4",
  aboutUsDevelopment:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766404384/About_Development_Video_Gvzsvm_stir5y.mp4",
  whychooseUs:
    "https://res.cloudinary.com/dg6ck04nm/video/upload/v1766405293/Choseus_Video_mygupe.mp4",
};

export const companyInfo = {
  name: "Agelgl Digital Solutions",
  email: "contact@agelgl.com",
  phone: "+251986190354",
  phone2: "+251954704213",
  address: "Bole, Addis Ababa, Ethiopia",
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

        <OptimizedVideo isServices={true} mp4Src={videos.conceptVideo} />
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

        <OptimizedVideo isServices={true} mp4Src={videos.uiux} />
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

        <OptimizedVideo isServices={true} mp4Src={videos.development} />
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

        <OptimizedVideo isServices={true} mp4Src={videos.testing} />
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

        <OptimizedVideo isServices={true} mp4Src={videos.deployment} />
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

        <OptimizedVideo isServices={true} mp4Src={videos.maintenance} />
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
      <ServiceCard
        id="services-mobile-development"
        title={
          <>
            Mobile <br /> Development
          </>
        }
        imageSrc={images.mobileDevelopment}
        description="We engineer high-performance iOS and Android applications tailored to specific business needs, ensuring a seamless user experience through modern features and robust security protocols."
      />
    ),
  },
  {
    title: "Website Development",
    value: "Website Development",
    content: (
      <ServiceCard
        id="services-web-development"
        title={
          <>
            Website <br /> Development
          </>
        }
        imageSrc={images.webDevelopment}
        description="Our team architected fast, responsive, and SEO-optimized web applications that scale with your growth, utilizing the latest technologies to deliver a powerful digital presence for your brand."
      />
    ),
  },
  {
    title: "Website / App Design (UI/UX)",
    value: "UI/UX",
    content: (
      <ServiceCard
        id="services-ui-ux-design"
        title={
          <>
            UI / UX <br /> Design
          </>
        }
        imageSrc={images.uiuxDesign}
        description="We focus on user-centric design principles to create intuitive interfaces and engaging experiences, blending aesthetic beauty with functional simplicity to maximize user retention."
      />
    ),
  },
  {
    title: "Graphics Solutions",
    value: "Graphics Solutions",
    content: (
      <ServiceCard
        id="services-graphics-solutions"
        title={
          <>
            Graphics <br /> Solutions
          </>
        }
        imageSrc={images.graphicsDesign}
        description="Elevate your brand with professional visual identity services, including custom logos and high-impact marketing materials that effectively communicate your company's core values."
      />
    ),
  },
  {
    title: "System Upgrade & Maintenance",
    value: "Maintenance",
    content: (
      <ServiceCard
        id="services-system-upgrade-maintenance"
        title={
          <>
            System <br /> Maintenance
          </>
        }
        imageSrc={images.maintenance}
        description="We provide comprehensive system audits, regular software updates, and proactive security maintenance to ensure your digital infrastructure stays secure, efficient, and downtime-free."
      />
    ),
  },
];

export const portfolios = [
  {
    title: "Easy car rent",
    description:
      "Our team engineered a comprehensive web platform that allows users to check availability and book vehicles online. The solution was met with high user satisfaction and directly contributed to a 20% growth in their customer base within the first five months.",
    link: "https://easycarrentet.com",
    image: images.easycarrent,
    category: "Website",
  },
  {
    title: "AYCC",
    description:
      "Our team engineered a high-performance digital ecosystem for the Asella Youth and Community Center. We architected the platform to streamline donation workflows and integrate comprehensive educational resources, utilizing a cutting-edge tech stack to ensure 24/7 reliability and a premium user experience. This digital transformation empowers the center to scale its social impact through modernized financial and educational infrastructure.",
    link: "https://asellayouthclub.com/en",
    image: images.aycc,
    category: "Website",
  },
  {
    title: "Adventure Hub",
    description:
      "AdventureHub: An Integrated Digital Ecosystem for Global Tourism Our team architected and deployed a comprehensive enterprise solution for the travel and hospitality sector. We engineered a robust platform featuring advanced traffic-management protocols, automated financial documentation, and seamless geographic data integration. By implementing secure identity management and a sophisticated administrative console, we provided the client with a scalable infrastructure capable of managing high-volume bookings and complex digital assets with optimized efficiency.",
    link: "https://tour-and-travel-final.vercel.app/",
    image: images.adventureHub,
    category: "Website",
  },
  {
    title: "Blakcup",
    description:
      "Cross-Platform Optimization and Global Marketplace Deployment Our team led a comprehensive platform modernization focused on structural integrity and performance engineering. The project involved a deep-tier code audit to optimize system responsiveness and the integration of secure, multi-channel payment gateways. We managed the end-to-end release lifecycle, successfully launching the high-performance application on both the Apple App Store and Google Play Store, ensuring a stable and scalable environment for global users.",
    image: images.blakcup,
    category: "App",
  },
  {
    title: "InstaJobs",
    description:
      "Enterprise Talent Acquisition & Recruitment Ecosystem We engineered a high-performance career discovery platform designed to bridge the gap between global talent and industry leaders. The solution features a secure, multi-provider identity management system and integrated financial infrastructure for seamless transaction processing. By architecting a robust network of third-party service integrations, we delivered a centralized hub that optimizes the recruitment lifecycle, providing users with a fluid, high-speed interface for professional networking and employment management.",
    image: images.instajobs,
    category: "App",
  },
  {
    title: "Intuitive LMS",
    description:
      "Enterprise Knowledge Management & Educational Ecosystem Architecting the future of institutional growth through a high-performance digital learning infrastructure. Our solution centralizes curriculum delivery and student engagement into a single, scalable ecosystem, designed to streamline knowledge transfer and optimize organizational learning outcomes.",
    image: images.intuativeLms,
    category: "App",
  },
];
