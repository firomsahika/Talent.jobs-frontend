import { RiSearch2Line } from "react-icons/ri";
const Hero = () => {
    return (
        <div className='w-full flex flex-col  items-center justify-center text-white py-20 gap-y-10'>
            <div className='flex flex-col items-center justify-center gap-y-10 py-32'>
                <h1 className='text-6xl max-w-2xl text-center font-bold'>Discover where your talent belongs</h1>
                <p className='max-w-xl font-medium text-center text-md'>
                    Receive custom job matches, create unique resumes, auto-complete applications, and monitor your progress. Supporting you at every stage of your job search.
                </p>


                <div className='bg-white p-5 flex gap-x-8 items-center relative max-w-6xl rounded-2xl'>
                    <RiSearch2Line size={20} className="absolute flex  text-gray-500" />
                    <input type='text' placeholder='Job title,  keywords or company.'
                        className='text-gray-500 max-w-6xl px-10 py-4 font-medium rounded-2xl placeholder:text-gray-400   outline-none '
                    />
                    <button className='bg-[#12AAE2] px-8 py-3 rounded-3xl text-white font-bold  text-md '>Find Jobs</button>
                </div>

            </div>
        </div>
    )
}

export default Hero