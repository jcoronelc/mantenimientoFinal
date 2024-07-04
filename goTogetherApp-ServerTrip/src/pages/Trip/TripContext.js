import React, { createContext, useContext, useState } from 'react';


const initialTripData = {
  origin: '',
  destination: '',
  duration: '',
  vehicle: '',
  travel_date: new Date(), 
  pickup_time: '', 
  passenger_count: 1, 
  price_per_seat: 0,
  checked_items: {},
  is_reservation_enabled: false,
};

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState(initialTripData);

  const saveTripData = (data) => {
    setTripData(prevData => ({ ...prevData, ...data }));
  };
  

  return (
    <TripContext.Provider value={{ tripData, saveTripData }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);
