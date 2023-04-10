import React, { useEffect, useState } from 'react';
import image from '../../Images/Header-img.png'
import Category from '../Category/Category';


const Home = () => {
    const [categorys, setcatagory] = useState([])

    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setcatagory(data))

    }, [])
    return (
        <div className='bg-base-100'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
                    <img src={image} className="max-w-lg " />
                    <div className='text-start'>
                        <h1 className="text-5xl font-bold">Call your Career to take your dream job</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* job category */}

            <div className="job-category text-center mb-5">
                <h1 className='font-bold text-4xl my-5'>Job Category</h1>
                <p className='font-bold text-md'>We provide many of job category based your skill, you can find your job category as below</p>

            </div>
            <div className=" container mx-auto job-Catagory my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    categorys.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

        </div>


    );
};

export default Home;