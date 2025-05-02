type ButtonProps = {
    chld: React.ReactNode;       
    onClick?: () => void;           
    className?: string;           
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  };

export default function Button ({chld,className} : ButtonProps) {
    return (
        <button className={className}>
            {chld}
        </button>
    )
}