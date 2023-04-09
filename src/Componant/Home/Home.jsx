import React from 'react';
import image from '../../Images/header.jpg'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className='flex justify-center items-center gap-4 '>
                <div className="heading-container w-5/12 text-start">
                    <h1 className='text-bold'>“It's not what you achieve, it's what you overcome</h1>
                    <p>Only those who decline to scramble up the career ladder are interesting as human beings. Nothing is more boring than a man with a career</p>
                    <button className="btn btn-info">Get Started</button>

                </div>
                <div className="header-image w-7/12">
                    <img src={image} alt="" />

                </div>
            </div>

            {/* job category */}

            <div className="job-category">
                <h1 className='font-bold my-5'>Job Category</h1>

            </div>

        </div>


    );
};

export default Home;