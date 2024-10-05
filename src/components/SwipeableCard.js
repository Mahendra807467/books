import React, { useState } from 'react';
import useSwipe from '../hooks/useSwipe'; // Custom hook for swipe functionality
import '../styles/SwipeableCard.css'; // Import CSS for the component

const SwipeableCard = ({ job, onSwipeRight, onSwipeLeft }) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeLeft: () => {
      setIsSwiped(true);
      setTimeout(() => {
        onSwipeLeft(job.id);
        setIsSwiped(false);
      }, 300); // delay to show swiping animation
    },
    onSwipeRight: () => {
      setIsSwiped(true);
      setTimeout(() => {
        onSwipeRight(job.id);
        setIsSwiped(false);
      }, 300); // delay to show swiping animation
    },
  });

  return (
    <div
      className={`swipeable-card ${isSwiped ? 'swiped' : ''}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="card-content">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
      </div>
    </div>
  );
};

export default SwipeableCard;