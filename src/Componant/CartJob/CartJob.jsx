import React from 'react';
import { Link } from 'react-router-dom';


const CartJob = ({ job }) => {
    const { company, picture, salary, mode, job_type, address, _id, title } = job

    return (
        <div>
            <div className="card card-side bg-base-200 p-3">

                <div className='flex justify-between items-center gap-8'>
                    <img src={picture} className='w-40 h-30 ' alt="" />
                    <div className='ml-5 p-5 text-start flex flex-col items-start'>
                        <h1 className='font-bold text-xl '>{title}</h1>
                        <h1 className='font-semibold text-l text-gray-800 mb-2'>{company}</h1>
                        <div className='flex justify-center items-start gap-4 mb-2'>

                            <div className="badge bg-blue-700">{mode}</div>
                            <div className="badge bg-blue-700">{job_type}</div>

                        </div>
                        <div className='flex justify-center items-start gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg><h3 className='font-semibold text-l text-gray-700'>{address}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className='font-semibold text-l text-gray-700'>{salary}</h3>

                        </div>
                    </div>

                    <div>
                        <Link to={`/detail/${_id}`}><button className="btn btn-outline btn-primary">View details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartJob;