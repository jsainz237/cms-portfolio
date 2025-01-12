import { unstable_cache } from "next/cache";
import { groq } from "next-sanity";

import { ProjectCard } from "@/components/project-card";
import { client } from "@/sanity/client";
import { ProjectQueryResult } from "@/sanity/types";

import Lines from "../../../public/bg-lines.svg";

const projectQuery = groq`*[_type == "project"] | order(order asc){
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
    return await client.fetch<ProjectQueryResult>(projectQuery);
  },
  ["projects"],
  { revalidate: 60 * 60 * 24, tags: ["projects"] },
);

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex-1 animate-page-fade-in pr-12">
      <div className="scrollbar-hidden flex h-full max-h-screen flex-col gap-12 overflow-y-auto">
        <div className="mt-36" />
        {projects.map(project => (
          <ProjectCard key={project._id} project={project as any} />
        ))}
      </div>

      <Lines className="absolute right-0 top-0 -z-50 h-screen" />
      <div className="absolute left-0 top-0 -z-10 h-screen w-screen overflow-hidden mix-blend-plus-lighter">
        <div className="h-screen w-12 animate-[translate-x_10s_linear_infinite] bg-mixed-gradient" />
      </div>
    </div>
  );
}
