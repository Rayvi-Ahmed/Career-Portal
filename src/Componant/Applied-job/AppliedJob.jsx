import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartJob from '../CartJob/CartJob';

const AppliedJob = () => {
    const { jobapplied } = useLoaderData()


    return (
        <div>
            <div className="hero bg-base-300">
                <div className="hero-content text-center">
                    <div className="max-w-md h-80">
                        <h1 className="text-3xl font-bold">Job Applied</h1>
                    </div>
                </div>

            </div>
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