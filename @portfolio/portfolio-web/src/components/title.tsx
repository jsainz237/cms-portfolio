import React, { Suspense } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Permalinks } from "./permalinks";
import { TransitionLink } from "./transition-link";

const logoHeight = 24;
const logoWidth = 1.354 * logoHeight;

export function Title() {
  return (
    <div className="z-50 flex flex-1">
      <div className="dashed-border-y ml-8 mr-16 h-full w-px animate-linefall" />
      <Suspense fallback={null}>
        <Permalinks />
      </Suspense>

      <div className="py-4">
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
          )}
        >
          Jesse Sainz
        </h1>
        <p className="font-mono text-2xl text-muted-foreground">Austin, TX</p>

        <div className="mt-28 flex flex-col items-start gap-6">
          <TransitionLink href="/about">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#decaba]">
              About
            </h2>
          </TransitionLink>
          <TransitionLink href="/projects">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#badebe]">
              Projects
            </h2>
          </TransitionLink>
          <TransitionLink href="/tech">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#d3bade]">
              Tech
            </h2>
          </TransitionLink>
          <TransitionLink href="experience">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#debacd]">
              Experience
            </h2>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
