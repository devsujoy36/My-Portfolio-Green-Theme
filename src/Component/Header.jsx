import { Link } from "react-router-dom";
import Navmenu from "./MiniComponent/Navmenu";

const Header = () => {

    return (
        <div className=" shadow-xl bg-[#26d67e]">
            <nav className="lg:mx-32  flex lg:justify-between items-center lg:flex-row flex-col px-4 lg:px-6 lg:py-6 p-4 text-white font-semibold ">
                <Link className="text-3xl p-1 font-bold" to={'/'}>Xenon Store</Link>
                <Navmenu />
            </nav>
        </div>
    );


};

export default Header;