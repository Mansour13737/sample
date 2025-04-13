import Image from "next/image";
import Hero from "./sections/home/Hero";
import About from "./sections/about/page";

export default function Home() {
  return (
   <div className="bg-gray-950">
    <Hero/>
    <About/>
   </div>
  );
}
