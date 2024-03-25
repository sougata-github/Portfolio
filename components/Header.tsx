"use client";

import { links } from "@/lib/data";

import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed flex items-center justify-center top-0 left-1/2 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex items-center justify-center py-2 sm:py-0">
          <ul className="flex flex-wrap text-[0.9rem] font-semibold text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-8">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center"
              >
                <Link
                  href={link.hash}
                  className="p-3 hover:text-gray-950 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
