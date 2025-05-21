const Input = ({ type, title, nameId }) => {
    return (
        <div className="col-span-12 md:col-span-6 w-full flex flex-col">
            <label className="font-medium text-lg md:text-xl pb-[10px] text-[#FFFFFF]" htmlFor={nameId}>{title}</label>
            <div className="w-full p-[1px] rounded-[10px] inputfiledParant">
                <input type={type} className="w-full rounded-[10px] h-[48px] p-5 text-gray-200 bg-[#000000] inputfiled" name={nameId} id={nameId} />
            </div>
        </div>
    )
}


export default Input;