import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { IoIosGitBranch, IoLogoGithub, IoLogoNodejs } from "react-icons/io";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongoose, SiNextdotjs, SiPrisma, SiVercel } from "react-icons/si";

export const skillsData = [
  {
    label: "HTML",
    icon: (
      <FaHtml5 className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "CSS",
    icon: (
      <FaCss3Alt className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "JavaScript",
    icon: (
      <RiJavascriptFill className="h-10 w-10 max-lg:w-9 max-lg:h-9 hover:text-accent transition-all" />
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
      <RiTailwindCssFill className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "React.js",
    icon: (
      <GrReactjs className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Next.js",
    icon: (
      <SiNextdotjs className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Framer Motion",
    icon: (
      <TbBrandFramerMotion className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Node.js",
    icon: (
      <IoLogoNodejs className="h-9 w-9 max-lg:w-8 max-lg:h-8 hover:text-accent transition-all" />
    ),
  },
  {
    label: "MongoDB",
    icon: (
      <BiLogoMongodb className="h-9 w-9 max-lg:w-8 max-lg:h-8 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Mongoose",
    icon: (
      <SiMongoose className="h-9 w-9 max-lg:w-8 max-lg:h-8 hover:text-accent transition-all" />
    ),
  },
  {
    label: "MySql",
    icon: (
      <GrMysql className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Prisma",
    icon: (
      <SiPrisma className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Git",
    icon: (
      <IoIosGitBranch className="h-7 w-7 max-lg:w-6 max-lg:h-6 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Github",
    icon: (
      <IoLogoGithub className="h-8 w-8 max-lg:w-7 max-lg:h-7 hover:text-accent transition-all" />
    ),
  },
  {
    label: "Vercel",
    icon: (
      <SiVercel className="h-7 w-7 max-lg:w-6 max-lg:h-6 hover:text-accent transition-all" />
    ),
  },
];
