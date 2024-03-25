"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[30rem] sm:max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/assets/profile.jpg"
              alt="profile-picture"
              height={192}
              width={192}
              quality={95}
              priority={true}
              className="object-cover h-20 w-20 sm:h-24 sm:w-24 rounded-full border-[0.3rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-2xl sm:text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl sm:text-2xl font-medium !leading-[1.5] max-w-[32rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m <span className="font-bold">Sougata. </span>I am a{" "}
        <span className="font-bold">frontend web developer</span> based in{" "}
        <span className="font-bold">India</span>, specializing in{" "}
        <span className="font-bold">ReactJS & NextJS.</span>
      </motion.p>
      <div className="flex items-center justify-center gap-x-2">
        <Link href="#contact">
          <Button className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-900">
            Contact Me <BsArrowRight />
          </Button>
        </Link>
        {/* <Button className="bg-white py-3 px-7 rounded-full ">
          <a href="" className="flex items-center gap-1">
            Download CV <HiDownload />
          </a>
        </Button> */}
      </div>
    </section>
  );
};

export default Intro;
