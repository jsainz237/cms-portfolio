"use client";

import { useEffect, useRef, useState } from "react";
import {
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";

import { getColorFilter } from "@/lib/color";
import { TechQueryResult } from "@/sanity/types";

const SCROLL_BUFFER = 100;
const GAP = 32;
const SCROLL_SPEED_MULTIPLIER = 1.3; // Adjust multiplier for faster/slower scroll

interface Props {
  techList: TechQueryResult;
}

export const TechScroller = ({ techList }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(0);
  const [list, setList] = useState(techList);
  const [scrollHeight, setScrollHeight] = useState(0);

  // Add smooth spring physics to the scroll speed
  const scrollSpeed = useSpring(0, {
    damping: 50,
    stiffness: 300,
  });

  // Transform mouseY to scroll speed based on screen position
  useTransform(mouseY, latest => {
    const screenMiddle = window.innerHeight / 2;
    if (latest < screenMiddle) {
      // Above middle - scroll up (negative speed)
      const percentage = 1 - latest / screenMiddle;
      scrollSpeed.set(-percentage * SCROLL_SPEED_MULTIPLIER);
    } else {
      // Below middle - scroll down (positive speed)
      const percentage = (latest - screenMiddle) / screenMiddle;
      scrollSpeed.set(percentage * SCROLL_SPEED_MULTIPLIER);
    }
  });

  // Apply the scroll effect
  useAnimationFrame(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += scrollSpeed.get();
    }
  });

  const onScrollTopReached = () => {
    const scrollTop = scrollRef.current?.scrollTop;

    setList([...techList, ...techList]);
    scrollRef.current?.scrollTo({
      top: scrollTop! + scrollHeight + GAP,
      behavior: "instant",
    });
  };

  const onScrollBottomReached = () => {
    const scrollTop = scrollRef.current!.scrollTop;

    setList([...techList, ...techList]);
    scrollRef.current?.scrollTo({
      top: scrollTop - scrollHeight - GAP,
      behavior: "instant",
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollBottom = scrollTop + window.innerHeight;
    const containerHeight = e.currentTarget.scrollHeight;

    if (scrollTop <= SCROLL_BUFFER) {
      return onScrollTopReached();
    }

    if (scrollBottom >= containerHeight - SCROLL_BUFFER) {
      return onScrollBottomReached();
    }
  };

  // Calculate the scroll height of the container only on mount
  useEffect(() => {
    if (scrollRef.current && !scrollHeight) {
      setScrollHeight(scrollRef.current.scrollHeight);
    }
  }, [scrollRef, scrollHeight]);

  // Simulate a scroll to the top when the component mounts
  useEffect(() => {
    onScrollTopReached();
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseY]);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hidden flex h-screen flex-1 flex-col items-end overflow-y-auto pr-[12vw] text-right"
      style={{ gap: GAP }}
      onScroll={handleScroll}
    >
      {list.map((tech, idx) => (
        <TechItem key={idx} tech={tech} />
      ))}
    </div>
  );
};

const TechItem = ({ tech }: { tech: TechQueryResult[number] }) => {
  const [hovered, setHovered] = useState(false);
  const filter = getColorFilter(tech.background!);

  return (
    <div
      className="group flex items-end gap-2"
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
        className="flex-1 font-normal transition-all duration-300 group-hover:font-bold"
        style={{ color: hovered ? tech.background : undefined }}
      >
        {tech.name}
      </div>
    </div>
  );
};
