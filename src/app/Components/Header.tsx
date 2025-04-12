export default function Header () {
    return (
        <div className="bg-transparent text-white container flex justify-between items-center lg:mt-[39px] mx-auto w-full">
            <div className="flex justify-between items-center w-full mt-[20px] p-x-[1.73px] mr-4">
            <p className="text-[20px] font-bold lg:font-bold lg:text-[24px] ml-4 ">LIFE.TECH</p>
            <div className="border-white border-t-[1.5px] border-b-[1.5px] block lg:hidden p-y-[6.7px] h-[10px] w-[16.52px]"></div>
            </div>
            <div className="lg:flex hidden text-nowrap justify-around text-[14px] font-normal rounded-[20px] gap-10">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Roadmap</a>
                <a href="#">Join to life</a>
            </div>
        </div>
    )
}