import React from 'react';

const Category = ({ category }) => {
    const { available_jobs, picture, title, _id } = category

    return (
        <div>
            <div className="after:card card-compact bg-base-200 shadow-md hover:bg-base-300">
                <figure><img src={picture} className='w-20 h-24' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{available_jobs}</p>

                </div>
            </div>

        </div>
    );
};

export default Category;