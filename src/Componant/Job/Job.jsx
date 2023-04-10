import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { _id, salary, picture, title, company, mode, phone, address, description, responsibility, requirements, Experiences, job_type
    } = job

    return (
        <div>
            <div className=" text-start bg-base-200 shadow-sm p-3 space-y-5">
                <img src={picture} className='w-56 h-36 me-auto' alt="" />
                <div className='space-y-3 text-start'>
                    <h1 className='font-bold text-2xl
                    '>{title}</h1>
                    <h6 className='font-bold text-xl text-slate-500'>{company}</h6>

                    <div className='flex items-start justify-start gap-4'>
                        <button className="btn btn-outline btn-primary">{mode}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>

                    <div className='flex items-start justify-start gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg><h1>{address}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg><h1>{salary}</h1>
                    </div>
                    <div>
                        <Link to={`detail/${_id}`}> <button className='btn btn-primary'> viwe Details</button></Link>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Job;