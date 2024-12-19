import React from 'react'
import { MdSupervisorAccount } from "react-icons/md";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";


const JobProcess = () => {
    const processes = [
        {
            icon: <MdSupervisorAccount size={40} />,
            title: "Create Account",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus omnis, nobis sit consequatur quisquam",

        },
        {
            icon: <IoCloudUploadSharp size={40} />,
            title: "Upload Resume",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus omnis, nobis sit consequatur quisquam",
        },
        {
            icon: <MdOutlineScreenSearchDesktop size={40} />,
            title: "Search Job",
            description: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus omnis, nobis sit consequatur quisquam!",

        },
    ]
    return (
        <div className='w-full h-screen text-black flex flex-col     items-center justify-center gap-y-40 px-10'>
            <h1 className='text-4xl font-bold'> Our Job Process</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    processes.map((proc, index) => (
                        <div key={proc.title}
                            className='flex flex-col gap-y-4 items-center justify-center   border border-[#12AAE2]
                             p-3 rounded-xl shadow-md hover:scale-110 transition-transform'
                        >
                            <p className='text-[#12AAE2]'>{proc.icon}</p>
                            <p className='font-bold text-black text-2xl'>{proc.title}</p>
                            <p className='flex items-center justify-center  text-center max-w-sm'>{proc.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobProcess