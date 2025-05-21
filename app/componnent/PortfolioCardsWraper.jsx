import portfolioOne from "../../public/portfolio-1.png";
import portfolioTwo from "../../public/portfolio-2.png";
import portfolioThree from "../../public/portfolio-3.png";
import portfolioFour from "../../public/portfolio-4.png";
import portfolioFive from "../../public/portfolio-5.png";
import portfolioSix from "../../public/portfolio-6.png";
import portfolioSeven from "../../public/portfolio-7.png";
import EmptyPortfolioBox from "./EmptyPortfolioBox";
import PortfolioCard from "./PortfolioCard";

const PortfoliocardsWraper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[24px]">
            <div className="w-full h-fit flex flex-col gap-[24px]">
                <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <div className="hidden md:block">
                    <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                </div>

            </div>
            <div className="w-full h-fit flex flex-col gap-[24px]">
                <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
            </div>
        </div>
    )
}


export default PortfoliocardsWraper;    