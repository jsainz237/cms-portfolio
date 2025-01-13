import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { ExperienceCard } from "@/components/experience-card";
import { client } from "@/sanity/client";
import { ExperienceQueryResult } from "@/sanity/types";

import CircleGrid from "../../../public/circle-grid.svg";

const experienceQuery = groq`*[_type == "experience"] | order(startDate desc)`;

const getExperience = unstable_cache(
  async () => {
    return await client.fetch<ExperienceQueryResult>(experienceQuery);
  },
  ["experience"],
  { revalidate: 60 * 60 * 24, tags: ["experience"] },
);

export default async function ExperiencePage() {
  const experience = await getExperience();

  return (
    <div className="relative flex-1 animate-page-fade-in pr-12">
      <div className="absolute bottom-20 right-[8vw] -z-10">
        <CircleGrid />
      </div>
      <div className="absolute bottom-[16vh] left-0 flex w-4/5 flex-col gap-12">
        {experience.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
