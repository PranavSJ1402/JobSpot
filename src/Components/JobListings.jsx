import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';  // Assuming you have a spinner component
import JobListing from './JobListing'; // Adjust the path according to your structure

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error while fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <div className="bg-indigo-100 container mx-auto px-4 sm:px-6 lg:px-8" >
      <h2 className="text-4xl pt-8 font-bold text-indigo-500 mb-6 text-center mt-8">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
      
      <div className="bg-indigo-100  p-6 rounded-lg ">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
