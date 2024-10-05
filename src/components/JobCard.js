import React from 'react';
import '../styles/JobCard.css'

const JobCard = ({ job, onBookmark, onDismiss }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <button onClick={onBookmark}>Bookmark</button>
      <button onClick={onDismiss}>Dismiss</button>
    </div>
  );
};

export default JobCard;