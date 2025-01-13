"use client";

import { useState } from "react";

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
          className="group-hover:text-stroke mt-[-6px] font-serif text-2xl text-foreground transition-all duration-200 ease-out-quart group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:font-bold"
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
          className="absolute left-0 top-0 -z-10 mt-[-6px] font-serif text-2xl font-normal opacity-50 transition-all duration-200 group-hover:font-bold"
          style={{
            color: experience.highlight,
            WebkitTextStroke: isHovered
              ? `1px ${experience.highlight}`
              : undefined,
          }}
        >
          {experience.company}
        </h2>
        <div className="dashed-border-x h-px flex-1" />
        <h6 className="w-32 whitespace-nowrap font-medium text-foreground">
          {renderDate()}
        </h6>
      </div>
      <p className="text-sm text-muted-foreground">{experience.location}</p>
    </div>
  );
};
