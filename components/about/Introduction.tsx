import { introduction } from "@/lib/data";

const Introduction = () => {
  return (
    <div className="pt-2 pb-4 max-xl:px-8">
      <h2 className="h3 max-xl:text-center text-accent">Introduction</h2>
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
    </div>
  );
};

export default Introduction;
