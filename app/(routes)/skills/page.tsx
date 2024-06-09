"use client";

import Skills from "@/components/skill/Skills";

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
        <div className="flex flex-col gap-8">
          <h1 className="h2 max-xl:text-center">My Skills</h1>
          <p className="max-xl:text-center text-sm  text-white/60">
            Technologies I am comfortable with
          </p>
        </div>

        <Skills />
      </div>
    </motion.section>
  );
};

export default Page;
