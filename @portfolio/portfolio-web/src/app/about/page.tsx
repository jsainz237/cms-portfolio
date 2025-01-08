import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

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
    <div className="relative flex flex-1 animate-page-fade-in flex-col justify-end">
      <div className="w-3/4 pb-[12vh]">
        <p className="z-10 whitespace-pre-line">{bio.about}</p>
      </div>
      <Triangles className="absolute bottom-[12vh] left-1/2 -z-10 -translate-x-1/2" />
    </div>
  );
}
