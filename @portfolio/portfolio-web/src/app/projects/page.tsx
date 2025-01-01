import { groq } from "next-sanity";

import { client } from "@/sanity/client";

import Lines from "../../../public/bg-lines.svg";

const projectQuery = groq`*[_type == "project"] | order(_updatedAt desc)`;

export default async function Projects() {
  const projects = await client.fetch(projectQuery);

  return (
    <div className="isolate flex-1 animate-page-fade-in">
      <Lines className="absolute right-0 -z-50 h-full" />
      <div className="absolute left-0 -z-10 h-full w-12 animate-[translate-x_10s_linear_infinite] bg-mixed-gradient mix-blend-plus-lighter" />

      {projects.map((project: any) => (
        <div key={project._id}>{project.title}</div>
      ))}
    </div>
  );
}
