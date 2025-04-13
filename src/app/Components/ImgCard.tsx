import Button from "./Button";

type CardProps = {
    children : React.ReactNode;
    hr :  React.ReactNode;
    head? : React.ReactElement;
}

export default function ImgCard ({children,hr,head}:CardProps) {
    return (
        <div className="p-6 mx-4 rounded-[20px] border-2 border-white bg-white flex flex-col ">
            <div className='w-full h-[310px] rounded-[16px] bg-cover bg-center' style={{ backgroundImage: `url(${hr})` }} />
            {head}
            <p className="text-[#080C14] leading-[24px] text-[13px] text-left font-normal">
            {children}
            </p>
        </div>
    ) 
}