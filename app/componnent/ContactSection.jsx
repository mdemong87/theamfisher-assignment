import Input from "./Input";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const ContactSection = () => {
    return (
        <section className="pb-[120px]">
            <SectionWraper>
                <SectionTitle title="Contact" />
                <div className="grid grid-cols-12 w-full gap-[23px]">
                    <Input type={"text"} title={"Fast Name*"} />
                    <Input type={"text"} title={"Fast Name*"} />
                    <Input type={"text"} title={"Fast Name*"} />
                    <Input type={"text"} title={"Fast Name*"} />
                </div>
                <div className="w-full flex flex-col pt-[23px]">
                    <label className="font-medium text-xl pb-[10px] text-[#FFFFFF]" htmlFor='Message'>Message*</label>
                    <div className="w-full h-fit bgGredient opacity-25 p-[1px] rounded-[10px]">
                        <textarea name="Message" className="w-full rounded-[10px] h-[124px] p-5 text-gray-200 bg-[#000000]"></textarea>
                    </div>
                </div>

                <button className="mt-[32px] text-xl rounded-[10px] h-[48px] color-[#FFFFFF] text-center bgGredient w-full cursor-pointer">Send message</button>
            </SectionWraper>
        </section>
    )
}


export default ContactSection;