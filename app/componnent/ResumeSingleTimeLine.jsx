import ResumeDetailsBox from "./ResumeDetailsBox";
import Timeline from "./Timeline";

const ResumeSingleTimeLine = ({ timeline, title, subtitle }) => {
    return (
        <div className="mt-5 -translate-x-[12px] flex flex-col gap-[12px]">
            <div className="flex gap-9 items-center">
                <div className="w-[16px] h-[16px] rotate-45 border-[2px] border-[#646464] bg-[#121414]" />
                <Timeline timeline={timeline} />

            </div>
            <div className="flex gap-9 items-center">
                <div className="w-[16px] h-[16px] invisible" />
                <ResumeDetailsBox title={title} subtitle={subtitle} />
            </div>
        </div>
    )
}

export default ResumeSingleTimeLine;