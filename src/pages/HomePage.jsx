import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


const HomePage = () => {
    return (
        <div className="bg-hero bg-no-repeat bg-cover  w-full h-screen px-14"

        >
            <div><Navbar /></div>
            <div className="flex-grow flex items-center justify-center">
                <Hero />
            </div>
        </div>

        // font used is Nuno sans.
    )
}

export default HomePage;