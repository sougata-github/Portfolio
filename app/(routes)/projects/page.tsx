"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  ProjectsDataType,
  projectsData,
} from "@/components/projects/ProjectsData";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ArrowUpRight, Star } from "lucide-react";
import ProjectSlider from "@/components/projects/ProjectSlider";

const Page = () => {
  const [project, setProject] = useState<ProjectsDataType>(projectsData[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex flex-col items-center justify-center pt-8 pb-8 max-xl:pb-20"
    >
      <div className="container mx-auto">
        <h1 className="h2 max-xl:text-center">My Work</h1>

        <div className="flex flex-row max-xl:flex-col-reverse items-center xl:items-start xl:justify-between">
          {/* Project Info */}
          <div className="flex flex-col mt-12 xl:mt-24 gap-6">
            {/* Project Header */}
            <div className="flex flex-col max-xl:items-center max-xl:text-center gap-6">
              <h3 className="text-4xl max-sm:text-2xl font-bold">
                {project.id > 10 ? project.id : `0${project.id}`}{" "}
                <span className="font-extrabold">{project.title}</span>
              </h3>
              <p className="text-white/60 max-sm:max-w-[280px] max-w-[320px] text-base max-sm:text-sm">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-4 max-w-[340px]">
              {project.techStack.map((item) => (
                <div
                  key={item.label}
                  className="cursor-pointer p-6 bg-[#24242b] text-white flex items-center justify-center rounded-xl h-[48px] w-[48px]"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{item.icon}</TooltipTrigger>
                      <TooltipContent className="mb-2 border-none text-accent text-[12px] bg-primary">
                        {item.label}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4 max-xl:justify-center">
              <Button className="bg-transparent border-[0.5px] border-accent rounded-xl px-4 py-2 group">
                <Link
                  target="_blank"
                  href={project.github}
                  className="flex gap-2 items-center text-sm text-white group-hover:text-primary transition-all duration-500"
                >
                  Star <Star className="h-4 w-4" />
                </Link>
              </Button>
              <Button className="bg-transparent border-[0.5px] border-accent rounded-xl px-4 py-2 group">
                <Link
                  target="_blank"
                  href={project.live}
                  className="flex gap-[7.5px] items-center text-sm text-white group-hover:text-primary transition-all duration-500"
                >
                  Live <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Slider Component*/}
          <ProjectSlider setProject={setProject} />
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
