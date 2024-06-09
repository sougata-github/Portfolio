"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="max-xl:py-4 w-full h-full relative overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          mixBlendMode: "lighten",
        }}
        animate={{
          opacity: 1,
          mixBlendMode: "lighten",
          transition: {
            delay: 1.6,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          className="w-[320px] h-[320px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute mt-4 xl:mt-[38px]"
          initial={{
            opacity: 0,
            mixBlendMode: "lighten",
          }}
          animate={{
            opacity: 1,
            mixBlendMode: "lighten",
            transition: {
              delay: 2,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/images/profile-pic.png"
            priority
            quality={100}
            fill
            alt="profile-photo"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="252"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
