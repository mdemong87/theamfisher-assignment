'use client'

const PortfolioTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="rounded-[6px] h-[60px] bg-[#000000] tabbarshadow overflow-hidden">
            <ul className="flex items-end justify-between md:justify-evenly gap-0 md:gap-4 w-full h-full px-0 md:px-4">
                <li onClick={() => { setActiveTab("All") }} className={`text-sm md:text-base font-normal pb-3 text-center w-full cursor-pointer ${activeTab === "All" ? "textGredient barbottomborder" : ""}`}>
                    All
                </li>
                <li onClick={() => { setActiveTab("Graphic") }} className={`text-sm md:text-base font-normal pb-3 text-center w-full cursor-pointer ${activeTab === "Graphic" ? "textGredient barbottomborder" : ""}`}>
                    Graphic Design
                </li>
                <li onClick={() => { setActiveTab("Mobile") }} className={`text-sm md:text-base font-normal pb-3 text-center w-full cursor-pointer ${activeTab === "Mobile" ? "textGredient barbottomborder" : ""}`}>
                    Mobile App
                </li>
                <li onClick={() => { setActiveTab("Photography") }} className={`text-sm md:text-base font-normal pb-3 text-center w-full cursor-pointer ${activeTab === "Photography" ? "textGredient barbottomborder" : ""}`}>
                    Photography
                </li>
                <li onClick={() => { setActiveTab("UI") }} className={`text-sm md:text-base font-normal pb-3 text-center w-full cursor-pointer ${activeTab === "UI" ? "textGredient barbottomborder" : ""}`}>
                    UI/UX Design
                </li>
            </ul>
        </div>
    )
}


export default PortfolioTabs;


