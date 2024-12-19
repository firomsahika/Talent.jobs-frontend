import React from 'react'
import { MdDeveloperMode } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { SiCoinmarketcap } from "react-icons/si";
import { BsProjectorFill } from "react-icons/bs";

const JobsForYou = () => {
    const processes = [
        {
            icon: <MdDeveloperMode size={40} />,
            title: "Development",
            description: "( 12 open positions)",

        },
        {
            icon: <SiAntdesign size={40} />,
            title: "Design",
            description: "( 6 open postion )",

        },
        {
            icon: <SiCoinmarketcap size={40} />,
            title: "Marketing",
            description: "(15 open position)",

        },
        {
            icon: <BsProjectorFill size={40} />,
            title: "Project Management",
            description: "( 4 open position )",

        },
        {
            icon: <BsProjectorFill size={40} />,
            title: "Human Resource",
            description: "( 4 open position )",

        },
        {
            icon: <BsProjectorFill size={40} />,
            title: "Account/Finance",
            description: "( 4 open position )",

        },
    ]


    return (
        <div className='w-full h-screen text-black flex flex-col     items-center justify-center gap-y-40 px-10'>
            <h1 className='text-4xl font-bold'>Popular Job Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    processes.map((proc, index) => (
                        <div key={index}
                            className='flex  gap-x-6 items-center justify-center   border 
                             px-10 py-10 rounded-xl shadow-md hover:scale-110 transition-transform'
                        >
                            <p className=' p-4 rounded-xl'>{proc.icon}</p>
                            <div className='flex flex-col '>
                                <p className='font-bold text-black text-xl'>{proc.title}</p>
                                <p className='flex items-center justify-center font-medium text-center max-w-sm'>{proc.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobsForYou;