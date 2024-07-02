import React, { useState, useEffect } from 'react';
import Header from "../../components/layout/Header";
import { Link } from 'react-router-dom';
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
 

    const handleSubmit = async (e) => {
        console.log(tripData);
        try {
          //await createTripData(tripData);  
          const selectedTripData = {
            origin: tripData.origin,
            destination: tripData.destination,
            route: "Cuenca-Cañar-Latacunga-Quito",
            travel_date: format(new Date(tripData.travel_date), 'yyyy-MM-dd'), 
            pickup_time: "23:08:40",
            //pickup_time: format(new Date(`1970-01-01T${tripData.pickup_time}:00`), 'HH:mm:ss'), 
            passenger_count: tripData.passenger_count,
            price_per_seat: tripData.price_per_seat,
            checked_items: tripData.checked_items,
            is_reservation_enabled: tripData.is_reservation_enabled
          };

          const additionalData = {
            driver: 1, 
            vehicle: 1 
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

 

            <div className=" ml-20 mr-20 mt-5 mb-5">



                <div className="flex flex-row flex-wrap justify-between">
                    <div className="flex-1 m-4 mb-5 bg-white border border-gray-200 rounded-lg shadow style={{ alignSelf: 'flex-start' }}" >
                        <div className="flex flex-col m-8">
                            <label className="font-bold text-xl text-blue-900">Tu viaje</label>
                            <label className="text-blue-400 mt-4 mb-2">Fecha de salida</label>
                            <label className="text-gray-600">{tripData.travel_date.toLocaleDateString()} - {tripData.pickup_time}</label>
                            <label className="text-blue-400 mt-4 mb-2">Fecha de llegada</label>
                            <label className="text-gray-600">{tripData.travel_date.toLocaleDateString()} - {tripData.pickup_time}</label>
                            <label className="text-blue-400 mt-4 mb-2">Ruta de viaje</label>

                            <div className="flex items-center">
                                <div className="mr-4">
                                    <FaRoute className="text-2xl text-blue-200" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor='rutaOrigen' className='text-gray-600'> - {tripData.origin} </label>
                                    <label htmlFor='rutaDestino' className='text-gray-600 mt-3'> - {tripData.destination} </label>
                                </div>
                            </div>


                            <label className="text-blue-400 mt-4 mb-2">Pasajero</label>
                            <label className="text-gray-600 mb-2">{tripData.passenger_count} pasajeros</label>
                            {/* <div className="border-t border-blue-400 mt-4 mb-4"></div>
                            <label className="text-blue-900 text-xl mt-4 mb-2">Inicia sesión o regístrate para poder publicar</label>
                        */}
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
