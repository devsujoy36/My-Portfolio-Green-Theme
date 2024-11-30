import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [logEmail, setLogEmail] = useState('')
    const [logPass, setLogPass] = useState('')
    const [code, setCode] = useState('')
    const [otp, setOTP] = useState('')



    const submitHandler = (e) => {
        e.preventDefault();
    };

    const info = { firstName: fname, lastName: lname, Email: email, Password: pass }
    const signupbtn = () => {
        // console.log(info);
        if (pass == "" && email == "") {
            alert('Enter your Email first')
        } else {
            let a = 5;
            a = Math.random(a) * 9999;
            a = parseInt(a)
            setOTP(a)
            setToggle(2)
        }
    }

    const confirmBtn = () => {
        // console.log(info);
        // console.log(code);
        // console.log(otp);
        if (code == "") {
            alert('Enter The OTP First')
        }
        else if (otp == code) {
            setToggle(3)

        } else {
            alert("Invalid Code")
        }
    }

    const [toggle, setToggle] = useState(1)

    if (toggle == 1) {
        return (
            <div className="h-dvh text-white lg:mx-4">
                <div className="mx-12 lg:mx-auto py-16">
                    <h1 className="text-center font-bold text-emerald-600 text-4xl p-4">Sign Up</h1>
                    <form onSubmit={(e) => { submitHandler(e); }} className="border lg:w-96 mx-auto rounded-lg font-semibold  text-white p-7 flex flex-col gap-3 justify-center ">
                        <label className="text-black" htmlFor="fname">First Name  </label>
                        <input required
                            onKeyUp={(e) => { setFname(e.target.value); }}
                            type="text"
                            placeholder="Enter Your First Name"
                            id="fname"
                            className="text-black px-4 py-2 rounded border" />

                        <label className="text-black" htmlFor="lname">Last Name  </label>
                        <input required
                            onKeyUp={(e) => { setLname(e.target.value); }}
                            type="text"
                            placeholder="Enter Your Last Name"
                            id="lname"
                            className="text-black px-4 py-2 rounded border" />

                        <label className="text-black" htmlFor="email">Email  </label>
                        <input required
                            onKeyUp={(e) => { setEmail(e.target.value); }}
                            type="email"
                            placeholder="Enter Your Email"
                            id="email"
                            className="text-black px-4 py-2 rounded border" />

                        <label className="text-black" htmlFor="pass">Password  </label>
                        <input required
                            onKeyUp={(e) => { setPass(e.target.value); }}
                            type="password"
                            placeholder="Set Password"
                            id="pass"
                            className="text-black px-4 py-2 rounded border" />
                        <button onClick={signupbtn} className="bg-emerald-600 px-4 py-2 rounded active:scale-95 hover:bg-emerald-500">Sign Up</button>
                    </form>
                </div>
            </div>
        );

    }
    else if (toggle == 2) {
        return (
            <div className="h-dvh text-white lg:mx-4">
                <div className="mx-12  py-16">
                    <form onSubmit={(e) => { submitHandler(e); }} className="border lg:w-96 md:w-96 mx-auto rounded-lg font-semibold  text-white p-7 flex flex-col gap-3 justify-center ">

                        <h1 className="text-center text-black text-xl font-bold ">Use Your OTP on <br /><span className="text-emerald-600">{email}</span> is <br /> <span className="text-emerald-600"> {otp}</span></h1>
                        <input
                            onKeyUp={(e) => { setCode(e.target.value); }}
                            type="number"
                            placeholder="Enter The OTP"
                            id="otp"
                            className="text-black px-4 py-2 rounded border" />

                        <button onClick={confirmBtn} className="bg-emerald-600 px-4 py-2 rounded active:scale-95 hover:bg-emerald-500">Confirm</button>
                    </form>
                </div>
            </div>
        );

    }
    else if (toggle == 3) {
        return (
            <div className="h-dvh text-white lg:mx-4">
                <div className="mx-12 lg:mx-auto py-16 ">
                    <h1 className="text-center text-emerald-600 font-bold text-4xl p-4">Log In</h1>
                    <form onSubmit={(e) => { submitHandler(e); }} className="border lg:w-96 mx-auto rounded-lg font-semibold  text-white p-7 flex flex-col gap-3 justify-center ">
                        <label className="text-black" htmlFor="email">Email  </label>
                        <input required
                            onKeyUp={(e) => { setLogEmail(e.target.value); }}
                            type="email"
                            placeholder="Enter Your Email"
                            id="email"
                            className="text-black px-4 py-2 rounded border" />

                        <label className="text-black" htmlFor="pass">Password  </label>
                        <input required
                            onKeyUp={(e) => { setLogPass(e.target.value); }}
                            type="password"
                            placeholder="Enter Your Password"
                            id="pass"
                            className="text-black px-4 py-2 rounded border" />

                        <Link to={'/'} className="bg-emerald-600 text-center px-4 py-2 rounded active:scale-95 hover:bg-emerald-500">Log In</Link>
                    </form>
                </div>
            </div>
        );

    }
};

export default Signup;