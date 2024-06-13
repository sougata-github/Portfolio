"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import Badge from "@/components/Badge";
import {
  ProjectsDataType,
  projectsData,
} from "@/components/projects/ProjectsData";
import ProjectButton from "@/components/projects/ProjectButton";

import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import SliderBtns from "@/components/projects/SliderBtns";

const Page = () => {
  const [project, setProject] = useState<ProjectsDataType>(projectsData[0]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    //get current slider index
    const currentIndex = swiper.activeIndex;

    //update project state
    setProject(projectsData[currentIndex]);
  };

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
      className="min-h-[80vh] flex flex-col items-center pt-8 pb-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[468px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="flex flex-col gap-4">
                <h1 className="text-8xl leading-none font-extrabold">
                  {project.id < 10 ? `0${project.id}` : project.id}
                </h1>
                <h2 className="h2 font-extrabold">{project.title}</h2>
                <p className="mt-2 font-medium text-white/60 leading-2 text-sm max-w-[350px]">
                  {project.description}
                </p>
              </div>

              <div className="">
                <ul className="flex flex-wrap gap-4 py-4">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} label={tech.label} icon={tech.icon} />
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-4">
                  <ProjectButton url={project.live} content="Live Site">
                    <BsArrowUpRight className="text-white text-2xl hover:text-accent transition-all h-5 w-5 max-sm:h-4 max-sm:w-4" />
                  </ProjectButton>
                  <ProjectButton url={project.github} content="Source Code">
                    <BsGithub className="text-white text-2xl hover:text-accent transition-all h-6 w-6 max-sm:h-5 max-sm:w-5" />
                  </ProjectButton>
                </div>
              </div>
            </div>
          </div>

          {/*Swiper Component*/}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 cursor-pointer"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <Link href={project.live} target="_blank">
                    <div className="h-[460px] relative group flex jutsify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.imageUrl}
                          fill
                          quality={100}
                          className="object-cover"
                          alt={`${project.title} image`}
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}

              <SliderBtns
                containerStyles="max-sm:hidden flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[42px] h-[42px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
        W
      </div>
    </motion.section>
  );
};

export default Page;
