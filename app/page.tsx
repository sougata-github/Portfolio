import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";

import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full max-xl:mt-4 max-xl:pt-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Hero Text */}
          <div className="text-center xl:text-left">
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Sougata Das</span>
            </h1>
            <p className="text-xl mt-6">
              <span className="max-xl:hidden">-</span> Creative Developer
            </p>
            <p className="max-xl:max-w-[400px] max-w-[500px] mt-6 mb-9 text-white/80">
              Transforming your ideas into interactive and engaging digital
              experiences.
            </p>

            {/* Socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex items-center">
                <span>Download CV</span>
                <FiDownload className="ml-2 text-lg" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Hero Image*/}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
