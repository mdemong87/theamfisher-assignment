const GetStartBtn = () => {
    return (
        <div className="rounded-[8px] w-fit cursor-pointer p-[1.70px] bgGredient mt-[40px]">
            <div className="px-[21px] py-[9px] md:px-[22px] md:py-[10px] bg-(--foreground) rounded-[8px] cursor-pointer  hover:bg-transparent transition-all duration-300 ease-in-out btnParent">
                <button className="font-bold text-base cursor-pointer btnClild" >
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default GetStartBtn;