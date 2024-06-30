import { introduction } from "@/lib/data";

import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <motion.div
      className="pb-4 max-xl:px-8"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <h2 className="h3 max-xl:text-center text-accent">My Introduction</h2>
      <div className="mt-8 gap-8 max-xl:gap-4 flex flex-col items-center max-xl:px-2">
        {introduction.map((item, index) => (
          <p
            key={index}
            className="text-sm max-w-[420px] xl:max-w-[500px] leading-6 tracking-tight text-white/60"
          >
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Introduction;
