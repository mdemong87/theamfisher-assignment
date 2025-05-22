import portfolioOne from "../../public/portfolio-1.png";
import portfolioTwo from "../../public/portfolio-2.png";
import portfolioThree from "../../public/portfolio-3.png";
import portfolioFour from "../../public/portfolio-4.png";
import portfolioFive from "../../public/portfolio-5.png";
import portfolioSix from "../../public/portfolio-6.png";
import portfolioSeven from "../../public/portfolio-7.png";
import EmptyPortfolioBox from "./EmptyPortfolioBox";
import PortfolioCard from "./PortfolioCard";

const PortfoliocardsWraper = ({ activeTab }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[24px]">






            {/* for all portfolio cards */}
            {
                activeTab === "All" && (
                    <div className={`w-full h-fit flex flex-col gap-[24px]`}>
                        <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <div className={`hidden md:block`}>
                            <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                        </div>
                    </div>
                )
            }





            {/* for granphic portfolio cards */}
            {
                activeTab === "Graphic" && (
                    <div className={`w-full h-fit flex flex-col gap-[24px]`}>
                        <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <div className={`hidden md:block`}>
                            <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                        </div>
                    </div>
                )
            }


            {/* for mobile portfolio cards */}
            {
                activeTab === "Mobile" && (
                    <div className={`w-full h-fit flex flex-col gap-[24px]`}>
                        <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <div className={`hidden md:block`}>
                            <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                        </div>
                    </div>
                )
            }



            {/* for photography portfolio cards */}
            {
                activeTab === "Photography" && (
                    <div className={`w-full h-fit flex flex-col gap-[24px]`}>
                        <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <div className={`hidden md:block`}>
                            <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                        </div>
                    </div>
                )
            }



            {/* for UI portfolio cards */}
            {
                activeTab === "UI" && (
                    <div className={`w-full h-fit flex flex-col gap-[24px]`}>
                        <PortfolioCard imageUrl={portfolioThree} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioOne} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioTwo} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />

                        <div className={`hidden md:block`}>
                            <EmptyPortfolioBox title={"Website design"} dis={"Fitness Studio Website"} />
                        </div>
                    </div>
                )
            }




            {/* two collumn devided here */}




            {/* for all portfolio cards */}
            {
                activeTab === "All" && (
                    <div className="w-full h-fit flex flex-col gap-[24px]">
                        <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
                    </div>
                )
            }


            {/* for graphic portfolio cards */}
            {
                activeTab === "Graphic" && (
                    <div className="w-full h-fit flex flex-col gap-[24px]">
                        <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
                    </div>
                )
            }


            {/* for mobile portfolio cards */}
            {
                activeTab === "Mobile" && (
                    <div className="w-full h-fit flex flex-col gap-[24px]">
                        <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />

                        <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
                    </div>
                )
            }


            {/* for photography portfolio cards */}
            {
                activeTab === "Photography" && (
                    <div className="w-full h-fit flex flex-col gap-[24px]">
                        <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
                    </div>
                )
            }

            {/* for UI portfolio cards */}
            {
                activeTab === "UI" && (
                    <div className="w-full h-fit flex flex-col gap-[24px]">
                        <PortfolioCard imageUrl={portfolioSix} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioSeven} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFive} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <PortfolioCard imageUrl={portfolioFour} title={"Figma Mockup"} dis={"Figma mockup PSD editable"} />
                        <EmptyPortfolioBox title={"Photography"} dis={"Photography Project"} />
                    </div>
                )
            }




















        </div >
    )
}


export default PortfoliocardsWraper;    