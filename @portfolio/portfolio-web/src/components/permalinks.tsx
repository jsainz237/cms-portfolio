import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";

import { client } from "@/sanity/client";
import { PermalinksQueryResult } from "@/sanity/types";

const permalinksQuery = groq`*[_type == "permalink"] | order(order asc){
  ...,
  'icon': icon.asset->url
}`;

const getPermalinks = unstable_cache(
  async () => {
    return await client.fetch<PermalinksQueryResult>(permalinksQuery);
  },
  ["permalinks"],
  { revalidate: 60 * 60 * 24, tags: ["permalinks"] },
);

export async function Permalinks() {
  const permalinks = await getPermalinks();

  return (
    <div className="fixed bottom-32 left-[22px] z-50 flex flex-col items-center gap-4">
      {permalinks.map(permalink => (
        <Link key={permalink.title} href={permalink.url!} target="_blank">
          <div className="relative size-6 bg-background">
            <Image
              src={permalink.icon!}
              alt={permalink.title!}
              fill
              className="filter-muted-foreground object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
