import Nav from "./Nav";

const SmallScreenNav = () => {
    return (
        <div className="fixed z-50 inset-x-0 bottom-0 h-14 w-screen px-[24px] flex items-center justify-center bg-(--foreground) md:hidden">
            <Nav />
        </div>
    )
}

export default SmallScreenNav;