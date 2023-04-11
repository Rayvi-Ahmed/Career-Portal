import React, { useState, useEffect } from "react";

function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const jobsData = JSON.parse(localStorage.getItem("jobs"));
        setJobs(jobsData);
    }, []);

    const handleFilter = (filter) => {
        let filteredJobs = [];

        if (filter === "remote") {
            filteredJobs = jobs.filter((job) => job.remote === true);
        } else if (filter === "onsite") {
            filteredJobs = jobs.filter((job) => job.remote === false);
        }

        setJobs(filteredJobs);
    };

    return (
        <div>
            <button onClick={() => handleFilter("remote")}>Remote</button>
            <button onClick={() => handleFilter("onsite")}>On-site</button>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <h3>{job.companyName}</h3>
                        <p>{job.location}</p>
                        <p>{job.type}</p>
                        <p>{job.description}</p>
                        <p>{job.responsibility}</p>
                        <p>{job.requirements}</p>
                        <p>Contact: {job.phone} | {job.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobsList;