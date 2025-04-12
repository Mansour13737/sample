type ButtonProps = {
    children: React.ReactNode;       
    onClick?: () => void;           
    className?: string;           
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  };

export default function Button ({children} : ButtonProps) {
    return (
        <button className="px-5 lg:w-[150px] lg:h-[48px] w-screen bg-gradient-to-t mt-[13px] lg:mt-0 from-[#025099] to-[#0385FF] text-[14px] font-semibold text-white rounded-[8px] pt-[14px] pb-[15px]">
            {children}
        </button>
    )
}