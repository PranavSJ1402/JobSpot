import React from 'react'
import Header from '../Components/Header'
import ViewJobs from '../Components/ViewJobs'
import Homecard from '../Components/Homecard'
import JobsListings from '../Components/JobListings'
const Home = () => {
  return (

    <div>
        <Header/>
        <Homecard/>
        <JobsListings isHome={true}/>
        <ViewJobs/>
    </div>
  )
}

export default Home;