"use client";

import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pb-4 max-lg:hidden">
      <div className="container mx-auto">
        <div className="flex gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center xl:justify-start justify-center"
            >
              <div>
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-extrabold"
                />{" "}
                <span className="text-2xl xl:text-4xl font-extrabold">+</span>
              </div>

              <p className={cn("leading-snug text-white/80 max-w-[110px]")}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
