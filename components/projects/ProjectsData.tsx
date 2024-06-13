import {
  SiClerk,
  SiGreensock,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

export type ProjectsDataType = {
  id: number;
  title: string;
  description: string;
  live: string;
  github: string;
  imageUrl: string;
  mobileImageUrl: string;
  techStack: {
    label: string;
    icon: React.ReactNode;
  }[];
};

export const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    title: "DevOverFlow",
    description: "A community-driven Q&A platform for programming enthusiasts.",
    live: "https://devoverflow-next.vercel.app/",
    github: "https://github.com/sougata-github/DevOverFlow",
    imageUrl: "/images/devoverflow-light.png",
    mobileImageUrl: "/project/devoverflow-mobile.jpg",
    techStack: [
      {
        label: "Next.js 14",
        icon: (
          <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <BiLogoTypescript className="h-9 w-9 max-lg:h-8 max-lg:w-8 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "MongoDB",
        icon: (
          <BiLogoMongodb className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Mongoose",
        icon: (
          <SiMongoose className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Jotion",
    description: "Productivity and note-taking web application.",
    live: "https://jotion-next.vercel.app/",
    github: "https://github.com/sougata-github/Jotion",
    imageUrl: "/images/jotion-1.png",
    mobileImageUrl: "/project/jotion-mobile.jpg",
    techStack: [
      {
        label: "Next.js 14",
        icon: (
          <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <BiLogoTypescript className="h-9 w-9 max-lg:h-8 max-lg:w-8 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Clerk",
        icon: (
          <SiClerk className="h-6 w-6 max-lg:w-5 max-lg:h-5 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Convex",
        icon: (
          <FaDatabase className="h-6 w-6 max-lg:w-5 max-lg:h-5 hover:text-accent transition-all" />
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Team Chat",
    description: "Full-Stack Discord clone built using Next.js.",
    live: "https://team-chat-efq7.onrender.com/invite/4a8a83a6-f6df-4644-90ee-d2c1093c0411",
    github: "https://github.com/sougata-github/Team-Chat",
    imageUrl: "/images/team-chat-light.png",
    mobileImageUrl: "/project/team-chat-mobile.jpg",
    techStack: [
      {
        label: "Next.js 14",
        icon: (
          <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <BiLogoTypescript className="h-10 w-10 max-lg:w-9 max-lg:h-9 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "NeonDB",
        icon: (
          <FaDatabase className="h-6 w-6 max-lg:w-5 max-lg:h-5 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Prisma",
        icon: (
          <SiPrisma className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
    ],
  },
  {
    id: 4,
    title: "iPhone 15 Pro",
    description:
      "iPhone 15 Pro landing page built using React, GSAP and Three.js.",
    live: "https://iphone-15-pro-landing-page.vercel.app/",
    github: "https://github.com/sougata-github/iphone-15-pro-landing-page",
    imageUrl: "/images/iphone-landing-page.png",
    mobileImageUrl: "/project/iphone-landing-page-mobile.jpg",
    techStack: [
      {
        label: "React",
        icon: (
          <GrReactjs className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "TypeScript",
        icon: (
          <BiLogoTypescript className="h-10 w-10 max-lg:w-9 max-lg:h-9 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
      {
        label: "GSAP",
        icon: (
          <SiGreensock className="h-9 w-9 max-lg:w-8 max-lg:h-8 hover:text-accent transition-all" />
        ),
      },
      {
        label: "Three.js",
        icon: (
          <TbBrandThreejs className="h-7 w-7 max-lg:h-6 max-lg:w-6 hover:text-accent transition-all" />
        ),
      },
    ],
  },
];
