import React from 'react';

const ProgressBar = ({ progress, color }) => {
  return (
    <div className="h-3 bg-blue-100 w-full rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${progress}%`}}></div>
    </div>
  );
};


export default ProgressBar;
