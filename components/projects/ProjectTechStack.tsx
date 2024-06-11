import { FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiGreensock,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

export const projectTeckStack = [
  {
    id: 1,
    icons: [
      {
        label: "Next.js 14",
        icon: <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "TypeScript",
        icon: <BiLogoTypescript className="h-9 w-9 max-lg:h-8 max-lg:w-8" />,
      },
      {
        label: "Tailwind CSS",
        icon: <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "MongoDB",
        icon: <BiLogoMongodb className="h-8 w-8 max-lg:w-7 max-lg:h-7" />,
      },
      {
        label: "Mongoose",
        icon: <SiMongoose className="h-8 w-8 max-lg:w-7 max-lg:h-7" />,
      },
    ],
  },
  {
    id: 2,
    icons: [
      {
        label: "Next.js 14",
        icon: <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "TypeScript",
        icon: <BiLogoTypescript className="h-8 w-8 max-lg:w-7 max-lg:h-7" />,
      },
      {
        label: "Tailwind CSS",
        icon: <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "Clerk",
        icon: <SiClerk className="h-6 w-6 max-lg:w-5 max-lg:h-5" />,
      },
      {
        label: "Convex",
        icon: <FaDatabase className="h-6 w-6 max-lg:w-5 max-lg:h-5" />,
      },
    ],
  },
  {
    id: 3,
    icons: [
      {
        label: "Next.js 14",
        icon: <SiNextdotjs className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "TypeScript",
        icon: <BiLogoTypescript className="h-10 w-10 max-lg:w-9 max-lg:h-9" />,
      },
      {
        label: "Tailwind CSS",
        icon: <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "Clerk",
        icon: <SiClerk className="h-6 w-6 max-lg:w-5 max-lg:h-5" />,
      },
      {
        label: "Prisma",
        icon: <SiPrisma className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
    ],
  },
  {
    id: 4,
    icons: [
      {
        label: "React",
        icon: <GrReactjs className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "TypeScript",
        icon: <BiLogoTypescript className="h-10 w-10 max-lg:w-9 max-lg:h-9" />,
      },
      {
        label: "Tailwind CSS",
        icon: <RiTailwindCssFill className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
      {
        label: "GSAP",
        icon: <SiGreensock className="h-9 w-9 max-lg:w-8 max-lg:h-8" />,
      },
      {
        label: "Three.js",
        icon: <TbBrandThreejs className="h-7 w-7 max-lg:h-6 max-lg:w-6" />,
      },
    ],
  },
];
