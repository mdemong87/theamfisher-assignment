import DownloadCvBtn from "./DownloadCVBtn";

const HeroContent = () => {
    return (
        <div className=" w-full h-full flex items-center -mt-[30px] md:mt-[50px]">
            <div className="h-fit w-full md:w-[85%] pl-[24px] pr-[24px] md:pr-[0px] md:pl-[39px]">
                <span className="textGredient text-sm sm:text-bsae font-bold pb-[12px]">INTRODUCTION</span>
                <h1 className="font-bold text-4xl sm:text-5xl leading-[46px] sm:leading-[63px] pb-[18px]">
                    I'm a Creative Developer & <br />
                    UI/UX Design Expert
                </h1>

                <h5 className="text-sm sm:text-base font-bold">24 years   /   Robert Smith   /   UK London</h5>
                <p className="font-medium text-sm sm:text-base text-[#C6C6C6] pt-[24px] md:pt-[36px] pb-[26px] md:pb-[38px]">
                    Prolific, full stack web developer with a passion for metrics and beating former
                    "best-yets. Prototyped 25 new product features per year for Flexor, Inc.
                    Decreased rework by 22% and costs by 15%. Consistently receive high
                    user experience scores for all web development projects, including a
                    55% increase for Flexor, Inc. Passionate about building world class web
                    applications. One of my sites received a 2020 Webby for Best
                    Navigation and Structure.
                </p>

                <DownloadCvBtn />

            </div>
        </div>
    )
}

export default HeroContent;