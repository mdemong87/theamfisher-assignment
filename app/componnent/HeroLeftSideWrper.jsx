import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import profile from "../../public/profile.png";
import Sidebar from "./Sidebar";
import SocialIcon from "./SocialIcon";

const HeroLeftSideWrper = () => {
    return (
        <>
            <Sidebar />
            <div className="bg-[#000000] hidden lg:flex flex-col justify-end w-full">
                <div className="flex justify-center">
                    <Image height={1000} width={1000} priority src={profile} alt="Daryl-smith-Profile-picture" />
                </div>
                <div className="bg-[#000000] herosocialboxshadow h-[75px] flex justify-center items-center gap-[16px]">
                    <SocialIcon link={"https://theamfisher-assignment.vercel.app/"}>
                        <FaFacebookF />
                    </SocialIcon>
                    <SocialIcon link={"https://theamfisher-assignment.vercel.app/"}>
                        <FaLinkedinIn />
                    </SocialIcon>
                    <SocialIcon link={"https://theamfisher-assignment.vercel.app/"}>
                        <FaPinterestP />
                    </SocialIcon>
                    <SocialIcon link={"https://theamfisher-assignment.vercel.app/"}>
                        <FaInstagram />
                    </SocialIcon>
                    <SocialIcon link={"https://theamfisher-assignment.vercel.app/"}>
                        <FaTwitter />
                    </SocialIcon>
                </div>
            </div>
        </>
    )
}

export default HeroLeftSideWrper;