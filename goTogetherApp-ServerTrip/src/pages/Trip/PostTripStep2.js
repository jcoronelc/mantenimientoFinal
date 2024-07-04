import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../../components/layout/Header";
import ProgressBar from "../../components/ui/ProgressBar";
import Calendar from "../../components/ui/Calendar";
import Timer from "../../components/ui/Timer";
import { FaCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import PassengerCount from "../../components/ui/PassengerCount";
import BackButton from "../../components/ui/Bottom/Back";
import NextButton from "../../components/ui/Bottom/Next";
import BookingCard from "../../components/layout/BookingCard";
import { useTrip } from "../Trip/TripContext";
import { getAllTrips } from "../../services/trip"


function PostTripStep2() {

  const { state } = useLocation();
  const { tripData, saveTripData } = useTrip();
  const [progress, setProgress] = useState(0);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [trips, setTrips] = useState([]);


  useEffect(() => {
    saveTripData({
      travel_date: null,
      pickup_time: null,
      passenger_count: null,
      price_per_seat: null
    });
  }, []);

  //get viajes
  useEffect(() => {
    async function loadTrip(){
      const res = await getAllTrips();
      console.log(res.data);
      setTrips(res.data);
     
    }
    loadTrip();
  }, []);


  const calculateProgress = () => {
    let completedFields = 0;
    if (tripData.travel_date) completedFields++;
    if (tripData.pickup_time) completedFields++;
    if (tripData.passenger_count) completedFields++;
    if (tripData.price_per_seat) completedFields++;
   
    const totalFields = 4;
    const progressPercentage = (completedFields / totalFields) * 100;
    setProgress(progressPercentage);
  };

  const checkAllFieldsFilled = () => {
    if (
      tripData.travel_date &&
      tripData.pickup_time &&
      tripData.passenger_count &&
      tripData.price_per_seat
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    calculateProgress();
    checkAllFieldsFilled();
  }, [tripData]);
  
  const handleDateSelect = (date) => {
    saveTripData({
      ...tripData,
      travel_date: date
    });
  };

  const handlePickupTimeChange = (time) => {
    console.log(time);
    saveTripData({
      ...tripData,
      pickup_time: time
    });
  };

  const handlePassengerCountChange = (count) => {
    saveTripData({
      ...tripData,
      passenger_count: count
    });
  };

  const handlePricePerSeatChange = (price) => {
    saveTripData({
      ...tripData,
      price_per_seat: price
    });
  };

  const [selectedTime] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/publicar-viaje-paso3');  
  };
  
 
  const tripsDataCard = [
    {
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Nohelia Holtz",
      rating: 3,
      price: "$15",
      startTime: "08:00 AM",
      startLocation: "Cuenca",
      duration: "3 H 10 MIN",
      endTime: "11:00 AM",
      endLocation: "Guayaquil"
     
     
    },
    {
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Juan Perez",
      rating: 4,
      price: "$20",
      startTime: "09:00 AM",
      startLocation: "Quito",
      duration: "4 H 30 MIN",
      endTime: "01:30 PM",
      endLocation: "Manta"
     
     
    }
  ];
  

  return (

    <div>
      <div className="m-2 p-4">
        <Header />
      </div>

      <div className="flex justify-between m-20 mt-15 mb-5">

        <div className='flex flex-row '>
          <BackButton to="/publicar-viaje" />
        </div>

        <div className='flex flex-row '>
          <NextButton to="/publicar-viaje-paso3" onClick={handleSubmit} disabled={!allFieldsFilled}/>

        </div>

      </div>

      {/* Card este div */}
      <div className=" bg-white border border-gray-200 rounded-lg shadow  m-20 mt-5 mb-5">
        <div className="flex flex-row flex-nowrap  flex-grow justify-items-center align-items:center space-between m-4 md:gap-12 ">
          {/* Point 1 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCheckCircle className="text-[#65a30d]" />
              <ProgressBar progress={100} color="bg-[#65a30d]" />
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 1</h1>
              <h1 className="md:text-2l font-bold">Detalles de ruta</h1>
              <h3 className="font-semibold text-[#65a30d]">Completado</h3>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCircle className="text-blue-500" />
             
              {/* <ProgressBar progress={60} color="bg-blue-500" /> */}
              <ProgressBar progress={progress} color="bg-blue-500" />
              {/* <ProgressBar progress={60} color="bg-blue-500" /> */}
            
              {/* <ProgressBar progress={60} color="bg-blue-500" /> */}
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 2</h1>
              <h1 className="md:text-2l font-bold">Viaje y pasajero</h1>
              <h3 className="font-semibold text-blue-500">En progreso</h3>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCircle className="text-blue-100" />
              <ProgressBar progress={0} />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 3</h1>
              <h1 className="md:text-2l font-bold">Detalles de viaje</h1>
              <h3 className="font-semibold text-blue-200">Pendiente</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-white border border-gray-200 rounded-lg shadow  m-20 mt-5 mb-5">
        <div className="flex flex-row flex-wrap justify-between" >
          <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow m-4 mb-5">
            <div className="flex-grow m-8">
              <div className="sm:col-span-4 mb-3">
                <label htmlFor="username" className="block text-l font-bold leading-6 text-gray-900">
                  ¿Cuándo vas a viajar?
                </label>
                <div className="mt-2 w-full">
                  <Calendar onSelect={handleDateSelect} />
                </div>
              </div>

              <div className="sm:col-span-4 mb-3">
                <label htmlFor="username" className="block text-l font-bold leading-6 text-gray-900">
                  ¿A qué hora recogerás a tus pasajeros?
                </label>
                <div className="flex mt-2 w-full">
                  <Timer selectedTime={selectedTime} onTimeChange={handlePickupTimeChange} />
               
                 
                </div>
              </div>

              <div className="sm:col-span-4 mb-3">
                <label htmlFor="username" className="block text-l font-bold leading-6 text-gray-900">
                  ¿Cuántos pasajeros puedes llevar en este viaje?
                </label>
                <div className="mt-2 w-1/2">
                  <PassengerCount onCountChange={handlePassengerCountChange} />
                </div>
              </div>

              <div className="sm:col-span-4 mb-3">
                <label htmlFor="username" className="block text-l font-bold leading-6 text-gray-900">
                  Fijar el precio por asiento
                </label>
                <div className="mt-2 w-1/2 ">
                  <PassengerCount onCountChange={handlePricePerSeatChange} />
                </div>
              </div>

            </div>

          </div>


          <div className="flex-1  bg-white border border-gray-200 rounded-lg shadow m-4 mb-5">
            <div className="flex flex-col flex-wrap justify-between" >

              <div className="flex-grow m-8">

                <div className="sm:col-span-4 mb-3">
                  <label htmlFor="username" className="block text-l font-bold leading-6 text-gray-900">
                    Viajes similares
                  </label>
                </div>
              

                {trips.map((trip) => (
                  <BookingCard trip = {trip} />
                  
                ))}


                {/* {trips.map((trip) => (
                  <BookingCard
                    avatarSrc={trip.avatarSrc}
                    name={trip.name}
                    rating={trip.rating}
                    price={trip.price}
                    startTime={trip.startTime}
                    startLocation={trip.startLocation}
                    duration={trip.duration}
                    endTime={trip.endTime}
                    endLocation={trip.endLocation}
                  />
                ))} */}

              </div>
            </div>

          </div>



        </div>


      </div>
    </div>
  );
}

export default PostTripStep2;