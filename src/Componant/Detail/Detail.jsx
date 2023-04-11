import React from 'react';

const Detail = ({ detail, handleApplyJob }) => {
    const { job_type, address, company, salary, title, email, phone, description, responsibility, requirements, Experiences, _id } = detail
    return (
        <div className='my-2 flex justify-between items-center gap-5'>
            <div className="detail-container bg-base-200 p-8">
                <h1 className='mb-3'><span className='font-bold text-l'>Job Description: </span>{description} </h1>
                <h1 className='mb-2'><span className='font-bold text-l'>Job Resposibility: </span>{responsibility} </h1>
                <h1 className='mb-2'><span className='font-bold text-l'>Educational Requirements: </span>{requirements} </h1>
                <h1 className=''><span className='font-bold text-l'>Experiance: </span>{Experiences} </h1>


            </div>
            <div>
                <div className="card w-96 bg-base-200 ">
                    <div className="card-body">
                        <h2 className="card-title divide-y-2"> Job details</h2>
                        <h1 className=''><span className='font-bold text-l'> Job title: </span>{title} </h1>
                        <h1 className=''><span className='font-bold text-l'> Sallery : </span>{salary} </h1>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title divide-y-2">Contact info</h2>
                        <h1 className=''><span className='font-bold text-l'> Phone: </span>{phone} </h1>
                        <h1 className=''><span className='font-bold text-l'> Email : </span>{email} </h1>
                        <h1 className=''><span className='font-bold text-l'> Address : </span>{address} </h1>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleApplyJob(_id)} className="btn btn-primary w-full">Apply Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Detail;