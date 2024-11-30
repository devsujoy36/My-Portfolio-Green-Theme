import { Link } from "react-router-dom";
import { useState } from "react";
const Navmenu = () => {

    const [signUpToggle, setSignUpToggle] = useState(1);

    const setsignupbtnhidden = () => {

        setSignUpToggle(2)
    }
    if (signUpToggle == 1) {
        return (
            <div className="flex lg:gap-4 gap-1 text-wrap">
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/'}>Home</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/about'}>About</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/courses'}>Courses</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/contact'}>Contact</Link>
                <Link className="active:scale-95  hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/signup'} onClick={setsignupbtnhidden}>Sign Up</Link>
            </div>
        );
    } else {
        return (
            <div className="flex lg:gap-4 gap-1 text-wrap">
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/'}>Home</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/about'}>About</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/courses'}>Courses</Link>
                <Link className="active:scale-95 hover:bg-emerald-500 rounded border border-transparent hover:border px-2 py-2 lg:px-4 lg:py-2" to={'/contact'}>Contact</Link>
            </div>
        );
    }

};

export default Navmenu;