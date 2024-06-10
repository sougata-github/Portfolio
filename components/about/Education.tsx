import { education } from "@/lib/data";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="pb-4 max-xl:px-8 max-xl:flex max-xl:flex-col max-xl:items-center">
      <h2 className="h3 max-xl:text-center text-accent">My Education</h2>
      <div className="max-w-[680px] mt-8 gap-8 grid grid-cols-1 xl:grid-cols-2 max-xl:px-4 max-xl:max-w-[420px]">
        {education.map((card, index) => (
          <EducationCard
            key={index}
            year={card.year}
            course={card.course}
            platform={card.platform}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
