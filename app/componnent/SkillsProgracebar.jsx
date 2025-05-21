const SkillsPrograceBar = ({ title, score }) => {
    return (
        <div className="w-full h-[55px]">
            <div className="flex items-center justify-between pb-[10px]">
                <h4 className="font-medium text-2xl text-[#E3E3E3]">{title}</h4>
                <span className="text-xl font-medium textGredient">{score}%</span>
            </div>
            <div className="h-[16px] rounded-[25px] bg-[#5a401d]">
                <div className={`${score == 80 ? "w-[80%]" : score == 90 ? "w-[90%]" : "w-[95%]"} h-full rounded-[25px] bgGredient`}>
                </div>
            </div>
        </div >
    )
}

export default SkillsPrograceBar;