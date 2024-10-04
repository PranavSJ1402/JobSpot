import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Homecard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Responsive grid layout */}
      <Card>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React jobs and start your career today.
          </p>
          <Link
            to="/BrowseJobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </Link>
        </div>
      </Card>
      <Card>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role.
          </p>
          <Link
            to="/AddJob"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Homecard;
