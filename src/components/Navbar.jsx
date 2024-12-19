'use client'


import { useState, useEffect } from "react"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className={` fixed w-full flex items-center justify-around  text-slate-800 text-md gap-x-60 p-5  backdrop-blur-3xl z-10 border-b font-semibold 
        ${isScrolled ? '' : ''}
        `}>
            <div className="hidden md:flex">
                <h1 className='font-extrabold text-md'>Talent.Jobs</h1>
            </div>
            <div className='hidden md:flex text-slate-800'>
                <ul className='flex items-center justify-center gap-x-20 cursor-pointer'>
                    <li>Hire Talent</li>
                    <li>Jobs</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex md:hidden'>
                {
                    toggle ? (
                        <>
                            <button onClick={handleToggle}>X</button>
                        </>
                    )
                        :
                        (
                            <>
                                <button onClick={handleToggle}>M</button>
                            </>
                        )
                }
            </div>
            <div className='flex gap-x-2'>
                <button className='border px-5 py-1 rounded-xl border-[#12AAE2] '>Login</button>
                <button className='text-white px-5 py-1 bg-[#12AAE2] rounded-xl' >Signup</button>
            </div>
        </div>
    )
}

export default Navbar