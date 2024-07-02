import React from 'react';

const StarsRating = ({ stars, color }) => {
  const renderStars = () => {
    const starIcons = [];
    for (let i = 0; i < stars; i++) {
      starIcons.push(
        <svg key={i} className={`w-4 h-4 ${color}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0l2.04 6.262H20l-5.375 3.902L15.666 20 10 15.625 4.334 20l1.041-3.836L0 6.262h7.96L10 0z"/>
        </svg>
      );
    }
    return starIcons;
  };

  return (
    <div className="flex items-center space-x-1">
      {renderStars()}
    </div>
  );
};

export default StarsRating;
