"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "motion/react";
import Image from "next/image";

import { getColorFilter } from "@/lib/color";
import { TechQueryResult } from "@/sanity/types";

const SCROLL_SPEED_FAST = 0.5;
const SCROLL_SPEED_SLOW = 0.15;

interface Props {
  techList: TechQueryResult;
}

export const TechScroller = ({ techList }: Props) => {
  const GAP = 32;
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scrollOffset = () => {
    if (!ref.current) return 0;
    return ref.current.offsetHeight / 2 + GAP / 2;
  };

  const baseY = useMotionValue(0);
  const baseTranslate = useTransform(baseY, v => wrap(-scrollOffset(), 0, v));
  const y = useTransform(baseTranslate, v => `${v}px`);

  useAnimationFrame(() => {
    baseY.set(
      baseY.get() + (isHovered ? SCROLL_SPEED_SLOW : SCROLL_SPEED_FAST),
    );
  });

  return (
    <div className="flex h-screen flex-1 justify-end overflow-y-hidden pr-[12vw] max-md:hidden">
      <motion.div
        ref={ref}
        className="flex h-max flex-col items-end gap-8 text-right"
        style={{ y, gap: GAP }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...techList, ...techList].map((tech, idx) => (
          <TechItem key={idx} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

export const TechScrollerMobile = ({ techList }: Props) => {
  const GAP = 16;
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const baseX = useMotionValue(0);

  const scrollOffset = (ref: HTMLDivElement | null) => {
    if (!ref) return 0;
    return ref.offsetWidth / 2 + GAP / 2;
  };

  const translateX1 = useTransform(baseX, v =>
    wrap(0, scrollOffset(ref1.current), v),
  );
  const translateX2 = useTransform(baseX, v =>
    wrap(-scrollOffset(ref2.current), 0, v),
  );

  const x1 = useTransform(translateX1, v => `-${v}px`);
  const x2 = useTransform(translateX2, v => `${v}px`);

  useAnimationFrame(() => {
    baseX.set(
      baseX.get() + (isHovered ? SCROLL_SPEED_SLOW : SCROLL_SPEED_FAST),
    );
  });

  const techListHalf1 = techList.slice(0, techList.length / 2);
  const techListHalf2 = techList.slice(techList.length / 2);

  return (
    <div
      className="overflow-x-hidden md:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={ref1}
        className="flex w-max flex-row gap-4"
        style={{ x: x1 }}
      >
        {[...techListHalf1, ...techListHalf1].map((tech, idx) => (
          <TechItem key={idx} tech={tech} />
        ))}
      </motion.div>
      <motion.div
        ref={ref2}
        className="mt-10 flex w-max flex-row gap-4"
        style={{ x: x2 }}
      >
        {[...techListHalf2, ...techListHalf2].map((tech, idx) => (
          <TechItem key={idx} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

const TechItem = ({ tech }: { tech: TechQueryResult[number] }) => {
  const [hovered, setHovered] = useState(false);
  const filter = getColorFilter(tech.background!);

  return (
    <div
      className="group flex shrink-0 items-end gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tech.icon?.url && (
        <Image
          src={tech.icon.url}
          alt={tech.name!}
          width={100}
          height={100}
          className="filter-muted-foreground size-6 transition-[filter] duration-300"
          style={{ filter: hovered && filter ? filter : undefined }}
        />
      )}
      <div
        className="whitespace-nowrap font-normal lowercase transition-all duration-300 group-hover:font-bold"
        style={{ color: hovered ? tech.background : undefined }}
      >
        {tech.name}
      </div>
    </div>
  );
};
