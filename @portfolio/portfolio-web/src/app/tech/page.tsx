import React, { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { TechScroller } from "@/components/tech-scroller";
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
    <div className="flex-1 animate-page-fade-in pr-12">
      <SmallTriangles className="absolute bottom-20 right-[8vw] -z-10" />
      <Suspense fallback={<div>Loading...</div>}>
        <TechScroller techList={tech} />
      </Suspense>
    </div>
  );
}
