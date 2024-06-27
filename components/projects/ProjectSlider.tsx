import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProjectsDataType, projectsData } from "./ProjectsData";

import Image from "next/image";
import Link from "next/link";

import SliderBtns from "./SliderBtns";

const ProjectSlider = ({
  setProject,
}: {
  setProject: (project: ProjectsDataType) => void;
}) => {
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    //get current slider index
    const currentIndex = swiper.activeIndex;

    //update project state
    setProject(projectsData[currentIndex]);
  };

  return (
    <div className="w-full xl:w-[68%] max-xl:mt-12 mt-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="h-fit cursor-pointer"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className="w-full">
            <Link href={project.live} target="_blank">
              <div className="relative w-full h-full">
                <Image
                  height={500}
                  width={500}
                  unoptimized
                  quality={100}
                  src={project.imageUrl}
                  className="mx-auto rounded-xl w-full h-auto max-lg:max-w-[700px] max-md:max-w-[580px] max-sm:hidden"
                  alt={`${project.title} image`}
                />

                {/*Mobile Thumbnail*/}
                <Image
                  height={500}
                  width={500}
                  unoptimized
                  quality={100}
                  src={project.mobileImageUrl}
                  className="mx-auto max-w-[280px] h-auto rounded-xl sm:hidden"
                  alt={`${project.title} image`}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/*Slider Arrows*/}
        <SliderBtns
          containerStyles="max-sm:hidden flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
          btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[42px] h-[42px] flex justify-center items-center transition-all"
        />
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
