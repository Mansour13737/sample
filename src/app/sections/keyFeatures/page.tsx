import Icons from "@/app/Components/icons"
import Image from "next/image"

export default function KeyFeatures() {
    return (
        <div className="mt-[15px] lg:px-[228px] lg:w-screen bg-[rgba(245,245,245)] container px-4 flex flex-col justify-start items-center pb-[53px] ">
            <div className=" pt-[65px] flex flex-col items-center justify-start">
                <span className="text-[#1680F9] w-fit lg:py-2 py-[6px] lg:px-4 px-4 text-[10px] lg:text-[14px] font-medium bg-[#0385FF33] text-wrap rounded-[20px]">ABOUT LIFE</span>
                <h2 className="mt-[10px] mx-auto text-center text-[20px] font-semibold">Why Choose LIFE Protocol?</h2>
                <p className="text-[12px] font-normal mt-[10px] leading-[24px]">Transforming biotech innovation with decentralized science, advanced AI, and transparent governance.</p>
            </div>
            <div className="mt-[60px]">
                <Icons src={"/images/keyFeatures/target-04.png"} width={24} height={24} className={'w-[56px] h-[56px] rounded-[20px] p-4'} />
                <p className="text-5 font-medium">Decentralized Funding</p>
                <p className="font-normal text-[12px] mt-4 leading-[18px] text-[#080C1499]/60">Empower biotech projects with community-driven funding, eliminating traditional bottlenecks and ensuring equitable access to resources.</p>
            </div>
            <div className="h-[218.23px] mt-8 relative w-full">
                <Image className="rounded-[9.81px] top-0 left-[67.84px] absolute" src={'/images/keyFeatures/Frame18.png'} width={273} height={179.82} alt="Not Found" />
                <Image className="rounded-[9.81px] -bottom-[55px] -right-[20px] absolute" src={'/images/keyFeatures/Frame31.png'} width={130} height={130} alt="Not Found" />
                <Image className="rounded-[9.81px] -bottom-[30px] -left-[0px] absolute" src={'/images/keyFeatures/Frame19.png'} width={230} height={180} alt="Not Found" />
            </div>
            <div className="mt-20">
                <Icons src={"/images/keyFeatures/cryptocurrency-01.png"} width={24} height={24} className={'w-[56px] h-[56px] rounded-[20px] p-4'} />
                <p className="text-5 font-medium">Blockchain Transparency</p>
                <p className="font-normal text-[12px] mt-4 leading-[18px] text-[#080C1499]/60">Utilize blockchain technology for secure, trustless governance, milestone tracking, and IP management.</p>
            </div>
            <div className="h-[263px] mt-8 relative w-full">
                <Image className="rounded-[9.81px] top-0 -left-[15PX] absolute" src={'/images/keyFeatures/Frame24.png'} width={330} height={254} alt="Not Found" />
                <Image className="rounded-[9.81px] -bottom-[95px] -right-[15px] absolute" src={'/images/keyFeatures/Frame25.png'} width={220} height={280} alt="Not Found" />
            </div>
            <div className="mt-20">
                <Icons src={"/images/keyFeatures/Group.png"} width={156} height={156} className={'w-[56px] h-[56px] rounded-[20px] p-4'} />
                <p className="text-5 font-medium">AI-Powered Innovation</p>
                <p className="font-normal text-[12px] mt-4 leading-[18px] text-[#080C1499]/60">Leverage advanced AI tools for data analysis, research acceleration, and seamless cross-platform collaboration.</p>
            </div>
            <div className="h-[263px] mt-8 relative w-full">
                <Image className="rounded-[9.81px] top-0 left-[0PX] absolute" src={'/images/keyFeatures/Frame26.png'} width={219} height={220} alt="Not Found" />
                <Image className="rounded-[9.81px] -bottom-[55px] right-[0px] absolute" src={'/images/keyFeatures/Frame27.png'} width={280} height={280} alt="Not Found" />
            </div>

            <div className="mt-20">
                <Icons src={"/images/keyFeatures/triangle-svgrepo-com.svg"} width={56} height={56} className={'w-[56px] h-[56px] rounded-[20px] p-4'} />
                <p className="text-5 font-medium">Real-World Impact</p>
                <p className="font-normal text-[12px] mt-4 leading-[18px] text-[#080C1499]/60">Bridge the gap between research and real-world application with partnerships in global distribution and commercialization.</p>
            </div>
            <div className="h-[263px] mt-8 relative w-full">
                <Image className="rounded-[9.81px] -top-5 -right-[20PX] absolute" src={'/images/keyFeatures/Frame 29.png'} width={289} height={280} alt="Not Found" />
                <Image className="rounded-[9.81px] -bottom-[60px] -left-[10px] absolute" src={'/images/keyFeatures/Frame 30.png'} width={330} height={300} alt="Not Found" />
            </div>
            <div className="mt-20">
                <Icons src={"/images/keyFeatures/target-04.png"} width={56} height={56} className={'w-[56px] h-[56px] rounded-[20px] p-4'} />
                <p className="text-5 font-medium">Empowering IP Commercialization</p>
                <p className="font-normal text-[12px] mt-4 leading-[18px] text-[#080C1499]/60">Ensure fair distribution and licensing of life-saving innovations through tokenized IP rights and transparent frameworks.</p>
            </div>
            <div className="h-[263px] mt-8 relative w-full">
                <Image className="rounded-[9.81px] top-0 right-0 absolute" src={'/images/keyFeatures/Frame 32.png'} width={320} height={280} alt="Not Found" />
                <Image className="rounded-[9.81px] bottom-[30px] -left-[10px] absolute" src={'/images/keyFeatures/Frame 34.png'} width={150} height={150} alt="Not Found" />
            </div>

        </div>
    )
}