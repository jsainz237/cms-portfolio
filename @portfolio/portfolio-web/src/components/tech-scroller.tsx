"use client";

import { useEffect, useRef, useState } from "react";

import { TechQueryResult } from "@/sanity/types";

const SCROLL_BUFFER = 100;
const GAP = 32;

interface Props {
  techList: TechQueryResult;
}

export const TechScroller = ({ techList }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState(techList);
  const [scrollHeight, setScrollHeight] = useState(0);

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

  return (
    <div
      ref={scrollRef}
      className="flex h-screen flex-1 flex-col overflow-y-auto pr-[12vw] text-right"
      style={{ gap: GAP }}
      onScroll={handleScroll}
    >
      {list.map((tech, idx) => (
        <div key={idx}>{tech.name}</div>
      ))}
    </div>
  );
};
