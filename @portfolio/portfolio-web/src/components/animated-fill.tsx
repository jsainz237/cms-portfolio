"use client";

import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
  children: React.ReactNode;
}

export function AnimatedFill({
  children,
  className,
  containerClassName,
  style,
  ...props
}: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0);

  const setStyle = (e: React.MouseEvent<HTMLDivElement>, scale: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    setPosition({ x: relativeX, y: relativeY });
    setScale(scale);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setStyle(e, 500);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setStyle(e, 0);
  };

  return (
    <div
      className={cn("absolute size-full", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        id="animated-fill-bg"
        className={cn(
          "inset-0 absolute rounded-full size-96 scale-0 transition-transform duration-500 ease-in-out",
          className,
        )}
        style={{
          ...style,
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: `translate(-50%, -50%) scale(${scale}%)`,
        }}
        {...props}
      />
      {children}
    </div>
  );
}
