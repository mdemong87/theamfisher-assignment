import Link from "next/link";
import { FaLink } from "react-icons/fa";

const PortfolioLink = () => {
    return (
        <Link href={"https://theamfisher-assignment.vercel.app/"} className="absolute top-[20px] right-[20px] w-fit h-fit p-[5px] text-white bg-[#000000] rounded-full flex justify-center items-center portfolioLinkShadow" aria-label="Portfolio Link">
            <FaLink className="text-[10px]" />
        </Link>
    )
}

export default PortfolioLink;