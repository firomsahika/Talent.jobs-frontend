import React from 'react'

const PopularJobs = () => {

    const buttons = [
        {
            name: "All"
        },
        {
            name: "Trending"
        },
        {
            name: "Development"
        },
        {
            name: "Design"
        },
    ]

    const jobs = [
        {
            jobTitle: "Software Engineer (Android), Libraries",
            location: "Addis Ababa",
            postedDate: "11 hours ago",
            payment: "35k-45k",
            typeOfJobs: "Part Time",
            place: "Onsite"
        },
        {
            jobTitle: "Web Developer",
            location: "Addis Ababa",
            postedDate: "10 hours ago",
            payment: "35k-45k",
            typeOfJobs: "Full time",
            place: "Remote"
        },
        {
            jobTitle: "Product Manager, Studio",
            location: "Addis Ababa",
            postedDate: "8 hours ago",
            payment: "35k-45k",
            typeOfJobs: "Temporary",
            place: "Hybrid"
        },
        {
            jobTitle: "Recruiting Coordinator",
            location: "Addis Ababa",
            postedDate: "4 hours ago",
            payment: "35k-45k",
            typeOfJobs: "Internship",
            place: "Remote"
        },
    ]


    return (
        <div className='w-full h-screen gap-y-10 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-y-4'>
                <p className='text-4xl font-bold'>Most Popular Jobs</p>
                <p>Know your worth and find the job that qualify your life</p>
            </div>
            <div className='flex gap-x-6'>
                {
                    buttons.map((btn, index) => (
                        <button key={index} className='px-4 py-1 rounded-xl  bg-slate-200'>{btn.name}</button>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    jobs.map((job, index) => (
                        <div key={index}
                            className='p-10 px-20 border flex items-center justify-center  gap-x-10 rounded-xl hover:border-[#12AAE2] '
                        >
                            <div>
                                <p>Logo</p>
                            </div>
                            <div className='flex flex-col gap-y-4 items-center justify-center'>
                                <p className='font-semibold text-2xl'>{job.jobTitle}</p>
                                <div className='flex gap-x-10'>
                                    <p>{job.location}</p>
                                    <p>{job.postedDate}</p>
                                    <p>{job.payment}</p>
                                </div>
                                <div className='flex gap-x-5 items-center justify-center'>
                                    <p className='bg-sky-200 px-4 py-1 items-center justify-center rounded-2xl'>
                                        {job.typeOfJobs}
                                    </p>
                                    <p className='bg-yellow-200 px-4 py-1 rounded-2xl flex items-center justify-center'>
                                        {job.place}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PopularJobs