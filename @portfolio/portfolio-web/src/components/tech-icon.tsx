import Image from "next/image";

import { Unpacked } from "@/lib/utils";
import { ProjectQueryResult } from "@/sanity/types";

type Technology = Unpacked<Unpacked<ProjectQueryResult>["technologies"]>;

interface Props {
  tech: Technology;
}

export const TechIcon = ({ tech }: Props) => {
  if (!tech) return null;
  return (
    <button className="group mt-2 flex cursor-none items-center">
      <div
        className="flex size-6 items-center justify-center rounded-full"
        style={{ backgroundColor: tech.background }}
      >
        <div className="relative size-4">
          <Image
            src={tech.icon?.url}
            alt={tech.name!}
            fill
            objectFit="contain"
          />
        </div>
      </div>
      <p className="max-w-0 overflow-hidden text-xs transition-all duration-300 group-focus:ml-2 group-focus:max-w-24">
        {tech.name}
      </p>
    </button>
  );
};
