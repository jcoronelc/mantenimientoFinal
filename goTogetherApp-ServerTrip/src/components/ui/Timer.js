import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Timer = ({ selectedTime, onTimeChange }) => {

  const timeOptions = [
    { value: '08:00 AM', label: '08:00 AM' },
    { value: '09:00 AM', label: '09:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '02:00 PM', label: '02:00 PM' },
    { value: '03:00 PM', label: '03:00 PM' },
    { value: '04:00 PM', label: '04:00 PM' },
    { value: '05:00 PM', label: '05:00 PM' },
  ];

  const [time, setTime] = useState(selectedTime);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    onTimeChange(selectedTime); 
  };

  return (
    <div className="relative inline-block w-1/2">
      <select
        value={time}
        onChange={handleTimeChange}
        className="flex appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      >
        {timeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <RiArrowDropDownLine className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
    </div>
  );
};

export default Timer;
