import React, { useState, useEffect } from 'react';
import Header from "../../components/layout/Header";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUser, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";
import { useData } from "../Registrar/DataContext";


import BackButton from "../../components/ui/Bottom/Back";
import { FaRoute } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useTrip } from "../Trip/TripContext";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import { createTrip } from "../../services/trip"
import { format } from 'date-fns';


function TripDetail() {
    const location = useLocation();
    const { state } = useLocation();
    const { tripData } = useTrip();
    const { formData } = useData();

    const convertTimeTo24HourFormat = (timeString) => {
        const [time, modifier] = timeString.split(' ');
      
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
          hours = '00';
        }
        if (modifier === 'PM') {
          hours = parseInt(hours, 10) + 12;
        }
      
        return `${hours}:${minutes}:00`;
      };

    function parseDuration(durationString) {
        const hours = parseInt(durationString.split(' h ')[0]); // Obtener las horas
        const minutes = parseInt(durationString.split(' h ')[1].split(' min')[0]); // Obtener los minutos
        return { hours, minutes };
    }

    const { hours, minutes } = parseDuration(tripData.duration);

    function calculateArrivalTime(pickupTime, hours, minutes) {
        const [hour, minute] = pickupTime.split(':').map(Number); 
        let arrivalHour = hour + hours;
        let arrivalMinute = minute + minutes;
      
       
        if (arrivalMinute >= 60) {
          arrivalHour += Math.floor(arrivalMinute / 60);
          arrivalMinute = arrivalMinute % 60;
        }
      
       
        const arrivalTime = new Date(0, 0, 0, arrivalHour, arrivalMinute);
        const formattedArrivalTime = arrivalTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        console.log(formattedArrivalTime)
        return formattedArrivalTime;
      }



    const handleSubmit = async (e) => {
        console.log(tripData);
        try {
            //await createTripData(tripData);  
            const selectedTripData = {
                origin: tripData.origin,
                destination: tripData.destination,
                travel_date: format(new Date(tripData.travel_date), 'yyyy-MM-dd'),
                pickup_time: convertTimeTo24HourFormat(tripData.pickup_time),
                duration: tripData.duration,
                arrival_time: convertTimeTo24HourFormat(tripData.pickup_time),
                passenger_count: tripData.passenger_count,
                price_per_seat: tripData.price_per_seat,
                checked_items: tripData.checked_items,
                is_reservation_enabled: tripData.is_reservation_enabled
            };

            const additionalData = {
                driver: formData.id,
                vehicle: tripData.vehicle
            };

            const combinedData = {
                ...selectedTripData,
                ...additionalData
            };

            console.log(combinedData);
            const res = await createTrip(combinedData);
            //console.log(res);

            notifyExtra('Viaje creado correctamente');
            return;
        } catch (err) {
            console.error('Error creando el viaje:', err);
            return;
        }
    };


    const serviceFee = (tripData.price_per_seat * tripData.passenger_count) * 0.1;
    const total = (tripData.price_per_seat * tripData.passenger_count) - serviceFee;

    return (
        <div>
            <div className="m-2 p-4">
                <Header />
            </div>


            <div className='flex flex-row mt-20 mb-2 mr-20 ml-20'>

                <BackButton to="/publicar-viaje-paso3" />
                {/* <Link to="/publicar-viaje-paso2" className="rounded-full bg-transparent hover:bg-blue-100 focus:outline-none p-2">
                    <MdArrowBackIosNew className='text-blue-900 hover:text-blue-700' />
                </Link>

                <label className="font-bold text-xl text-blue-900 ml-2 align-middle">Regresar</label>
            */}
            </div>



            <div className='m-5 mb-5 text-center'>
                <p className="md:text-5xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">¡Tu viaje está casi listo! 🚀</p>
                <p className="md:text-lg sm:text-base text-sm text-gray-700">Solo falta un paso más para publicar tu viaje.</p>
            </div>





            <div className="ml-20 mr-20 mt-5 mb-5">
                <div className="flex flex-row flex-wrap justify-between">

                    <div className="flex-1 m-4 mb-5 bg-white border border-gray-200 rounded-lg shadow style={{ alignSelf: 'flex-start' }}" >
                        <div className="flex flex-col m-8">
                            <label className="font-bold text-2xl text-blue-900 mb-6">Tu viaje</label>

                            <div className='flex flex-row space-x-8 mb-6'>

                                <div className="flex items-center ">
                                    <div className="p-4 text-blue-50 bg-green-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                        <div className="flex items-center justify-center">
                                            <RiSendPlaneFill className=" text-green-600 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-2'>
                                        <label htmlFor="" className="font-bold text-m text-gray-600">Desde</label>
                                        <label htmlFor="" className="font-bold text-xl text-blue-800">{tripData.origin}</label>
                                    </div>
                                </div>

                                <div className="flex items-center ">
                                    <div className="p-4 text-blue-50 bg-purple-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                        <div className="flex items-center justify-center">
                                            <FaMapMarkerAlt className=" text-purple-600 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-2'>
                                        <label htmlFor="" className="font-bold text-m text-gray-600">Hacia</label>
                                        <label htmlFor="" className="font-bold text-xl text-blue-800">{tripData.destination}</label>
                                    </div>
                                </div>

                            </div>

                            <div className="flex items-center mb-6">
                                <div className="p-4 text-blue-50 bg-orange-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                    <div className="flex items-center justify-center">
                                        <FaCalendarAlt className=" text-orange-600 w-5 h-5" />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <label htmlFor="" className="font-bold text-m text-gray-600">Fecha de salida</label>
                                    <label htmlFor="" className="font-bold text-xl text-blue-800">{new Date(tripData.travel_date).toLocaleDateString()}</label>
                                </div>
                            </div>


                            <div className="flex items-center mb-6">
                                <div className="p-4 text-blue-50 bg-blue-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                    <div className="flex items-center justify-center">
                                        <FaClock className=" text-blue-600 w-5 h-5" />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <label htmlFor="" className="font-bold text-m text-gray-600">Hora de salida</label>
                                    <label className="font-bold text-xl text-blue-800"> {tripData.pickup_time}</label>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="p-4 text-blue-50 bg-blue-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                    <div className="flex items-center justify-center">
                                        <GiDuration className=" text-blue-600 w-5 h-5" />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <label htmlFor="" className="font-bold text-m text-gray-600">Duración del viaje</label>
                                    <label className="font-bold text-xl text-blue-800"> {tripData.duration}</label>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="p-4 text-blue-50 bg-blue-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                    <div className="flex items-center justify-center">
                                        <FaUser className=" text-blue-600 w-5 h-5" />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <label htmlFor="" className="font-bold text-m text-gray-600">Número de pasajeros</label>
                                    <label className="font-bold text-xl text-blue-800"> {tripData.passenger_count}</label>
                                </div>
                            </div>


                            <div className="flex items-center mb-6">
                                <div className="p-4 text-blue-50 bg-blue-50 focus:ring-2 font-medium rounded-lg text-sm  text-center" >
                                    <div className="flex items-center justify-center">
                                        <FaDollarSign className=" text-blue-600 w-5 h-5" />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <label htmlFor="" className="font-bold text-m text-gray-600">Precio por asiento</label>
                                    <label className="font-bold text-xl text-blue-800"> {tripData.price_per_seat}</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow m-4 mb-5" style={{ alignSelf: 'flex-start' }}>
                        <div className="flex flex-col m-8">
                            <label className="font-bold text-xl text-blue-900">Información del precio</label>
                            <div className='flex flex-row justify-between mt-4 mb-2'>
                                <label className="text-gray-600">${tripData.price_per_seat} x {tripData.passenger_count} pasajeros</label>
                                <label className="text-gray-600">${tripData.price_per_seat * tripData.passenger_count}</label>
                            </div>
                            <div className='flex flex-row justify-between mt-2 mb-2'>
                                <label className="text-gray-600">Tarifa por servicio GoTogether</label>
                                <label className="text-blue-400">-${serviceFee.toFixed(2)}</label>
                            </div>
                            <div className="border-t border-blue-400 mt-4 mb-4"></div>
                            <div className='flex flex-row justify-between mt-2 mb-4'>
                                <label className="text-gray-600 text-lg">Total (USD)</label>
                                <label className="text-gray-600">${total.toFixed(2)}</label>
                            </div>
                            <Link to="/" onClick={handleSubmit} className="flex items-center justify-center text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publicar  </Link>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TripDetail
