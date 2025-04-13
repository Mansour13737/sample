import Image from "next/image";
import Hero from "./sections/home/Hero";
import About from "./sections/about/page";
import ImgCard from "./Components/ImgCard";

export default function Home() {
  return (
   <div className="bg-gray-950">
    <Hero/>
    <About/>
    <ImgCard children ={"The blockchain-powered backbone for decentralized funding, governance, and tokenization. LIFE Protocol enables biotech projects to secure resources, engage communities, and maintain transparency."} hr={'/images/card/card1.png'}/>
   </div>
  );
}
