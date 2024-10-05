import React from 'react';
import SwipeableCard from './SwipeableCard';

const JobList = ({ jobs, onBookmark, onDismiss }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <SwipeableCard
          key={job.id}
          job={job}
          onSwipeRight={onBookmark}
          onSwipeLeft={onDismiss}
        />
      ))}
    </div>
  );
};

export default JobList;