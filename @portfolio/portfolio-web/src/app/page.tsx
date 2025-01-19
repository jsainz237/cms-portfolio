import { FloatingCircles } from "@/components/floating-circles";

export default async function Home() {
  return (
    <div className="mr-12 flex flex-1 animate-page-fade-in flex-col items-end justify-end pb-[12vh]">
      <div className="relative">
        <FloatingCircles />
        <div className="absolute left-0 top-10 z-10">
          <h1 className="type-h1 font-serif max-sm:text-3xl max-[380px]:text-2xl">
            Web Developer
          </h1>
          <h1 className="type-h1 font-serif max-sm:text-3xl max-[380px]:text-2xl">
            Software Engineer
          </h1>
        </div>
      </div>
    </div>
  );
}
