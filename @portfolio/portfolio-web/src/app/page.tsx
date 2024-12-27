import { FloatingCircles } from "@/components/floating-circles";

export default async function Home() {
  return (
    <div className="relative flex-1 flex flex-col justify-end pb-[15%]">
      <div className="z-10">
        <h1 className="type-h1 font-serif">Web Developer</h1>
        <h1 className="type-h1 font-serif">Software Engineer</h1>
      </div>

      <div className="absolute bottom-[12%] left-14">
        <FloatingCircles />
      </div>
    </div>
  );
}
