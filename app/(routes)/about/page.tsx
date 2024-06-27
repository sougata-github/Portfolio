"use client";

import Skills from "@/components/about/Skills";
import Education from "@/components/about/Education";
import Introduction from "@/components/about/Introduction";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex flex-col items-center justify-center py-8"
    >
      <div className="container mx-auto">
        <h1 className="h2 max-xl:text-center">About Me</h1>
        <Tabs
          defaultValue="introduction"
          className="flex flex-col xl:flex-row gap-[60px] mt-10"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/*Content */}
          <div className="">
            <TabsContent value="introduction" className="w-full">
              <Introduction />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Page;
