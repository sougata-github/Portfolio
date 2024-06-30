import Badge from "../Badge";

import { skillsData } from "./SkillsIcon";

import { motion } from "framer-motion";

const Skills = () => {
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
      <h2 className="h3 max-xl:text-center text-accent">My Skills</h2>
      <div className="max-w-[480px] mt-8 max-xl:px-2 flex flex-wrap gap-8 max-xl:mx-auto max-xl:justify-center">
        {skillsData.map((skill, index) => (
          <Badge key={index} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
