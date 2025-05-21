import PortfolioLink from "./PorfolioLink";

const EmptyPortfolioBox = ({ title, dis }) => {
    return (
        <div className="w-full h-[204px] bg-[#000000] flex flex-col justify-center items-center gap-2 relative">
            <h3 className="text-[#FFFFFF] text-xl font-bold">{title}</h3>
            <p className="font-normal text-base text-[#AFAFAF]">{dis}</p>

            <PortfolioLink />
        </div>
    )
}

export default EmptyPortfolioBox;