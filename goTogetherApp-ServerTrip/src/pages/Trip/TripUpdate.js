import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUser, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { getTrip, updateTrip } from '../../services/trip';
import { notifySuccess, notifyError } from '../../components/ui/Notifications';
import Header from '../../components/layout/Header';
import BackButton from '../../components/ui/Bottom/Back';
import dayjs from 'dayjs';
import TimePicker from 'react-time-picker';
import PassengerCount from "../../components/ui/PassengerCount";


function TripUpdate() {
    const params = useParams();
    const navigate = useNavigate();

    const [trip, setTrip] = useState(null);
    const [tripData, setTripData] = useState({
        pickup_time: dayjs(),
        passenger_count: 0,
        price_per_seat: 0,
    });

    

    useEffect(() => {
        async function loadTrip() {
            try {
                const response = await getTrip(params.id);
                const trip = response.data;

                setTrip(trip);
                setTripData({
                    pickup_time: trip.pickup_time,
                    passenger_count: trip.passenger_count,
                    price_per_seat: trip.price_per_seat,
                });
            } catch (error) {
                console.error('Error al cargar el viaje:', error);
                notifyError('Error al cargar el viaje. Por favor, inténtalo de nuevo.');
            }
        }

        loadTrip();
    }, [params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdateTrip = async () => {
        if (!trip) return;

        try {
            const updatedTrip = {
                ...trip,
                pickup_time: tripData.pickup_time,
                passenger_count: tripData.passenger_count,
                price_per_seat: tripData.price_per_seat,
            };
            await updateTrip(params.id, updatedTrip);
            notifySuccess('Viaje actualizado correctamente');
            navigate("/mis-viajes");
        } catch (error) {
            console.error('Error al actualizar el viaje:', error);
            notifyError('Error al actualizar el viaje. Por favor, inténtalo de nuevo.');
        }
    };

    const handlePassengerCountChange = (count) => {
        setTripData((prevState) => ({
            ...prevState,
            passenger_count: count,
        }));
      };

      const handlePricePerSeatChange = (price) => {
        setTripData((prevState) => ({
            ...prevState,
            price_per_seat: price,
        }));
      };

    

    const serviceFee = (tripData.price_per_seat * tripData.passenger_count) * 0.1;
    const total = (tripData.price_per_seat * tripData.passenger_count) - serviceFee;

    if (!trip) return <div>Cargando...</div>;

    return (
        <div>
            <div className="m-2 p-4">
                <Header />
            </div>

            <div className='flex flex-row mt-20 mb-2 mr-20 ml-20'>
                <BackButton to="/mis-viajes" />
            </div>

            <div className='m-5 mb-5 text-center'>
                <p className="md:text-lg sm:text-base text-sm text-gray-700">Solo puedes actualizar la hora de salida, número de pasajeros y precio. Caso contrario puedes eliminar tu viaje</p>
            </div>

            <div className="ml-20 mr-20 mt-5 mb-5">
                <div className="flex flex-row flex-wrap justify-between">
                    <div className="flex-1 m-4 mb-5 bg-white border border-gray-200 rounded-lg shadow">
                        <div className="flex flex-col m-8 p-4 rounded-lg">
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
                                        <label htmlFor="" className="font-bold text-xl text-blue-800">{trip.origin}</label>
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
                                        <label htmlFor="" className="font-bold text-xl text-blue-800">{trip.destination}</label>
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
                                    <label htmlFor="" className="font-bold text-xl text-blue-800">{new Date(trip.travel_date).toLocaleDateString()}</label>
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
                                    <input
                                    type="text"
                                    name="pickup_time"
                                    value={tripData.pickup_time}
                                    onChange={handleChange}
                                    className="font-bold text-xl text-blue-800"
                                /> 
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
                                    {/* <input
                                        type="number"
                                        name="passenger_count"
                                        value={tripData.passenger_count}
                                        onChange={handleChange}
                                        className="font-bold text-xl text-blue-800"
                                    /> */}
                                    <PassengerCount count={trip.passenger_count} onCountChange={handlePassengerCountChange}  />

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
                                    <PassengerCount count={trip.price_per_seat} onCountChange={handlePricePerSeatChange}  />

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow m-4 mb-5">
                        <div className="flex flex-col m-8 p-4 rounded-lg">
                            <label className="font-bold text-2xl text-blue-900 mb-4">Información del precio</label>
                            <div className='flex flex-row justify-between items-center mb-4'>
                                <span className="text-gray-600">${tripData.price_per_seat} x {tripData.passenger_count} pasajeros</span>
                                <span className="text-gray-600">${tripData.price_per_seat * tripData.passenger_count}</span>
                            </div>
                            <div className='flex flex-row justify-between items-center mb-4'>
                                <span className="text-gray-600">Tarifa por servicio GoTogether</span>
                                <span className="text-blue-400">-${serviceFee.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-blue-400 mb-4"></div>
                            <div className='flex flex-row justify-between items-center mb-4'>
                                <span className="text-gray-600 text-lg">Total (USD)</span>
                                <span className="text-gray-600">${total.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleUpdateTrip}
                                className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Actualizar viaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TripUpdate;
