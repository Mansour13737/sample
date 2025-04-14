import RoadMapCard from "@/app/Components/RoadMapCard"

export default function RoadMap() {
    return (
        <div className="bg-black flex flex-col items-center justify-start pt-[72px] container px-4 w-screen">
            <span className="text-white/50 lg:py-2 py-1 lg:px-4 px-3 text-[10px] lg:text-[14px] font-medium bg-gray-700 rounded-[20px]  ">Roadmap & Vision</span>
            <div className="mt-[10px]">
                <h2 className="text-[24px] font-semibold text-white text-center">Shaping the Future of Biotech Innovation</h2>
                <p className="text-white/50 text-center text-[14px] font-normal mt-[10px]">Our journey is just beginning. Explore the milestones that will revolutionize the intersection of science, blockchain, and AI.</p>
            </div>
            <RoadMapCard/>
        </div>
    )
}