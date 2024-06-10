import SkillBadge from "./SkillBadge";

import { skillsData } from "./SkillsIcon";

const Skills = () => {
  return (
    <div className="pb-4 max-xl:px-8">
      <h2 className="h3 max-xl:text-center text-accent">My Skills</h2>
      <div className="max-w-[480px] mt-8 max-xl:px-2 flex flex-wrap gap-8 max-xl:mx-auto max-xl:justify-center">
        {skillsData.map((skill, index) => (
          <SkillBadge key={index} label={skill.label} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
