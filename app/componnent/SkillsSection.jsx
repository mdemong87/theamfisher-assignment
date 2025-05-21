import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";
import SkillsPrograceBar from "./SkillsProgracebar";

const SkillsSection = () => {
    return (
        <section>
            <SectionWraper>
                <SectionTitle title="Skills" />
                <div className="w-full flex flex-col gap-[28px] sm:gap-[32px]">
                    <SkillsPrograceBar title={"UI/UX Design"} score={95} />
                    <SkillsPrograceBar title={"Photography"} score={90} />
                    <SkillsPrograceBar title={"Creativity"} score={80} />
                    <SkillsPrograceBar title={"Team Work"} score={95} />
                    <SkillsPrograceBar title={"Web Design"} score={95} />
                </div>
            </SectionWraper>
        </section>
    )
}

export default SkillsSection;