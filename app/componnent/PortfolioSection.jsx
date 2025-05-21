import PortfolioTabandCardWraper from "./PortfolioTab&CardWraper";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const PortfolioSection = () => {
    return (
        <section>
            <SectionWraper>
                <SectionTitle title={"Portfolio"} />
                <PortfolioTabandCardWraper />
            </SectionWraper>
        </section>
    )
}

export default PortfolioSection;