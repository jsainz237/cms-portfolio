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
        "cursor-fill group mt-2 flex cursor-none items-center rounded-full shadow-[inset_0_0_0_1px] transition-shadow duration-300 hover:shadow-transparent shadow-muted-foreground",
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
            // CSS Filter calculated from https://codepen.io/sosuke/pen/Pjoqqp
            className="transition-[filter] duration-300 [filter:brightness(0)_saturate(100%)_invert(74%)_sepia(5%)_saturate(1231%)_hue-rotate(176deg)_brightness(88%)_contrast(84%)] group-hover:filter-none"
          />
        </div>
      </div>
      <p className="max-w-0 overflow-hidden text-nowrap text-xs text-foreground transition-all duration-300 group-hover:text-white group-focus:ml-1 group-focus:mr-2 group-focus:max-w-32">
        {tech.name}
      </p>
    </button>
  );
};
