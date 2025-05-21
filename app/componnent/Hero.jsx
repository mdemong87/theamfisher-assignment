import CopyRight from "./CopyRight";
import HeroContent from "./HeroContent";
import HeroLeftSideWrper from "./HeroLeftSideWrper";
import LeftsideAndRightsideShadow from "./LeftsideAndRightsideShadow";

const Hero = ({ children }) => {
    return (
        <section className="h-screen w-screen">
            <div className="w-full h-full grid grid-cols-12 heroTopPadding">
                <div className="h-full w-full col-span-0 md:col-span-1 lg:col-span-4 hidden md:flex justify-between">
                    <HeroLeftSideWrper />
                </div>
                <div className="col-span-12 md:col-span-11 lg:col-span-8 h-full w-full flex justify-between">
                    <HeroContent />
                    <LeftsideAndRightsideShadow>
                        <CopyRight />
                    </LeftsideAndRightsideShadow>
                </div>
            </div>
        </section>
    )
}

export default Hero;