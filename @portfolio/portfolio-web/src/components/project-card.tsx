import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Unpacked } from "@/lib/utils";
import { ProjectQueryResult } from "@/sanity/types";

import { AnimatedFill } from "./animated-fill";
import { TechIcon } from "./tech-icon";

type Project = Unpacked<ProjectQueryResult>;

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="group relative flex min-h-[200px] w-full items-center justify-center overflow-hidden rounded-sm bg-background shadow-inset-4 shadow-muted-foreground transition-all duration-300">
        <div className="relative size-1/2">
          <Image
            src={project.logo!}
            alt={project.title!}
            fill
            objectFit="contain"
          />
        </div>
        <Suspense fallback={null}>
          <AnimatedFill
            className="flex flex-col items-center justify-center"
            containerClassName="flex justify-center items-center rounded-sm"
            style={{ backgroundColor: project.background }}
          >
            <p className="z-20 w-3/4 text-center font-serif font-normal text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-sm:text-sm">
              {project.description}
            </p>
          </AnimatedFill>
        </Suspense>
      </div>
      <div className="mt-2 flex items-center justify-between">
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
        <div className="max-[560px]:hidden flex gap-2">
          {project.technologies?.map(tech => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
