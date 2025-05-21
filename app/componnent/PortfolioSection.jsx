import PortfolioTabs from "./PortfolioTabs";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const PortfolioSection = () => {
    return (
        <section>
            <SectionWraper>
                <SectionTitle title={"Portfolio"} />
                <div>


                    <PortfolioTabs />









                </div>
            </SectionWraper>
        </section>
    )
}

export default PortfolioSection;