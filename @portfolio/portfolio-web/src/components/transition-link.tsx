"use client";

import { useEffect } from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { sleep } from "@/lib/utils";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export const TransitionLink = ({ children, href, ...props }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const setContainerOpacity = (opacity: number) => {
    const transitionContainer = document.getElementById("transition-container");
    if (!transitionContainer) return;

    transitionContainer.style.opacity = opacity.toString();
  };

  useEffect(() => {
    setContainerOpacity(1);
  }, [pathname]);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href === pathname) return;

    setContainerOpacity(0);
    await sleep(500);
    router.push(href as string);
  };

  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
};
