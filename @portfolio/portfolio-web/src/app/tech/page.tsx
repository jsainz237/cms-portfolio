import React from "react";
import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { TechScroller, TechScrollerMobile } from "@/components/tech-scroller";
import { client } from "@/sanity/client";
import { TechQueryResult } from "@/sanity/types";

import SmallTriangles from "../../../public/traingles-sm.svg";

const techQuery = groq`*[_type == "technology"] {
  ...,
  'icon': {
    'url': icon.asset->url
  }
}`;

const getTech = unstable_cache(
  async () => {
    return await client.fetch<TechQueryResult>(techQuery);
  },
  ["tech"],
  { revalidate: 10, tags: ["tech"] },
);

export default async function TechPage() {
  const tech = await getTech();

  return (
    <div className="relative min-h-[240px] w-full flex-1 animate-page-fade-in pr-12 max-md:pr-0">
      <SmallTriangles className="absolute -z-10 max-md:origin-top-right max-md:-translate-x-full max-md:-rotate-90 md:bottom-20 md:right-[8vw]" />
      <TechScroller techList={tech} />
      <TechScrollerMobile techList={tech} />
    </div>
  );
}
