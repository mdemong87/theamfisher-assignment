const Input = ({ type, title }) => {
    return (
        <div className="col-span-12 md:col-span-6 w-full flex flex-col">
            <label className="font-medium text-xl pb-[10px] text-[#FFFFFF]" htmlFor={title}>{title}</label>
            <div className="w-full borderGradient opacity-25 p-[1px] rounded-[10px]">
                <input type={type} className="w-full rounded-[10px] h-[48px] p-5 text-gray-200 bg-[#000000] focus:outline-none" name={title} />
            </div>
        </div>
    )
}


export default Input;