import Hero from "./sections/home/Hero";
import Features from "./sections/features/page";
import KeyFeatures from "./sections/keyFeatures/page";
import Benefit from "./sections/benefit/page";
import RoadMap from "./sections/roadmap/page";

export default function Home() {
  return (
   <div className="bg-gray-950">
    <Hero/>
    <Features/>
    <KeyFeatures/>
    <Benefit/>
    <RoadMap/>
   </div>
  );
}
