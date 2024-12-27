import { FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const logoHeight = 24;
const logoWidth = 1.354 * logoHeight;

export function Title() {
  return (
    <div className="flex flex-1">
      <div className="dashed-border ml-8 mr-16 h-full w-px animate-linefall" />
      <div className="absolute bottom-32 left-[22px] flex flex-col items-center gap-4">
        <Link href="/resume">
          <FileText className="size-6 bg-background stroke-foreground" />
        </Link>
        <Link href="https://www.linkedin.com/in/joshua-m-1999/">
          <Linkedin className="size-6 bg-background stroke-foreground" />
        </Link>
        <Link href="https://github.com/joshua-m-1999">
          <Github className="size-6 bg-background stroke-foreground" />
        </Link>
      </div>
      <div className="py-4">
        <Link href="/">
          <Image
            src="/js-logo.svg"
            alt="Jesse Sainz"
            width={logoWidth}
            height={logoHeight}
          />
        </Link>
        <h1
          className={cn(
            "highlighted text-6xl mt-36 font-serif mb-4 font-normal uppercase",
            "after:top-7 after:left-14 after:w-[96%] after:bg-[#97ace7] hover:after:w-[96%] after:animate-highlighter after:h-3/4",
          )}
        >
          Jesse Sainz
        </h1>
        <p className="font-mono text-2xl text-muted-foreground">Austin, TX</p>

        <div className="mt-28 flex flex-col items-start gap-6">
          <Link href="/about">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#decaba]">
              About
            </h2>
          </Link>
          <Link href="/projects">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#badebe]">
              Projects
            </h2>
          </Link>
          <Link href="/tech">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#d3bade]">
              Tech
            </h2>
          </Link>
          <Link href="experience">
            <h2 className="highlighted font-serif text-2xl text-muted-foreground after:bg-[#debacd]">
              Experience
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
