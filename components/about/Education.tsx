import { education } from "@/lib/data";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="pt-2 pb-4 max-xl:px-8 max-xl:flex max-xl:flex-col max-xl:items-center">
      <h2 className="h3 max-xl:text-center text-accent">Education</h2>
      <div className="mt-8 gap-8 grid grid-cols-1 xl:grid-cols-2 max-xl:px-2">
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
