import Image from "next/image";
import Triangles from "../../../public/traingles.svg";

console.log(Triangles);

export default function About() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-end">
      <Triangles className="absolute bottom-[12vh] left-[50%] translate-x-[-50%]" />
    </div>
  );
}

