import SkillBadge from "./SkillBadge";

import { backendSkills, frontendSkills, tools } from "./SkillsIcon";

const Skills = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 py-2 mt-10 max-xl:gap-12 max-xl:pt-4 max-xl:pb-12">
      {/*Frontend Skills */}
      <div className="flex flex-col max-xl:text-center gap-4">
        <h2 className="text-lg text-accent font-semibold cursor-pointer">
          Frontend
        </h2>
        <div className="max-xl:max-w-[260px] max-w-[320px] mt-2 flex flex-wrap gap-8 py-4 max-xl:mx-auto max-xl:justify-center">
          {frontendSkills.map((skill) => (
            <SkillBadge
              key={skill.label}
              label={skill.label}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      {/*Backend Skills */}
      <div className="flex flex-col max-xl:text-center gap-4">
        <h2 className="text-lg text-accent font-semibold cursor-pointer">
          Backend
        </h2>
        <div className="max-xl:max-w-[260px] max-w-[320px] mt-2 flex flex-wrap gap-8 py-4 max-xl:mx-auto max-xl:justify-center">
          {backendSkills.map((skill) => (
            <SkillBadge
              key={skill.label}
              label={skill.label}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      {/*Tools */}
      <div className="flex flex-col max-xl:text-center gap-4">
        <h2 className="text-lg text-accent font-semibold cursor-pointer">
          Tools
        </h2>
        <div className="max-xl:max-w-[260px] max-w-[320px] mt-2 flex flex-wrap gap-8 py-4 max-xl:mx-auto max-xl:justify-center">
          {tools.map((skill) => (
            <SkillBadge
              key={skill.label}
              label={skill.label}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
