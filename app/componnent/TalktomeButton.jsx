const TalktoMeBtn = () => {
    return (
        <div className="rounded-[50px] w-fit cursor-pointer p-[1.70px] bgGredient">
            <div className="px-[21px] py-[9px] md:px-[22px] md:py-[10px] bg-(--foreground) rounded-[50px] cursor-pointer  hover:bg-transparent transition-all duration-300 ease-in-out btnParent">
                <button className="font-bold text-base cursor-pointer btnClild" >
                    Talk to Me
                </button>
            </div>
        </div>
    )
}

export default TalktoMeBtn;