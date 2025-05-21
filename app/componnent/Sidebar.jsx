import LeftsideAndRightsideShadow from "./LeftsideAndRightsideShadow";
import Nav from "./Nav";


const Sidebar = () => {
    return (
        <LeftsideAndRightsideShadow IsLeft>
            <div className="h-full w-full z-10 flex justify-center items-center">
                <Nav />
            </div>
        </LeftsideAndRightsideShadow>
    )
}


export default Sidebar;