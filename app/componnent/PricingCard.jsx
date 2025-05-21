import GetStartBtn from "./GetStartBtn";

const PricingCard = ({ batch, price, items, delItemsIndex }) => {
    return (
        <div className="w-full py-[48px] col-span-12 md:col-span-6 bg-[#000000]">
            <div className="flex justify-center items-center w-fit rounded-r-[50px] font-bold text-base py-[12px] px-[24px] cardbaseGradient">
                {batch}
            </div>
            <div className="p-[24px] pb-[0px]">
                <div className="pb-[30px] flex items-end gap-1">
                    <h2 className="font-bold text-4xl sm:text-5xl text-whtie">${price}</h2>
                    <span className="text-whtie font-medium text-xl">/</span>
                    <span className="text-whtie font-medium text-lg">month</span>
                </div>
                <div className="bg-[#121414] px-[16px] py-[24px]">
                    <ul className="flex flex-col gap-[16px]">

                        {
                            items.map((item, index) => {
                                if (delItemsIndex.includes(index)) {
                                    return (
                                        <li key={index} className="text-base font-normal text-[#979797]">
                                            <del>{item}</del>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index} className="text-base font-normal text-[#FFFFFF]">
                                            {item}
                                        </li>
                                    )
                                }
                            })
                        }

                    </ul>
                </div>
                <div>
                    <GetStartBtn />
                </div>
            </div>
        </div>
    )
}

export default PricingCard;