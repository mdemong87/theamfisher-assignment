import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const PricingSection = () => {
    return (
        <section>
            <SectionWraper>
                <SectionTitle title='Pricing' />
                <div className="grid grid-cols-12 gap-[24px]">

                    <PricingCard batch={"Intro"} price={"29"} items={["Interface Design", "Front-end Code", "Back-end Development", "Search Engine Optimization", "Awesome Support", "Responsive site", "Easy in use", "Useful site", "Speedy web"]} delItemsIndex={[3, 4, 5, 6, 7, 8]} />

                    <PricingCard batch={"Base"} price={"48"} items={["Interface Design", "Front-end Code", "Back-end Development", "Search Engine Optimization", "Awesome Support", "Responsive site", "Easy in use", "Useful site", "Speedy web"]} delItemsIndex={[4, 6, 7, 8]} />

                    <PricingCard batch={"Popular"} price={"99"} items={["Interface Design", "Front-end Code", "Back-end Development", "Search Engine Optimization", "Awesome Support", "Responsive site", "Easy in use", "Useful site", "Speedy web"]} delItemsIndex={[6, 7, 8]} />

                    <PricingCard batch={"Enterprise"} price={"199"} items={["Interface Design", "Front-end Code", "Back-end Development", "Search Engine Optimization", "Awesome Support", "Responsive site", "Easy in use", "Useful site", "Speedy web"]} delItemsIndex={[]} />

                </div>
            </SectionWraper>
        </section>
    )
}

export default PricingSection;