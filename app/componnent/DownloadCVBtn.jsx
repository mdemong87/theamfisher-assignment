import { FiDownload } from "react-icons/fi";

const DownloadCvBtn = () => {
    return (
        <button className=" bgGredient px-[24px] py-[12px] rounded-[50px] flex items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300">
            <span className="text-base text-white font-bold">Downdolad CV</span>
            <FiDownload className="text-white text-lg" />
        </button>
    )
}


export default DownloadCvBtn;