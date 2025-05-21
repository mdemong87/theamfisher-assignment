import { IoHomeOutline } from "react-icons/io5";
import TalktoMeBtn from "./TalktomeButton";

const TopBar = () => {
    return (
        <nav className="col-span-6 lg:col-span-8 headerleftBorder px-[39px] h-full">
            <div className="flex items-center justify-between h-full pr-[53px]">
                <div className="hidden lg:flex items-center gap-[16px]">
                    <div className="bg-red-900 w-[40px] rounded-md h-[40px] flex items-center justify-center bgGredient">
                        <IoHomeOutline className="text-2xl text-[#FFFFFF]" />
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