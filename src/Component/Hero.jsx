

const Hero = () => {
    return (
        <div className="w-9/12 mx-auto py-20">

            <div className="flex justify-center items-center lg:flex-row flex-col-reverse p-18">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="lg:text-xl lg:font-medium font-semibold text-black">Hello I&apos;m</h1>
                    <h1 className="lg:text-5xl text-4xl font-bold text-black">SUJOY DAS</h1>
                    <h1 className="lg:text-xl lg:font-medium font-semibold text-black">A passionae Front End Developer with a strong skill set in HTML, CSS, JAVASCRIPT & REACT. <br /> I&apos;m very dedicated and i maintain regularity in my programming field. </h1>
                    <div className="flex lg:justify-start justify-end">
                        <button className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-500 active:scale-95">Download Resume</button>
                    </div>

                </div>
                <img className="lg:w-4/12 w-8/12" src="/src/assets/profile.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;