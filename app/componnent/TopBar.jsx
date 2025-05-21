import Image from "next/image";
import homeicon from "../../public/homeIcons.png";
import TalktoMeBtn from "./TalktomeButton";

const TopBar = () => {
    return (
        <nav className="col-span-6 lg:col-span-8 headerleftBorder px-[24px] lg:px-[39px] h-full">
            <div className="flex items-center justify-end lg:justify-between h-full pr-[0px] lg:pr-[53px]">
                <div className="hidden lg:flex items-center gap-[16px]">
                    <div className="bg-red-900 w-[40px] rounded-md h-[40px] flex items-center justify-center bgGredient">
                        <Image className="w-[18px] h-[18px]" src={homeicon} alt="home_icon" />
                    </div>
                    <h3 className="font-bold text-2xl text-[#FFFFFF]">Home</h3>
                </div>
                <div className="">
                    <TalktoMeBtn />
                </div>
            </div>
        </nav>
    )
}

export default TopBar;