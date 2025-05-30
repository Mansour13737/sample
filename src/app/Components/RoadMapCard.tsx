
import Image from "next/image";
interface cardProps {
    icon : string;
    phase : string;
    header : string;
    paragraph : string[];
}

export default function RoadMapCard ({icon,phase,header,paragraph} : cardProps) {
    return (
        <div className="border-[1px] backdrop-blur-[8px] w-full rounded-[12px] pt-4 relative flex mb-8 border-[#22F98D]">
            <Image src={icon} alt="No picture" width={300} height={300} className="mx-4 mt-4 self-start"/>
            <div className="mt-4">
                <h4 className="text-[#22F98D] text-[13px]">{phase}</h4>
                <h2 className="text-white text-start mb-4 text-[19px] font-medium">{header}</h2>
                <ul className="text-white text-[14px] font-normal list-disc mb-[25px] mr-[23px]">
                    <li>{paragraph[0]}</li>
                    <li>{paragraph[1]}</li>
                    <li>{paragraph[2]}</li>
                </ul>
            </div>
        </div>
    )
}