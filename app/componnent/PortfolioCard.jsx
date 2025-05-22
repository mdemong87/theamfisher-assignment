import Image from "next/image";
import PortfolioLink from "./PorfolioLink";



const PortfolioCard = ({ title, dis, imageUrl }) => {
    return (
        <div className="w-full h-fit bg-[#000000] relative overflow-hidden portfoliomask">
            <Image src={imageUrl} alt={`Portfolio_Card_Image_for_${title}`} className="w-full" />
            <div className="hidden group absolute top-0 left-0 w-full h-full bg-[#000000] opacity-80 flex flex-col justify-center items-center gap-2 pMask">
                <h3 className="text-[#FFFFFF] text-xl font-bold">{dis}</h3>
                <p className="font-normal text-base text-[#AFAFAF]">{dis}</p>
                <PortfolioLink />
            </div>

        </div>
    )
}

export default PortfolioCard;