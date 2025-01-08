import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { ProjectCard } from "@/components/project-card";
import { client } from "@/sanity/client";
import { Project } from "@/sanity/types";

import Lines from "../../../public/bg-lines.svg";

const projectQuery = groq`*[_type == "project"] | order(_updatedAt desc){
  ...,
  'logo': logo.asset->url,
  technologies[]->{
    ...,
    'icon': {
      'url': icon.asset->url
    }
  }
}`;

const getProjects = unstable_cache(
  async () => {
    return await client.fetch<Project[]>(projectQuery);
  },
  ["projects"],
  { revalidate: 60 * 60 * 24, tags: ["projects"] },
);

export default async function Projects() {
  const projects = await client.fetch<Project[]>(projectQuery);

  return (
    <div className="relative flex-1 animate-page-fade-in pr-12">
      <div className="flex h-full flex-col gap-4 overflow-y-auto">
        <div className="mt-36" />
        {projects.map(project => (
          <ProjectCard key={project._id} project={project as any} />
        ))}
      </div>

      <Lines className="absolute right-0 top-0 -z-50 h-screen" />
      <div className="absolute left-0 top-0 -z-10 h-screen w-12 animate-[translate-x_10s_linear_infinite] bg-mixed-gradient mix-blend-plus-lighter" />
    </div>
  );
}
