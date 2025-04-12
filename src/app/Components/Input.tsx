type inputProps = {
    placeholder : string;
    
}


export default function ({placeholder}: inputProps) {
    return (
        <input type='text'
        placeholder = {placeholder}
        className="bg-white px-4 pt-[14px] pb-[15px] rounded-[8px] lg:w-[421px] h-[48px] w-screen "
        />
    )
}