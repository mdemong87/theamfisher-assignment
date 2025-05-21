const PortfolioTabs = () => {
    return (
        <div className="rounded-[6px] h-[60px] bg-[#000000] tabbarshadow overflow-hidden">
            <ul className="flex items-center justify-evenly w-full h-full">
                <li className="textGredient text-base font-normal barbottomborder w-full">
                    All
                </li>
                <li className="text-base w-full font-normal barbottomborder">
                    Graphic Design
                </li>
                <li className="text-base w-full font-normal">
                    Mobile App
                </li>
                <li className="text-base w-full font-normal">
                    Photography
                </li>
                <li className="text-base w-full font-normal">
                    UI/UX Design
                </li>
            </ul>
        </div>
    )
}


export default PortfolioTabs;


