import { FiDownload } from "react-icons/fi";

const DownloadCvBtn = () => {
    return (
        <button className=" bgGredient px-[22px] py-[10px] sm:px-[24px] sm:py-[12px] rounded-[50px] flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-105 transition-all duration-300">
            <span className="text-base text-white font-bold">Downdolad CV</span>
            <FiDownload className="text-white text-lg" />
        </button>
    )
}


export default DownloadCvBtn;