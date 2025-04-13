type ButtonProps = {
    children: React.ReactNode;       
    onClick?: () => void;           
    className?: string;           
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  };

export default function Button ({children,className} : ButtonProps) {
    return (
        <button className={className}>
            {children}
        </button>
    )
}