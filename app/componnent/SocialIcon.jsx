import Link from "next/link";

const SocialIcon = ({ link, arialLabel, children }) => {
    return (
        <Link href={link} aria-label={arialLabel} className="w-[40px] h-[40px] flex justify-center items-center bg-[#121414] text-[#C5C5C5] text-lg rounded-full transition-all duration-300 hover:bg-linear-to-r from-[#F5BD4D] to-[#F89222] hover:text-white">
            {children}
        </Link>
    )
}


export default SocialIcon;