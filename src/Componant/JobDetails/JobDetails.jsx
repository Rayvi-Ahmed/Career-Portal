import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';
import { addToDb } from '../FakeDb';

const JobDetails = () => {
    const [details, setdetail] = useState({})
    const { id } = useParams()
    const jobs = useLoaderData()

    useEffect(() => {
        const findDetails = jobs.find(job => job._id === id)
        if (findDetails) {
            setdetail(findDetails)

        }

    }, [id])

    const handleApplyJob = id => {
        console.log(id)
        addToDb(id)
    }
    return (
        <div>
            <div className="hero bg-base-300">
                <div className="hero-content text-center">
                    <div className="max-w-md h-80">
                        <h1 className="text-3xl font-bold">Job details</h1>
                    </div>
                </div>

            </div>
            <div className='container mx-auto'>
                {
                    <Detail
                        key={details._id}
                        detail={details}
                        handleApplyJob={handleApplyJob}
                    ></Detail>
                }
            </div>


        </div>
    );
};

export default JobDetails;