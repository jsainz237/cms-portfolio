import { groq } from "next-sanity";

import { client } from "@/sanity/client";

import Triangles from "../../../public/traingles.svg";

const bioQuery = groq`*[_type == "biography"] | order(_updatedAt desc)[0]`;

export default async function About() {
  const bio = await client.fetch(bioQuery);

  return (
    <div className="relative flex flex-1 animate-page-fade-in flex-col justify-end">
      <div className="w-3/4 pb-[12vh]">
        <p className="z-10 whitespace-pre-line">{bio.about}</p>
      </div>
      <Triangles className="absolute bottom-[12vh] left-1/2 -z-10 -translate-x-1/2" />
    </div>
  );
}
