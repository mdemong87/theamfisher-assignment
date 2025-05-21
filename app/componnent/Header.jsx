import Logo from "./Logo";
import TopBar from "./TopBar";

const Header = () => {
    return (
        <header className="fixed top-0 w-screen h-[80px] md:h-[96px] lg:h-[106px] grid grid-cols-12 items-center bg-(--foreground) z-40">
            <Logo />
            <TopBar />
        </header>
    )
}

export default Header;