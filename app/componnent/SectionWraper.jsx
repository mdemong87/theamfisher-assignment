const SectionWraper = ({ children }) => {
    return (
        <div className="w-full h-full grid grid-cols-12 pt-[120px] pl-[24px] md:pl-[125px] lg:pl-[58px] ">
            <div className="h-full w-full hidden lg:block col-span-0 lg:col-span-4"></div>
            <div className="col-span-12 lg:col-span-8 h-full w-full pr-[24px] sm:pr[42px] md:pr-[62px] lg:pr-[92px]">
                {children}
            </div>
        </div>
    )
}

export default SectionWraper;