import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";




const HomePage = () => {
    return (
        <div
            className="bg-hero bg-cover w-full h-screen"
        // style={{
        //     background: `
        //          #00000, 
        //         url('/bg.png')
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat"
        // }}
        >
           
            <div className="flex-grow flex items-center justify-center">
                <Hero />
            </div>
        </div>
    );
};

export default HomePage;

