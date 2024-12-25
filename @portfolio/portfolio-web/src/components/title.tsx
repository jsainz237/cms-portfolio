import { Linkedin, FileText, Github } from 'lucide-react';
import Link from 'next/link';

export function Title() {
  return (
    <>
      <div className="animate-linefall dashed-border absolute top-0 left-8 w-[1px] h-full" />
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
    </>
  );
}
