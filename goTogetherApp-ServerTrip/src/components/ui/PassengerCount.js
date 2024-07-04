import React, { useState, useEffect } from 'react';
import { GrSubtractCircle } from 'react-icons/gr';
import { FiPlusCircle } from 'react-icons/fi';

const PassengerCount = ({ count, onCountChange }) => {
    const [passengerCount, setPassengerCount] = useState(count || 1);

    const handleIncrement = () => {
        if (passengerCount < 20) {
            const newCount = passengerCount + 1;
            setPassengerCount(newCount);
            onCountChange(newCount);
        }
    };

    const handleDecrement = () => {
        if (passengerCount > 1) {
            const newCount = passengerCount - 1;
            setPassengerCount(newCount);
            onCountChange(newCount);
        }
    };

    return (
        <div className="sm:col-span-4">
            <div className="flex flex-row items-center justify-between">
                <button onClick={handleDecrement} className="text-blue-400 text-2xl">
                    <GrSubtractCircle />
                </button>
                <label htmlFor="username" className="block text-xl font-bold leading-6 text-gray-800 mx-2">
                    {passengerCount}
                </label>
                <button onClick={handleIncrement} className="text-blue-400 text-2xl">
                    <FiPlusCircle />
                </button>
            </div>
        </div>
    );
};

export default PassengerCount;
