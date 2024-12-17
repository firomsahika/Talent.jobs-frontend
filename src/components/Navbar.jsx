import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-around text-black text-sm gap-x-60 p-6  mx-16 bg-slate-100 rounded-2xl font-semibold'>
            <div>
                <h1 className='font-extrabold text-xl'>Talent.Jobs</h1>
            </div>
            <div>
                <ul className='flex items-center justify-center gap-x-20 cursor-pointer'>
                    <li>Hire Talent</li>
                    <li>Jobs</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-x-2'>
                <button className='border px-5 py-1 rounded-xl '>Login</button>
                <button className='text-white px-5 py-1 bg-btn rounded-xl' >Signup</button>
            </div>
        </div>
    )
}

export default Navbar