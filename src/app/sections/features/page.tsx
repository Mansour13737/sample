import ImgCard from "@/app/Components/ImgCard"
import Button from "@/app/Components/Button"
import Image from "next/image"

export default function Features() {
    const head = <div className="flex justify-start items-center  mt-[25px] mb-5 gap-2">
        <Button children={'$LIFE'} className=" lg:w-[150px] lg:h-[48px] w-fit bg-gradient-to-t lg:mt-0 from-[#025099] to-[#0385FF] text-[16px] font-bold text-white rounded-[8px] px-4 py-1" />
        <span className="text-[24px] font-medium leading-[100%]">LIFE Protocol</span>
    </div>
    return (
        <div className="flex flex-col justify-start items-center mx-auto pb-[74px]">
            <div className="mt-[94px] mb-[27px] flex flex-col items-center justify-start px-4 bg-black w-screen h-fit">
                <span className="text-white/50 w-fit lg:py-2 py-1 lg:px-4 px-3 text-[10px] lg:text-[14px] font-medium bg-gray-700 rounded-[20px]  ">ABOUT LIFE</span>
                <p className="text-[24px] font-semibold text-white text-center mt-[10px]">Empowering Innovation in Biotechnology</p>
                <p className="text-white/50 text-justify indent-5 mt-[10px] text-[14px] leading-[24px] font-normal">LIFE Technologies is a global biotech ecosystem designed to bridge the gap between groundbreaking scientific research and real-world applications. By combining Web3 tools with advanced AI, we empower innovation, ensure transparency, and drive equitable access to life-saving solutions.</p>
            </div>
            <div className="flex flex-col justify-start items-center gap-4" >
                <ImgCard children={"The blockchain-powered backbone for decentralized funding, governance, and tokenization. LIFE Protocol enables biotech projects to secure resources, engage communities, and maintain transparency."} hr={'/images/card/card1.png'} head={head} />
                <ImgCard children={"Focused research hubs dedicated to developing specific biotech solutions, from seed-stage projects to patented products, all backed by LIFE Protocol’s funding and governance tools."} hr={'/images/card/card2.png'} />
                <ImgCard children={"A cutting-edge AI division providing data insights, licensing automation, and collaborative intelligence to accelerate research and commercialization."} hr={'/images/card/card3.png'} />
            </div>
            <div className="flex flex-col items-center justify-start py-2 px-1">
                <p className="text-6 font-semibold text-white text-center mt-[96px]">Discover Dur Ecosystem</p>
                <p className="text-[14px] text-white text-center mt-3">Learn how LIFE Technologies is driving the future of biotech innovation.</p>
            </div>
            <div className="w-[90%] pb-7 flex flex-col justify-start rounded-[12px] pt-4 items-center mt-8 bg-gradient-to-r from-[#2F1F17] via-[#7A4A2E] to-[#ECA262] rounded-3">
                <div className=" flex flex-col items-center  justify-start">
                    <Image src={'/images/features/Frame50.png'} width={152} height={48} alt="NotFound" />
                    <p className="text-white/50 text-[12px] text-center mt-3">Next-Generation Mosquito Repellent: Safe, Effective, and Sustainable.</p>
                    <Image className="mt-4" src={'/images/features/Frame49.png'} width={86} height={24} alt="NotFound" />
                </div>
            </div>
            <div className="w-[90%] pb-7 flex flex-col justify-start rounded-[12px] pt-4 items-center mt-4 bg-gradient-to-r from-[#082C2A] via-[#1B4D47] to-[#3B7C6E] rounded-3">
                <div className=" flex flex-col items-center  justify-start">
                    <Image src={'/images/features/Frame501.png'} width={152} height={48} alt="NotFound" />
                    <p className="text-white/50 text-[12px] text-center mt-3">transparency, and drive equitable access to life-saving solutions.</p>
                    <Image className="mt-4" src={'/images/features/Frame49.png'} width={86} height={24} alt="NotFound" />
                </div>
            </div>
        </div>
    )
}