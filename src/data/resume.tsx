import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saad Ahmad",
  initials: "SA",
  url: "https://saadahmad.com",
  location: "Remote",
  locationLink: "https://www.google.com/maps/place/remote",
  description:
    "Automation Engineer helping businesses scale. I build systems that save time and make money.",
  summary:
    "I am an Automation Specialist passionate about saving business owners time and resources. Using tools like Make.com, n8n, and Zapier, I've built robust automations for content syndication, sales proposals, lead scraping, and more. Recently, I've completed over 15 unique automation projects to streamline operations for various business needs.",
  avatarUrl: "/me.png",
  skills: [
    "Make.com",
    "n8n",
    "Zapier",
    "Webhooks",
    "Airtable",
    "Apify",
    "PhantomBuster",
    "OpenAI",
    "Monday.com",
    "Data Scraping",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saadahmadcs@yahoo.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/saadahmadcs",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/saadahmadcs",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:saadahmadcs@yahoo.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Automation Expert",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Automation Engineer",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Designed and implemented 15+ automated workflows using Make.com, n8n, and Zapier. Helped clients automate lead generation, content syndication, and proposal creation, saving them hundreds of hours monthly.",
    }
  ],
  education: [
    {
      school: "Self-Taught & Maker School",
      href: "#",
      degree: "Automation Engineering",
      logoUrl: "",
      start: "2024",
      end: "Present",
    }
  ],
  projects: [
    {
      title: "AI Content Syndication Engine",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Automates the distribution of content across Twitter, Facebook, Instagram, LinkedIn, and Medium to maximize reach with zero manual effort.",
      technologies: [
        "Make.com",
        "OpenAI",
        "Social Media APIs",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Automated Proposal Generator",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Uses Monday.com webhooks to automatically generate slide proposals for clients, completely eliminating manual data entry for the sales team.",
      technologies: [
        "Make.com",
        "Monday.com",
        "Webhooks",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Upwork Lead Generation Scraper",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Automates fetching jobs from an Upwork RSS feed to accelerate client outreach, allowing the agency to apply to jobs seconds after they are posted.",
      technologies: [
        "Make.com",
        "RSS",
        "Airtable",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "YouTube to Blog Post Engine",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Automatically converts YouTube videos into SEO-optimized blog posts using AI, streamlining the content creation pipeline.",
      technologies: [
        "Make.com",
        "OpenAI",
        "YouTube API",
      ],
      links: [],
      image: "",
      video: "",
    }
  ],
  hackathons: [],
} as const;
