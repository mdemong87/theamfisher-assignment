import blogone from "../../public/blog-1.png";
import blogtwo from "../../public/blog-2.png";
import blogthree from "../../public/blog-3.png";
import blogfour from "../../public/blog-4.png";
import blogfive from "../../public/blog-5.png";
import blogsix from "../../public/blog-6.png";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
import SectionWraper from "./SectionWraper";

const BlogSection = () => {
    return (
        <section>
            <SectionWraper>
                <SectionTitle title={"Blog"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <div className="w-full h-fit flex flex-col gap-[60px]">
                        <BlogCard title={"TThe artist vocation is to send light into the human heart."} tag={"Photography  |  28 Apr 2022"} imageUrl={blogone} />

                        <BlogCard title={"There are countless versions of lorem ipsum, the most famous."} tag={"Graphic design |  28 Apr 2022"} imageUrl={blogtwo} />

                        <BlogCard title={"UI Interactions of the week"} tag={"Design |  28 Apr 2022"} imageUrl={blogthree} />

                    </div>
                    <div className="w-full h-fit flex flex-col gap-[60px]">
                        <BlogCard title={"The mission of art is to represent nature not to imitate her."} tag={"Adventure |  28 Apr 2022"} imageUrl={blogfour} />

                        <BlogCard title={"The principles of true art is not to portray, but to evoke."} tag={"Travel |  28 Apr 2022"} imageUrl={blogfive} />

                        <BlogCard title={"Party Jokes Startling But Unnecessary"} tag={"Travel |  28 Apr 2022"} imageUrl={blogsix} />

                    </div>
                </div>
            </SectionWraper>
        </section>
    )
}

export default BlogSection;