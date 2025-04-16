import RoadMapCard from "@/app/Components/RoadMapCard"

export default function RoadMap() {
    const icons = [
        "/images/roadmap/sun-setting-01.svg",
        "/images/roadmap/cube-04.svg",
        "/images/roadmap/globe-05.svg",
    ]
    const phase = [
        "PHASE 1:",
        "PHASE 2:",
        "PHASE 3:"
    ]
    const headers = [
        "Immediate Goals (0–6 Months)",
        "Mid-Term Goals (6–12 Months)",
        "Long-Term Vision (12+ Months)",
    ]
    const paragraphs = [
        [
            "Launch LIFE Protocol and initiate the first curated LIFE Lab. Pilot Apollo AI integration for milestone verification and R&D acceleration. Begin partnerships for global distribution and commercialization.",
            "Pilot Apollo AI integration for milestone verification and R&D acceleration.",
            "Begin partnerships for global distribution and commercialization.",
        ],
        [
            "Expand LIFE Labs with multiple curated and seed-stage projects.",
            "Strengthen AI integration across labs for licensing, data analysis, and governance.",
            "Develop strategic partnerships with global biotech leaders.",
        ],
        [
            "Scale to multiple biotech verticals, including neglected diseases and public health.",
            "Build partnerships to bring innovations to underserved communities.",
            "Establish LIFE Protocol as the global standard for decentralized biotech governance."

        ]
    ]


    return (
        <div className="bg-black relative flex flex-col items-center justify-start pt-[72px] container px-4 w-screen">
            <span className="text-white/50 lg:py-2 py-2 lg:px-4 px-8 text-[14px] lg:text-[14px] font-medium bg-white/10 rounded-[20px]  ">Roadmap & Vision</span>
            <div className="mt-[10px] mb-4">
                <h2 className="text-[30px] font-semibold  text-white text-center">Shaping the Future of Biotech Innovation</h2>
                <p className="text-white/50 text-center text-[14px] font-normal mt-[10px]">Our journey is just beginning. Explore the milestones that will revolutionize the intersection of science, blockchain, and AI.</p>
            </div>
            <div className=" relative bg-[url('/images/roadmap/Background09.png')] bg-cover bg-start bg-no-repeat ">
            <div className="w-[2px] absolute -top-[240px] left-[27px] h-full opacity-30 bg-gradient-to-b from-[#22F98D00]/0 via-[#22F98DBD]/74 to-[#22F98D]"></div>
            <RoadMapCard icon={icons[0]} phase={phase[0]} header={headers[0]} paragraph={paragraphs[0]} />
            <RoadMapCard icon={icons[1]} phase={phase[1]} header={headers[1]} paragraph={paragraphs[1]} />
            <RoadMapCard icon={icons[2]} phase={phase[2]} header={headers[2]} paragraph={paragraphs[2]} />
            </div>
        </div>
    )
}