import Image from "next/image";
import Header from "@/app/Components/Header";
import Input from "@/app/Components/Input";
import Button from "@/app/Components/Button";

export default function Hero() {
    return (
        <div className="relative [background-size:120%] [background-position:center_20%] bg-no-repeat bg-[url('/images/hero/hero-bg.png')] h-screen w-screen flex flex-col lg:justify-between justify-start items-center mx-auto">
            {/* Radial Gradient Background Layer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.1)_40%,_rgba(255,255,255,0)_100%)] pointer-events-none" />

            {/* Content */}
            <Header />
            <div className="flex justify-between w-screen relative z-10">
                <div className="container flex flex-col items-start lg:mt-[39px] mt-[240px] mx-auto">
                    <span className="text-white/50 lg:py-2 py-1 lg:px-4 px-3 text-[10px] lg:text-[14px] ml-4 font-medium bg-gray-700 rounded-[20px]">Join the Revolution</span>
                    <span className="text-white font-semibold text-[32px] lg:text-[56px] text-wrap ml-4 mt-3 leading-[100%]">Revolutionizing Biotech</span>
                    <span className="text-white font-medium text-[30px] leading-[100%] lg:text-[56px] text-wrap ml-4">with Blockchain and AI</span>
                    <span className="text-wrap lg:text-[18px] text-[14px] font-normal text-gray-400 lg:mr-[691px] mx-auto mb-[40px] ml-4 leading-[24px] mt-3">
                        Empowering global innovation with decentralized funding, advanced AI, and transparent IP management. Join us in shaping the future of life sciences.
                    </span>
                    <div className="mt-10 block lg:justify-between lg:items-center lg:flex lg:gap-[13px]">
                        <Input placeholder={'Enter your email to join the waitlist...'} />
                        <Button chld={"join the waitlist"} />
                    </div>
                </div>
                <div className="bg-cover bg-center mr-[247.56px] absolute ml-[811.57px] h-[480.50px]">
                    <Image src={'/images/hero/Vector 1.png'} width={380.89} height={480.50} alt="No Picture" />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="hidden lg:flex text-white gap-1 items-center cursor-pointer mb-12 mx-auto justify-center relative z-20">
                <Image src="/images/hero/mouse1.svg" width={24} height={24} alt="Mouse" />
                <span className="py-[3px] hidden lg:block">Scroll down</span>
            </div>

            {/* Fade-out Gradient at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0e0e] to-transparent z-10 pointer-events-none" />
        </div>
    );
}