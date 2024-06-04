"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { links } from "@/lib/data";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={cn(
            "capitalize font-medium hover:text-accent transition-all",
            link.path === pathname &&
              "text-accent border-b-[0.5px] border-accent"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
