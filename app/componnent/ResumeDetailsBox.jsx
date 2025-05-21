const ResumeDetailsBox = ({ title, subtitle }) => {
    return (
        <div className="w-fit border border-[#FFFFFF1A] bg-[#121414] rounded-[8px] p-[20px]">
            <h4 className="text-lg font-bold textGredient">{title}</h4>
            <span className="text-xs text-[#8F8F8F] font-normal pt-[8px]">{subtitle}</span>
            <p className="text-base text-[#B7B7B7] font-normal pt-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum
                eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas.
            </p>
        </div>
    )
}


export default ResumeDetailsBox;

