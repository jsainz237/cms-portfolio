import Link from "next/link";

import { cn } from "@/lib/utils";
import { Project, Technology } from "@/sanity/types";

import { TechIcon } from "./tech-icon";

interface Props {
  project: Project & { technologies: Technology[] };
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "cursor-fill group relative isolate flex min-h-[200px] w-full items-center justify-center overflow-hidden rounded-sm border-4 transition-all duration-300 border-muted-foreground bg-background hover:bg-black hover:border-black",
          `cursor-fill-[${project.background}]`,
        )}
      >
        <h1
          className="block font-serif text-6xl font-normal uppercase group-hover:hidden"
          style={{ color: project.background }}
        >
          {project.title}
        </h1>
        <p
          className="z-[9999] hidden w-3/4 text-center font-serif font-normal group-hover:block"
          style={{ color: project.background }}
        >
          {project.description}
        </p>
        {/* </div> */}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          {project.links?.map(({ title, url }, idx, { length }) => (
            <div key={title}>
              <Link className="font-mono text-base" href={url!}>
                {title}
              </Link>
              {idx < length - 1 && <span className="mx-2 font-mono">•</span>}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {project.technologies?.map((tech: Technology) => (
            <TechIcon key={tech.name} tech={tech as any} />
          ))}
        </div>
      </div>
    </div>
  );
};
