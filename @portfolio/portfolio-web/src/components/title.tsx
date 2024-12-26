import { Linkedin, FileText, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const logoHeight = 24;
const logoWidth = 1.354 * logoHeight;

export function Title() {
  return (
    <div className="flex flex-1">
      <div className="animate-linefall dashed-border ml-8 mr-16 w-[1px] h-full" />
      <div className="flex flex-col items-center gap-4 absolute left-[22px] bottom-32">
        <Link href="/resume">
          <FileText className="stroke-foreground size-6 bg-background" />
        </Link>
        <Link href="https://www.linkedin.com/in/joshua-m-1999/">
          <Linkedin className="stroke-foreground size-6 bg-background" />
        </Link>
        <Link href="https://github.com/joshua-m-1999">
          <Github className="stroke-foreground size-6 bg-background" />
        </Link>
      </div>
      <div className="py-4">
        <Link href="/">
          <Image src="/js-logo.svg" alt="Jesse Sainz" width={logoWidth} height={logoHeight} />
        </Link>
          <h1 className={cn(
            "highlighted text-6xl mt-36 font-serif mb-4 font-normal uppercase",
            "after:top-7 after:left-14 after:w-[96%] after:bg-[#97ace7] hover:after:w-[96%] after:animate-highlighter after:h-3/4"
          )}>Jesse Sainz</h1>
        <p className='text-2xl font-mono text-muted-foreground'>Austin, TX</p>

        <div className="mt-28 gap-6 flex items-start flex-col">
          <Link href="/about">
            <h2 className="highlighted text-2xl font-serif text-muted-foreground after:bg-[#decaba]">About</h2>
          </Link>
          <Link href="/projects">
            <h2 className="highlighted text-2xl font-serif text-muted-foreground after:bg-[#badebe]">Projects</h2>
          </Link>
          <Link href="/tech">
            <h2 className="highlighted text-2xl font-serif text-muted-foreground after:bg-[#d3bade]">Tech</h2>
          </Link>
          <Link href="experience">
            <h2 className="highlighted text-2xl font-serif text-muted-foreground after:bg-[#debacd]">Experience</h2>
          </Link>
      </div>
      </div>
    </div>
  );
}
