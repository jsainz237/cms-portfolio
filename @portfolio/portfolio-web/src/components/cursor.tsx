"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { cn, parsePx } from "@/lib/utils";

const TRANSITION_DURATION = 200;

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lockedPosition, setLockedPosition] = useState({ x: 0, y: 0 });

  const [isExpanded, setIsExpanded] = useState(false);
  const [isStatic, setIsStatic] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const pathname = usePathname();

  const setCursorStyle = useCallback((key: string, value?: string) => {
    if (!cursorRef.current) return;
    if (!value) cursorRef.current.style.removeProperty(key);
    else cursorRef.current.style.setProperty(key, value);
  }, []);

  /** Copy specific styles from the element to the cursor.
   * Return the copied styles as an object */
  const copyStyles = useCallback(
    (element1: Element, keys: string[]) => {
      const style = window.getComputedStyle(element1);
      return keys.reduce(
        (acc, key) => {
          const value = style.getPropertyValue(key);
          setCursorStyle(key, value);
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string>,
      );
    },
    [setCursorStyle],
  );

  const extractColorCode = useCallback((element: Element) => {
    const fillClass = Array.from(element.classList).find(className =>
      className.startsWith("cursor-fill-["),
    );
    const colorCode = fillClass?.split("cursor-fill-[")[1]?.replace("]", "");
    return colorCode;
  }, []);

  // Update cursor position
  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Apply hover effect to hoverable elements
  useEffect(() => {
    const hoverables = Array.from(
      document.querySelectorAll("button, a"),
    ).filter(element => !element.classList.contains("cursor-fill"));

    const handleHoverableMouseEnter = () => setIsExpanded(true);
    const handleHoverableMouseLeave = () => setIsExpanded(false);

    hoverables.forEach(element => {
      element.addEventListener("mouseenter", handleHoverableMouseEnter);
      element.addEventListener("mouseleave", handleHoverableMouseLeave);
    });

    return () => {
      hoverables.forEach(element => {
        element.removeEventListener("mouseenter", handleHoverableMouseEnter);
        element.removeEventListener("mouseleave", handleHoverableMouseLeave);
      });
    };
  }, [pathname]);

  // Apply fill effect to fillable elements
  useEffect(() => {
    const fillables = document.querySelectorAll(".cursor-fill");
    const observer = new ResizeObserver(([{ target }]) => {
      console.log("calling observer callback");
      const colorCode = extractColorCode(target);
      const { x: elemX, y: elemY } = target.getBoundingClientRect();

      const { width, height } = copyStyles(target, [
        "border-radius",
        "width",
        "height",
      ]);

      setCursorStyle("background-color", colorCode);
      setLockedPosition({
        x: elemX + parsePx(width) / 2,
        y: elemY + parsePx(height) / 2,
      });
    });

    const handleFillableMouseEnter = (e: any) => {
      console.log("calling handleFillableMouseEnter");
      if (!cursorRef.current) return;
      const element = e.currentTarget as Element;

      setIsFilling(true);
      setTimeout(() => setIsStatic(true), TRANSITION_DURATION);
      observer.observe(element);
    };

    const handleFillableMouseLeave = (e: any) => {
      console.log("calling handleFillableMouseLeave");
      const element = e.currentTarget as Element;

      setIsStatic(false);
      setIsFilling(false);
      setIsLeaving(true);
      observer.unobserve(element);

      [
        "background-color",
        "mix-blend-mode",
        "height",
        "width",
        "border-radius",
      ].forEach(key => setCursorStyle(key, undefined));
      setTimeout(() => setIsLeaving(false), TRANSITION_DURATION);
    };

    fillables.forEach(element => {
      element.addEventListener("mouseenter", handleFillableMouseEnter);
      element.addEventListener("mouseleave", handleFillableMouseLeave);
    });

    return () => {
      fillables.forEach(element => {
        element.removeEventListener("mouseenter", handleFillableMouseEnter);
        element.removeEventListener("mouseleave", handleFillableMouseLeave);
      });
    };
  }, [pathname, copyStyles, extractColorCode, setCursorStyle]);

  const cursorPosition = isFilling ? lockedPosition : position;

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className={cn(
        "fixed pointer-events-none z-[9999] size-6 -translate-x-1/2 -translate-y-1/2 rounded-[100px] bg-foreground mix-blend-difference",
        isExpanded && "size-9",
        !isStatic && (isFilling || isLeaving) && "-filling mix-blend-lighten",
        isStatic && "-static-position mix-blend-lighten",
      )}
      style={{
        top: cursorPosition.y,
        left: cursorPosition.x,
      }}
    />
  );
};
