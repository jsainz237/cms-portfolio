import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { cn } from "@/lib/utils";
import { client } from "@/sanity/client";
import { BioQueryResult } from "@/sanity/types";

import Triangles from "../../../public/traingles.svg";

const bioQuery = groq`*[_type == "biography"] | order(_updatedAt desc)[0]`;

const getBio = unstable_cache(
  async () => {
    return await client.fetch<BioQueryResult>(bioQuery);
  },
  ["biography"],
  { revalidate: 60 * 60 * 24, tags: ["biography"] },
);

export default async function About() {
  const bio = await getBio();

  if (!bio) return null;

  return (
    <div className="relative flex flex-1 animate-page-fade-in flex-col items-end justify-end max-md:static">
      <div className="w-full pb-[12vh] pr-8 md:pr-16 xl:w-3/4">
        <p className="z-10 whitespace-pre-line">{bio.about}</p>
      </div>
      <Triangles
        className={cn(
          "absolute bottom-[12vh] -z-10",
          "max-md:right-0 max-md:left-auto max-md:translate-x-0",
        )}
      />
    </div>
  );
}
