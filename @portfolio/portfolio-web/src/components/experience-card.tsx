"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Experience } from "@/sanity/types";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderDate = () => {
    const startYear = new Date(experience.startDate!).getFullYear();
    const endYear = experience.current
      ? "Present"
      : new Date(experience.endDate!).getFullYear();

    if (startYear === endYear) {
      return `${startYear}`;
    }
    return `${startYear} - ${endYear}`;
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex flex-row items-center gap-3">
        <h2
          className="group-hover:text-stroke mt-[-6px] whitespace-nowrap font-serif text-2xl font-bold text-foreground transition-all duration-200 ease-out-quart group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] max-[640px]:text-xl"
          style={{
            color: isHovered ? experience.highlight : undefined,
            WebkitTextStroke: isHovered
              ? `1px ${experience.highlight}`
              : undefined,
          }}
        >
          {experience.company}
        </h2>
        <h2
          className="absolute left-0 top-0  -z-10 mt-[-6px] whitespace-nowrap font-serif text-2xl font-bold opacity-50 transition-all duration-200 max-[640px]:text-xl"
          style={{
            color: experience.highlight,
            WebkitTextStroke: isHovered
              ? `1px ${experience.highlight}`
              : undefined,
          }}
        >
          {experience.company}
        </h2>
        <div
          className={cn(
            "dashed-border-x h-px flex-1",
            "max-[580px]:hidden md:max-[955px]:hidden lg:max-[1175px]:hidden",
          )}
        />
        <h6
          className={cn(
            "w-32 whitespace-nowrap font-medium text-foreground",
            "max-[580px]:hidden md:max-[955px]:hidden lg:max-[1175px]:hidden",
          )}
        >
          {renderDate()}
        </h6>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div
          className={cn(
            "hidden text-sm whitespace-nowrap",
            "max-[580px]:block md:max-[955px]:block lg:max-[1175px]:block",
          )}
        >
          {renderDate()}
        </div>
        <div
          className={cn(
            "hidden",
            "max-[580px]:block md:max-[955px]:block lg:max-[1175px]:block",
          )}
        >
          •
        </div>
        <p className="whitespace-nowrap text-sm text-muted-foreground">
          {experience.location}
        </p>
      </div>
    </div>
  );
};
