import { FloatingCircles } from "@/components/floating-circles";

export default async function Home() {
  return (
    <div className="relative flex flex-1 flex-col justify-end pb-[24vh]">
      <div className="z-10">
        <h1 className="type-h1 font-serif">Web Developer</h1>
        <h1 className="type-h1 font-serif">Software Engineer</h1>
      </div>

      <div className="absolute bottom-[12vh] left-14">
        <FloatingCircles />
      </div>
    </div>
  );
}
