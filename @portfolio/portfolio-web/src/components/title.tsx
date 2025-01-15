"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { TransitionLink } from "./transition-link";

const logoHeight = 24;
const logoWidth = 1.354 * logoHeight;

export function Title() {
  const pathname = usePathname();

  return (
    <div className="z-50 flex">
      <div className="dashed-border-y fixed left-8 top-0 h-full w-px animate-linefall" />
      <div className="ml-24 py-4 max-md:ml-0">
        <TransitionLink href="/">
          <Image
            src="/js-logo.svg"
            alt="Jesse Sainz"
            width={logoWidth}
            height={logoHeight}
          />
        </TransitionLink>
        <h1
          className={cn(
            "highlighted text-6xl mt-36 font-serif mb-4 font-normal uppercase z-10",
            "after:top-7 after:max-w-0 after:left-14 after:w-[96%] after:bg-[#97ace7] hover:after:w-[96%] after:animate-highlighter after:h-3/4",
            "max-lg:text-4xl max-lg:mt-24 max-lg:mb-2 max-lg:after:top-4 max-lg:after:left-8 max-lg:after:w-[94%] max-lg:hover:after:w-[94%]",
            "max-md:mt-12",
          )}
        >
          Jesse Sainz
        </h1>
        <p className="font-mono text-2xl text-muted-foreground max-lg:text-xl">
          Austin, TX
        </p>

        <div className="mt-28 flex flex-col items-start gap-6 max-lg:mt-16 max-md:mt-12">
          <TransitionLink href="/about">
            <h2
              className={cn(
                "highlighted font-serif text-2xl text-muted-foreground after:bg-[#decaba] max-lg:text-xl",
                pathname === "/about" && "highlighted-active",
              )}
            >
              About
            </h2>
          </TransitionLink>
          <TransitionLink href="/projects">
            <h2
              className={cn(
                "highlighted font-serif text-2xl text-muted-foreground after:bg-[#badebe] max-lg:text-xl",
                pathname === "/projects" && "highlighted-active",
              )}
            >
              Projects
            </h2>
          </TransitionLink>
          <TransitionLink href="/tech">
            <h2
              className={cn(
                "highlighted font-serif text-2xl text-muted-foreground after:bg-[#d3bade] max-lg:text-xl",
                pathname === "/tech" && "highlighted-active",
              )}
            >
              Tech
            </h2>
          </TransitionLink>
          <TransitionLink href="experience">
            <h2
              className={cn(
                "highlighted font-serif text-2xl text-muted-foreground after:bg-[#debacd] max-lg:text-xl",
                pathname === "/experience" && "highlighted-active",
              )}
            >
              Experience
            </h2>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
