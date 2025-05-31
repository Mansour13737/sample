import Image from "next/image"

interface benefitProps {
    title : string;
    src : string;
    firstHeader : string;
    secondHeader : string;
    thirdHeader : string;
    firstPara : string;
    secondPara : string;
    thirdPara : string;
}

export default function BenefitCard (props : benefitProps) {
    return (
        <div className="mt-8 bg-white rounded-[20px] pb-[28px] px-10 flex flex-col justify-start pt-[28px] items-center container">
            <Image src={props.src} width={40} height={40} alt="No Picture" loading="lazy"/>
            <span className="text-[24px] font-semibold">{props.title}</span>
            <div className="text-center">
                <h2 className="font-medium text-[16px] mt-[48px] mb-2">{props.firstHeader}</h2>
                <p className="text-[#080C1499]/60 text-[12px] font-normal ">{props.firstPara}</p>
            </div>
            <div className="border-[#E8E8E8] border-[1px] w-full mt-5"></div>
            <div className="text-center">
                <h2 className="font-medium text-[16px] mt-5 mb-2">{props.secondHeader}</h2>
                <p className="text-[#080C1499]/60 text-[12px] font-normal ">{props.secondPara}</p>
            </div>
            <div className="border-[#E8E8E8] border-[1px] w-full mt-5"></div>
            <div className="text-center">
                <h2 className="font-medium text-[16px] mt-5 mb-2">{props.thirdHeader}</h2>
                <p className="text-[#080C1499]/60 text-[12px] font-normal ">{props.thirdPara}</p>
            </div>
        </div>
    )
}