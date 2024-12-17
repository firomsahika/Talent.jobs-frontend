import { RiSearch2Line } from "react-icons/ri";
const Hero = () => {
    return (
        <div className='w-full flex flex-col  items-start justify-center text-black py-20 gap-y-10'>
            <div className='flex flex-col items-center justify-center gap-y-10 py-14'>
                <h1 className='text-6xl max-w-3xl text-center font-extrabold'>Discover where your talent belongs</h1>
                <p className='max-w-xl font-medium text-center text-md'>
                    Receive custom job matches, create unique resumes, auto-complete applications, and monitor your progress. Supporting you at every stage of your job search.
                </p>


                <div className='flex gap-x-8 items-center relative '>
                    <RiSearch2Line size={20} className="absolute flex left-3" />
                    <input type='text' placeholder='Search jobs..'
                        className='px-10 py-4 font-semibold rounded-2xl placeholder:text-btn bg-slate-200 outline-none'
                    />
                    <button className='bg-btn px-8 py-3 rounded-3xl text-white font-bold  text-md '>Search</button>
                </div>

            </div>
        </div>
    )
}

export default Hero