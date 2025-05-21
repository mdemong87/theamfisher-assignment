import Image from "next/image";


const BlogCard = ({ title, tag, imageUrl }) => {
    return (
        <div className="w-full h-fit bg-[#000000] overflow-hidden">
            <Image src={imageUrl} alt={title} className="w-full" />
            <div className="p-[24px]">
                <span className="text-xs text-[#747474] font-normal">{tag}</span>
                <h2 className="text-xl leading-[25px] font-bold text-lg text-[#FFFFFF] pt-[10px]">
                    {title}
                </h2>
                <p className="text-[#979797] text-sm font-normal pt-[16px]">
                    Lorem Ipsum is simply dummy text the
                    printing typesetting industry. Lorem
                    Ipsum has been...
                </p>
                <div className="flex items-center gap-3 mt-[24px]">
                    <span className="textGredient">&mdash;</span>
                    <span className="text-[#FFFFFF] font-normal text-sm">Posted By Daryl Smith</span>
                    <span className="textGredient">&mdash;</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;