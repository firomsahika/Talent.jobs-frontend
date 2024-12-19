import { RiSearch2Line } from "react-icons/ri";
import men from "../../public/mansmiling.png"
import Image from "next/image";



const Hero = () => {
    return (
        <div className='w-full flex items-center justify-center text-black py-20 gap-x-10'>
            <div className='flex flex-col items-center justify-center gap-y-10 py-32'>
                <h1 className='text-6xl max-w-2xl text-center font-bold'>Discover where your talent belongs</h1>
                <p className='max-w-xl font-medium text-center text-md'>
                    Receive custom job matches, create unique resumes, auto-complete applications, and monitor your progress. Supporting you at every stage of your job search.
                </p>


                <div className='bg-white p-4 px-10 flex  justify-start items-center relative  border rounded-full'>
                    <RiSearch2Line size={20} className="absolute  flex  text-gray-500" />
                    <input type='text' placeholder='Job title,  keywords or company.'
                        className='text-gray-500  w-full px-12 py-4 font-medium rounded-2xl placeholder:text-gray-400  outline-none '
                    />
                    <button className='bg-[#12AAE2] px-8 py-3 rounded-3xl flex-nowrap text-nowrap text-white font-bold  text-md '>Find Jobs</button>
                </div>

            </div>

            <div className="hidden md:flex">
                <Image src={men} sizes="40" width={500}
                    height={500} />
            </div>
        </div>
    )
}

export default Hero