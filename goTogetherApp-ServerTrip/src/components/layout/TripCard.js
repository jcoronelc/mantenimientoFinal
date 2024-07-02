import React, { useState, useEffect } from 'react';
import StarsRating from '../ui/StarsRating';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoLinkOutline, IoLogoWhatsapp, IoInformationCircleOutline } from "react-icons/io5";
import { FiMoreVertical } from 'react-icons/fi';
import { GrUpdate } from "react-icons/gr";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import { deleteTrip, updateTrip, getTrip } from "../../services/trip";
import { useNavigate } from 'react-router-dom'; 
import { getUser } from "../../services/profile";



// function TripCard({ key, avatarSrc, name, rating, price, startTime, startLocation, duration, endTime, endLocation, status, index, onDelete }) {
    function TripCard({ trip }) {

    const statusColors = {
        en_curso: 'bg-green-50 text-green-200',
        completado: 'bg-orange-50 text-orange-200',
        cancelado: 'bg-red-50 text-red-200',
    };
     const status= "en_curso"

     const [user, setUser] = useState();

     useEffect(() => {
         async function loadUser() {
             try {
                 const res = await getUser(trip.driver);
                 console.log(res.data);
                 setUser(res.data);
             } catch (error) {
                 console.error("Error obtener usuario:", error);
                 setUser(null); 
             }
         }
         loadUser();
     }, [trip.id]);
 
 
     const avatarSrc = user ? user.avatarSrc : '';
     const name = user ? user.username : '';
     const rating = user ? user.rating: 1;
     const endTime = trip.pickup_time
     const duration = trip.pickup_time

    const color = statusColors[status] || 'bg-gray-100 text-gray-400';
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const phoneNumber = '+593996426065';

    const handleResize = () => {
        if (window.innerWidth >= 640) {
            setMenuOpen(false);
        }
    };
    
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000);
            })
            .catch((error) => {
                console.error('Error al copiar el enlace:', error);
            });
    };

    const handleSendMessage = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };


    const handleDeleteTrip = async (trip_id) => {
        console.log(trip_id)
        await deleteTrip(trip_id)
        notifySuccess('Viaje eliminado correctamente');
    };

    
   

    const navigate = useNavigate()
    


    return (
        <div className="flex bg-white border border-gray-200 rounded-lg shadow-md mt-2 mb-2">
            <div className="flex flex-col m-4 space-y-4 w-full">
                <div className="flex flex-row justify-between items-center m-2">
                    <div className="flex flex-row items-center space-x-4">
                        <img className="inline-block w-10 h-auto rounded-full ring-2 ring-blue-400"
                            src={avatarSrc}
                            alt="avatar" />
                        <div className="flex flex-col">
                            <label htmlFor="name-profile" className="font-bold">{name}</label>
                            <StarsRating stars={rating} color="text-blue-400" />
                        </div>
                    </div>
                    <div className="relative">
                        <button 
                            className="sm:hidden flex items-center justify-center w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm text-center"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FiMoreVertical className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-100">
                                <button onClick={copyLink} className="block bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Copiar vínculo</button>
                                <button onClick={handleSendMessage} className="block bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Enviar mensaje</button>
                                <button onClick={() => handleDeleteTrip(trip.id)} className="block bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Eliminar</button>
                                <button onClick={() => navigate(`/actualizar-viaje/${trip.id}`)} className="block bg-gray-50 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Actualizar</button>

                            </div>
                        )}
                    </div>
                    <div className="hidden sm:flex">
                        <button type="button"
                            className="w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Copiar vínculo del viaje' onClick={copyLink}>
                            <div className="flex items-center justify-center">
                                <IoLinkOutline className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                            </div>
                            {copied && (
                                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md">
                                    Enlace copiado
                                </div>
                            )}
                        </button>
                        <button type="button"
                            className="w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Enviar mensaje' onClick={handleSendMessage}>
                            <div className="flex items-center justify-center">
                                <IoLogoWhatsapp className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                            </div>
                        </button>
                        <button type="button"
                            className="w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Actualizar'  onClick={() => navigate(`/actualizar-viaje/${trip.id}`)}>
                            <div className="flex items-center justify-center">
                                <GrUpdate className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                            </div>
                        </button>
                        <button type="button"
                            className="w-[40px] h-[40px] m-2 text-blue-50 bg-red-50 hover:bg-red-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Eliminar'  onClick={() => handleDeleteTrip(trip.id)}>
                            <div className="flex items-center justify-center">
                                <RiDeleteBin6Line className="w-7 h-7 text-red-600 hover:text-red-50" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="border-t border-blue-400 mt-4 mb-4"></div>

                <div className="flex">
                    <label htmlFor="username" className="block text-2xl font-bold leading-6 text-blue-800 mx-2 self-end">
                        ${trip.price_per_seat} 
                    </label>
                    <label htmlFor="username" className="block text-xl font-bold leading-6 text-blue-800 mx-2 self-end">
                        x pasajero
                    </label>
                </div>

                <div className="flex flex-row flex-wrap m-2 sm:space-x-4 md:space-x-8 lg:space-x-12">
                    <div className="flex flex-col mb-2 ">
                        <label htmlFor="" className="font-bold text-l">{trip.pickup_time}</label>
                        <label htmlFor="" className="font-bold text-l text-blue-800">{trip.origin}</label>
                    </div>
                    <div className="flex flex-col mb-2 w-full sm:w-auto sm:max-w-xs">
                        <label htmlFor="push-everything" className="block border-2 border-blue-800 rounded-lg text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">{duration}</label>
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="" className="font-bold text-l">{endTime}</label>
                        <label htmlFor="" className="font-bold text-l text-blue-800">{trip.destination}</label>
                    </div>
                </div>

                <div className="border-t border-blue-400 mt-4 mb-4"></div>
                <p id="estado_ruta" className={`text-sm font-bold rounded-lg p-2 ${color}`}>
                    {status === 'en_curso' ? 'En curso' : status === 'completado' ? 'Completado' : 'Cancelado'}
                </p>
            </div>

        </div>
    );
}

export default TripCard;
