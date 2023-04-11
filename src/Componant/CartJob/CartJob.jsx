import React from 'react';
import { Link } from 'react-router-dom';


const CartJob = ({ job }) => {
    const { company, picture, salary, mode, job_type, address, _id, title } = job

    return (
        <div>
            <div className="card card-side bg-base-200 p-3">
                <img src={picture} className='w-40 h-30 ' alt="" />
                <div className='flex justify-center items-center gap-8'>
                    <div className='ml-5 p-5 text-start flex flex-col items-start'>
                        <h1 className='font-bold text-2xl '>{title}</h1>
                        <h1 className='font-semibold text-xl text-gray-800 mb-2'>{company}</h1>
                        <div className='flex justify-center items-start gap-4 mb-2'>

                            <div className="badge bg-blue-700">{mode}</div>
                            <div className="badge bg-blue-700">{job_type}</div>

                        </div>
                        <div className='flex justify-center items-start gap-4'>
                            <h3 className='font-semibold text-l text-gray-700'>{address}</h3>
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