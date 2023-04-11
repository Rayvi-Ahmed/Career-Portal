import React, { useEffect, useState } from 'react';
import image from '../../Images/Header-img.png'
import Category from '../Category/Category';
import { json, useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
    const [categorys, setcatagory] = useState([])
    const [showAll, setShowAll] = useState(false)
    const handleShowAll = () => {
        setShowAll(true)
    }
    const jobs = useLoaderData()

    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setcatagory(data))

    }, [])
    return (
        <div className='bg-base-100'>
            <div className="hero min-h-60 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-9/12 mx-auto">
                    <img src={image} className="max-w-xl " />
                    <div className='text-start'>
                        <h1 className="text-5xl font-bold"><span className='text-blue-700 '>Call</span> your Career to take your <span className='text-violet-700'>dream job</span></h1>
                        <p className="py-6 font-semibold">Find your job at 2023. We have provided many of job news at daily basis update.Working wih 40+ reputed company to get hierd based on your skill or internship opeertunity.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* job category title */}

            <div className="job-category text-center mb-5">
                <h1 className='font-bold text-4xl my-5'>Job Category</h1>
                <p className='font-semibold text-slate-400'>We provide many of job category based your skill, you can find your job category as below</p>

            </div>

            {/* Job category Card portion */}
            <div className="container mx-auto job-Catagory my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {
                    categorys.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

            {/* job feateured title */}
            <div className="space-y-56 job-category text-center">
                <h1 className='font-bold text-4xl'>Job Featured</h1>
                <p className='font-semibold text-slate-400'>We provide many of job category based your skill, you can find your job category as below</p>

            </div>

            {/* Job featured card show here! */}
            <div className='container mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8 my-8'>
                {
                    jobs.slice(0, showAll ? 6 : 4).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }

            </div>

            {
                !showAll &&
                <div className='flex items-center justify-center'>
                    <button onClick={handleShowAll} className="btn btn-outline btn-primary">See More</button>
                </div>

            }
        </div>


    );
};

export default Home;