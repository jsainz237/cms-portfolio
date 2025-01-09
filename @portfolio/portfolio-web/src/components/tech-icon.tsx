import Image from "next/image";

import { cn, Unpacked } from "@/lib/utils";
import { ProjectQueryResult } from "@/sanity/types";

type Technology = Unpacked<Unpacked<ProjectQueryResult>["technologies"]>;

interface Props {
  tech: Technology;
}

export const TechIcon = ({ tech }: Props) => {
  if (!tech) return null;

  return (
    <button
      className={cn(
        "cursor-fill group mt-2 flex cursor-none items-center rounded-full shadow-inset-4 shadow-muted-foreground",
        `cursor-fill-[${tech.background}]`,
      )}
    >
      <div className="flex size-6 items-center justify-center rounded-full">
        <div className="relative size-4">
          <Image
            src={tech.icon?.url}
            alt={tech.name!}
            fill
            objectFit="contain"
          />
        </div>
      </div>
      <p className="max-w-0 overflow-hidden text-nowrap text-xs text-foreground transition-all duration-300 group-hover:text-white group-focus:ml-1 group-focus:mr-2 group-focus:max-w-32">
        {tech.name}
      </p>
    </button>
  );
};
