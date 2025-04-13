import Button from "./Button";

type CardProps = {
    children : React.ReactNode;
    hr : string;
}

export default function ImgCard ({children,hr}:CardProps) {
    return (
        <div className="p-6 mx-4 rounded-[20px] border-2 border-white bg-white flex flex-col ">
            <div className={`w-full h-[310px] bg-[url('${hr}')] rounded-[16px]`} />
            <div className="flex justify-start items-center  mt-[25px] mb-5 gap-2">
                <Button children = {'$LIFE'} className=" lg:w-[150px] lg:h-[48px] w-fit bg-gradient-to-t lg:mt-0 from-[#025099] to-[#0385FF] text-[16px] font-bold text-white rounded-[8px] px-4 py-1"/>
                <span className="text-[24px] font-medium leading-[100%]">LIFE Protocol</span>
            </div>
            <p className="text-[#080C14] leading-[24px] text-[13px] text-left font-normal">
            {children}
            </p>
        </div>
    ) 
}