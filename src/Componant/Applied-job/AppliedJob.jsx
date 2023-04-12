import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartJob from '../CartJob/CartJob';
import { getStoredCart } from '../FakeDb';

const AppliedJob = () => {
    const { jobapplied } = useLoaderData()
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const jobsData = getStoredCart()
        setJobs(jobsData);
    }, []);

    const handleFilter = (filter) => {
        let filteredJobs = [];

        if (filter === "remote") {
            filteredJobs = jobs.filter((job) => job.remote === true);
        } else if (filter === "onsite") {
            filteredJobs = jobs.filter((job) => job.remote === false);
        }

        setJobs(filteredJobs);
    };

    console.log(jobs)

    return (
        <div>

            {/* page header */}
            <div className="hero bg-base-300">
                <div className="hero-content text-center">
                    <div className="max-w-md h-60">
                        <h1 className="text-3xl font-bold">Job Applied</h1>
                    </div>
                </div>

            </div>

            {/* Filter Button */}

            <div className='my-6 flex justify-center items-center gap-4'>

                <button onClick={() => handleFilter('remote')} className="btn  btn-primary">Remote option</button>


                <button onClick={() => handleFilter('On-site')} className="btn btn-secendery">Onsite option</button>
            </div>


            {/* Apllied Job card */}
            <div className='flex flex-col max-w-3xl p-6 space-y-6 sm:p-5 '>
                <ul className='flex flex-col divide-y divide-gray-300 bg-base-200'>


                    {
                        jobapplied.map(job => <CartJob
                            key={job._id}
                            job={job}
                        ></CartJob>)
                    }


                </ul>

            </div>

        </div>
    );
};

export default AppliedJob;