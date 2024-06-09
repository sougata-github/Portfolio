"use client";

import Education from "@/components/about/Education";
import Introduction from "@/components/about/Introduction";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.section
      className="h-full max-xl:pt-8"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="container mx-auto h-full">
        <h1 className="h2 max-xl:text-center">About Me</h1>
        <div
          className="flex flex-col xl:flex-row
       pt-4 pb-6 xl:pb-2 mt-4 gap-16 max-xl:gap-8
        "
        >
          <Introduction />
          <Education />
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
