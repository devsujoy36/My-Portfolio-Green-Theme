import Header from "../Component/Header";
import Hero from "../Component/Hero.jsx";
import About from "../Component/About";
// import Skills from "../Component/Skills";
import Course from "../Component/Course.jsx";
// import Contact from "../Component/Contact.jsx";
import Footer from "../Component/Footer.jsx";


const Home = () => {
    return (
        <div >
            <Header />
            <Hero />
            <Course />
            <About />
            <Footer />
        </div>
    );
};

export default Home;