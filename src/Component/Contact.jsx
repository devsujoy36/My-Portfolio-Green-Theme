

const Contact = () => {
    return (
        <div className="border my-8 bg-gray-100">

            <div id="left" className="flex flex-col">
                <h1>Send A Message</h1>
                <form action="">
                    <div className="grid grid-cols-2">
                        <input className="borde r" type="text" />
                        <input className="borde r" type="text" />
                        <input className="borde r" type="text" />
                        <input className="border" type="text" />
                    </div>
                    <textarea name="" id=""></textarea>
                    <button>Submit</button>
                </form>
            </div>

            <div id="right">
                <h1>Contact Info</h1>
                <div>
                    <h1>Location</h1>
                    <h1>Basakpara, Jamalpur <br />Mymensigh Division</h1>
                    <h1>Email</h1>
                    <h1>sdsujoydas920243@gmail.com</h1>
                    <h1>Phone No</h1>
                    <h1>+8801303436299</h1>
                </div>

            </div>
        </div>
    );
};

export default Contact;