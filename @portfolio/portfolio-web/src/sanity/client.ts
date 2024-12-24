import { createClient } from "next-sanity";

console.log(process.env.SANITY_STUDIO_PROJECT_ID)

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

