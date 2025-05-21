const ResumeSectionSubTitle = ({ headline, children }) => {
    return (
        <div className="flex items-center gap-[10px]">
            <div className="bg-[#333333] h-[32px] w-[32px] flex items-center justify-center">{children}</div>
            <h3 className="font-bold text-2xl text-[#FFFFFF]">{headline}</h3>
        </div>
    )
}

export default ResumeSectionSubTitle;   