import React from 'react';

const Job = ({ job }) => {
    const { _id, salary, picture, title, company, mode, phone, address, description, responsibility, requirements, Experiences, job_type
    } = job
    return (
        <div>
            <div className="card text-start bg-base-200 shadow-md p-8 space-y-5">
                <img src={picture} className='w-56 h-36 me-auto' alt="" />
                <div className='space-y-3 text-start'>
                    <h1>Vacency :</h1>
                    <h6>Company :</h6>

                    <div className='flex items-start justify-start gap-4'>
                        <button className="btn btn-outline btn-primary">{mode}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>

                    <div className='flex items-start justify-start gap-4'>
                        <h1>Location :</h1>
                        <h1>Sallery </h1>
                    </div>
                    <button className='btn btn-primary'> viwe Details</button>
                </div>


            </div>

        </div>
    );
};

export default Job;