import Input from "./Input";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const ContactSection = () => {
    return (
        <section className="pb-[90px] md:pb-[60px]">
            <SectionWraper>
                <SectionTitle title="Contact" />
                <div className="grid grid-cols-12 w-full gap-[23px]">
                    <Input type={"text"} title={"Fast Name*"} nameId={"fasttName"} />
                    <Input type={"text"} title={"Last Name*"} nameId={"lastName"} />
                    <Input type={"email"} title={"Email*"} nameId={"email"} />
                    <Input type={"phone"} title={"Phone*"} nameId={"phone"} />
                </div>
                <div className="w-full flex flex-col pt-[23px]">
                    <label className="font-medium text-lg md:text-xl pb-[10px] text-[#FFFFFF]" htmlFor='Message'>Message*</label>
                    <div className="w-full h-[124px] inputfiledParant p-[1px] rounded-[10px]">
                        <textarea name="Message" id="Message" className="w-full rounded-[10px] inputfiled h-[121px] p-5 text-gray-200 bg-[#000000]"></textarea>
                    </div>
                </div>

                <button className="mt-[32px] text-xl rounded-[10px] h-[48px] color-[#FFFFFF] text-center bgGredient w-full cursor-pointer hover:scale-105 transition-all duration-300">Send message</button>
            </SectionWraper>
        </section>
    )
}


export default ContactSection;