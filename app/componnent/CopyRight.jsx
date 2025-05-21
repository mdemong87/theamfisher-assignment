import LanguToolTipWraper from "./LanguToolTipWraper";

const CopyRight = () => {
    return (
        <div className="w-full h-full flex justify-center items-end pb-[60px]">
            <div className="h-fit w-fit flex flex-col items-center justify-center gap-[44px]">
                <div className="rotate-90 -translate-y-[145px] w-[400px]">
                    <p className="text-sm text-[#A5A5A5]">© design by themefisher developed by gethugothemes</p>
                </div>
                <LanguToolTipWraper />
            </div>
        </div>
    )
}

export default CopyRight;