import { useState } from 'react';

const useSwipe = ({ onSwipeLeft, onSwipeRight }) => {
  const [touchStartX, setTouchStartX] = useState(0);

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };

  const onTouchMove = (e) => {
    // Can add logic if needed to track movement while swiping
  };

  const onTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX;

    if (distance > 100) {
      onSwipeRight();
    } else if (distance < -100) {
      onSwipeLeft();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

export default useSwipe;