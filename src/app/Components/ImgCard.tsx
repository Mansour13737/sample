type CardProps = {
    chld : React.ReactNode;
    hr :  React.ReactNode;
    head? : React.ReactElement;
    cls : string;
    card:string;
    para:string;
}   

export default function ImgCard ({chld,hr,head,cls,card,para}:CardProps) {
    return (
        <div className={card}>
            <div className={cls} style={{ backgroundImage: `url(${hr})` }} />
            {head}
            <p className={para}>
            {chld}
            </p>
        </div>
    ) 
}