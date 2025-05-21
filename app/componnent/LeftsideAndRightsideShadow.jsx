const LeftsideAndRightsideShadow = ({ IsLeft, children }) => {

    return (
        <div className="w-[92px] relative">
            <div className="absolute flex flex-col h-full w-full -z-10">
                <div className="w-full h-1/4">
                </div>
                <div className="w-full h-3/4 bg-(--foreground)">
                    <div className={`${IsLeft ? "tringlePathleft" : "tringlePathright"}`}></div>
                </div>
            </div>
            {children}
        </div>
    )
}


export default LeftsideAndRightsideShadow;