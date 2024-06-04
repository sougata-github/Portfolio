"use client";

import { usePathname } from "next/navigation";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import Link from "next/link";

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="w-6 h-6 text-accent" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-primary flex flex-col"
      >
        <div className="mt-2 text-2xl">
          <Link href="/">
            <h1 className="font-bold">
              Sougata<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-start gap-8 mt-10">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={cn(
                "text-lg capitalize hover:text-accent transition-all",
                link.path === pathname &&
                  "text-accent border-1 border-b border-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
