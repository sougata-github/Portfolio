interface EductaionProps {
  year: string;
  course: string;
  platform: string;
}

const EducationCard = ({ year, course, platform }: EductaionProps) => {
  return (
    <div className="cursor-pointer flex flex-col py-4 pl-4 pr-8 rounded-xl bg-[#24242b] gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] text-accent">{year}</h3>
        <p className="text-[16px] font-bold">{course}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full h-2 w-2 bg-accent" />
        <span className="text-sm text-white/80">{platform}</span>
      </div>
    </div>
  );
};

export default EducationCard;
