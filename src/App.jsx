import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'; 
import MainLayout from './Layout/MainLayout';  
import BrowseJobs from './Pages/BrowseJobs';
import NotFound from './Pages/NotFound';
import Jobs from './Pages/Jobs';
import Job, { jobLoader } from './Pages/Job';
import AddJob from './Pages/AddJob';
import EditJob from './Pages/EditJob.Jsx';

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (!res.ok) {
        throw new Error('Failed to add job');
      }
    } catch (error) {
      console.error(error);
      // Optionally, show a toast notification or alert
    }
  };

  // Delete Job
  const deleteJob = async (jobId) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete job');
      }
    } catch (error) {
      console.error(error);
      // Optionally, show a toast notification or alert
    }
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
  
    const updatedJob = await res.json(); // Assuming the API returns the updated job in the response.
    return updatedJob; // Return the updated job if needed
  };
    

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/AddJob' element={<AddJob addJobsubmit={addJob} />} />
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/Jobs/:id' element={<Job deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJob updateJobsubmit={updateJob} />} loader={jobLoader} />
        <Route path='/BrowseJobs' element={<BrowseJobs />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};

export default App;
