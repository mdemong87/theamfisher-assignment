'use-client'

const LanguToolTip = ({ title, Langu, setLangu }) => {


    return (
        <div onClick={() => { setLangu(title) }} className={`flex justify-center items-center rounded-[50%] w-[32px] h-[32px] text-white font-bold text-xs cursor-pointer ${Langu == title ? "bgGredient" : "bg-[#343434]"}`}>
            {title}
        </div>
    )
}

export default LanguToolTip;