"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { sleep } from "@/lib/utils";

const TRANSITION_DURATION = 500;

interface Props extends LinkProps {
  children: React.ReactNode;
}

export const TransitionLink = ({ children, href, ...props }: Props) => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const transitionContainer = document.getElementById("transition-container");
    if (!transitionContainer) return;

    transitionContainer.style.opacity = "0";
    await sleep(TRANSITION_DURATION);
    router.push(href as string);
    transitionContainer.style.opacity = "1";
  };

  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
};
