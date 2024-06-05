"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="max-xl:py-4 w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[468px] xl:h-[468px] mix-blend-lighten">
          <Image
            src="/images/profile-pic.png"
            priority
            quality={100}
            fill
            alt="profile-photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
