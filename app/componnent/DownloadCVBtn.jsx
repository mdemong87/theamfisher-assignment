'use client'

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Loder from "./Loder";

const DownloadCvBtn = () => {

    const [isLoading, setIsLoading] = useState(false);



    //handle download function for download the CV
    function handleDownload() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }

    return (
        <button disabled={isLoading} onClick={() => { handleDownload() }} className=" bgGredient px-[22px] py-[10px] sm:px-[24px] sm:py-[12px] rounded-[50px] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:scale-105 transition-all duration-300 w-[187] h-[42px] sm:w-[197px] sm:h-[48px]">
            {
                isLoading ? (
                    <Loder />
                ) : (
                    <>
                        <span className="text-base text-white font-bold">Downdolad CV</span>
                        <FiDownload className="text-white text-lg" />
                    </>
                )
            }
        </button >
    )
}


export default DownloadCvBtn;