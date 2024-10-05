import React, { useState, useEffect } from 'react';
import JobList from './components/JobList';
import './App.css';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from an API or local source
    const fetchJobs = async () => {
      // Replace with your API call
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  const handleBookmark = (id) => {
    const jobToBookmark = jobs.find((job) => job.id === id);
    setBookmarkedJobs([...bookmarkedJobs, jobToBookmark]);
  };

  const handleDismiss = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  return (
    <div className="app">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} onBookmark={handleBookmark} onDismiss={handleDismiss} />
    </div>
  );
};

export default App
