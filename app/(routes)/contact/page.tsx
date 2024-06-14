"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

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
      className="py-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[40px] max-xl:items-center">
          <div className="xl:h-[45%] order-2 xl:order-none">
            <ContactForm />
          </div>

          <div className="flex-1 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
