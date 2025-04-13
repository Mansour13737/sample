import Image from "next/image"

interface Icons {
    src : string;
    width : number;
    height : number;
    className? : string;
}

export default function Icons ({src,width,height,className}: Icons) {
    return (
        <div className={`bg-white ${className}`}>
            <Image src={src} width={width} height={height} alt="Not Found"/>
        </div>
    )
}