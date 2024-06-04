import { Button } from "@/components/ui/button";

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

            <Button>
              <span>Download CV</span>
            </Button>
          </div>
          {/* Hero Image*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
