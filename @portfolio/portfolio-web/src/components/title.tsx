import { Linkedin, FileText, Github } from 'lucide-react';

export function Title() {
  return (
    <>
      <div className="dashed-border absolute top-0 left-8 w-[1px] h-full" />
      <div className="flex flex-col items-center gap-4 absolute left-[22px] bottom-32">
        <FileText className="size-6 bg-background" />
        <Linkedin className="size-6 bg-background" />
        <Github className="size-6 bg-background" />
      </div>
    </>
  );
}
