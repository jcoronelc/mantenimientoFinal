
import { Link } from 'react-router-dom';

import StarsRating from "../../components/ui/StarsRating";
import { useNavigate } from 'react-router-dom';
import { PiDog } from "react-icons/pi";
import { LuCigaretteOff } from "react-icons/lu";
import { RiDiscussLine } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";

import React, { useState, useEffect } from "react";
import { useData } from "../../pages/Registrar/DataContext";

import { LuBookMarked } from "react-icons/lu";
import { GiForestCamp } from "react-icons/gi";
import { MdOutlineCameraAlt } from "react-icons/md";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import BackButton from "../../components/ui/Bottom/Back";


import Header from "../../components/layout/Header";
import Footer from '../../components/layout/Footer';
import ProgressBar from "../../components/ui/ProgressBar";
import Review from "../../components/layout/Review";

function Confirmation() {

    const brands = [
        { icon: <LuBookMarked size={20} />, name: 'Lectura' },
        { icon: <GiForestCamp size={20} />, name: 'Al aire libre' },
        { icon: <MdOutlineCameraAlt size={20} />, name: 'Fotografìa' },
    ];

    const { formData, saveFormData } = useData();

    const [selectedBrand, setSelectedBrand] = useState('');

    const handleBrandClick = (brandName) => {
        setSelectedBrand(brandName);
    };

    const handleReservarViajeClick = () => {
        notifyExtra('El viaje se ha reservado con éxito!');
      };

    return (

        <div className="m-2 p-4">
            <Header />
            <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                <BackButton to="/listar-viajes" />
            </div>


            {/* Seccion Principal */}
            <div className='m-20 mt-10 grid grid-cols-12 place-items-start'>
                {/* Columna 1 */}
                <div className="col-span-12 md:col-span-6">
                    {/* Contenedor Informacion conductor */}
                    <div className="m-4 col-span-12 grid grid-cols-12 bg-white border border-gray-200 rounded-lg shadow p-8">
                        <label className="col-span-12 text-2xl font-medium text-blue-900">Información del conductor</label>
                        {/* Foto */}
                        <div className="mt-8 col-span-12 flex justify-center">
                            <div className="h-48 w-48 rounded-full overflow-hidden border border-blue-500 animate-spin-slow border-gray-300">
                                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
                            </div>
                            
                        </div>

                        <div className="col-span-12 flex justify-center p-4">
                                <label htmlFor="name-profile" className=" text-lg font-bold">Noheli Holtz</label>
                            </div>

                        <div className="col-span-12 border-t border-blue-200 mt-4 mb-4" />

                        {/* Sobre el conductor */}
                        <div className="col-span-12 flex flex-col">
                            <h3 className="md:text-lg sm:text-4xl text-2xl font-bold mb-2 text-blue-900"> Sobre el conductor</h3>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis</p>
                        </div>

                        <div className="col-span-12 border-t border-blue-200 mt-4 mb-4" />

                        {/* Mis intereses */}
                        <div className="col-span-12 flex flex-col">
                            <h3 className="md:text-lg sm:text-4xl text-2xl font-bold mb-2 text-blue-900"> Sus intereses</h3>
                            <div className="flex flex-wrap gap-3">
                                {brands.map((brand) => (
                                    <div
                                        key={brand.name}
                                        onClick={() => handleBrandClick(brand.name)}
                                        className={`cursor-pointer text-primary font-medium rounded-full  dark:bg-blue-50 dark:hover:bg-blue-100 text-base px-4 py-2 text-center flex items-center ${selectedBrand === brand.name ? 'ring-2 ring-blue-500' : ''}`}
                                    >
                                        <div className="flex gap-2">
                                            {brand.icon}
                                            {brand.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-12 border-t border-blue-200 mt-4 mb-4" />

                        {/* Mis preferencias */}
                        <div className="col-span-12 flex flex-col">
                            <h3 className="md:text-lg sm:text-4xl text-2xl  mb-2font-bold  text-blue-900"> Sus preferencias</h3>

                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1 flex-col">
                                    <div className="mt-3 space-y-2 ">
                                        <div className="flex gap-x-3 items-center justify-between  p-3 border-gray-100 rounded-lg">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <LuCigaretteOff className="text-blue-400 text-lg" />
                                                <label htmlFor="song" className="block text-md font-medium leading-6 text-gray-700">{formData.smoking}</label>
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <PiDog className="text-blue-400 text-lg" />
                                                <label htmlFor="love" className="block text-md font-medium leading-6 text-gray-700">{formData.pets}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex-col items-start justify-start">
                                    <div className="mt-3 space-y-2">
                                        <div className="flex gap-x-3 items-center justify-between  p-3 border-gray-100 rounded-lg">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <IoMusicalNotesOutline className="text-blue-400 text-lg" />
                                                <label htmlFor="pets" className="block text-md font-medium leading-6 text-gray-700">{formData.favoriteSong}</label>
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <RiDiscussLine className="text-blue-400 text-lg" />
                                                <label htmlFor="talk" className="block text-md font-medium leading-6 text-gray-700">{formData.talk} </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenedor calificaciones conductor */}
                    <div className="m-4 col-span-12 grid grid-cols-12 bg-white border border-gray-200 rounded-lg shadow p-8">
                        <label className="col-span-12 text-2xl font-medium text-blue-900">Reseñas</label>
                        {/* Contenedor valoracion */}
                        <div className="mt-4 p-5 col-span-12 grid grid-cols-12 border-gray-200 rounded-lg shadow">
                            <div className="col-span-6 grid grid-cols-12 place-items-center">
                                <label className="col-span-12 text-lg font-medium text-blue-900">Valoración Global</label>
                                <label className="col-span-12 font-bold text-7xl text-gray-500">4.0</label>
                                <div className="col-span-12">
                                    <StarsRating stars={4} color="text-blue-400" />
                                </div>
                                <label className="col-span-12 text-gray-500">Basado en 20 reseñas</label>
                            </div>

                            <div className="col-span-6 grid grid-cols-12">
                                <div className="mb-2 mt-2 col-span-12">
                                    <label className="text-gray-500">Excelente</label>
                                    <ProgressBar progress={60} color="bg-blue-900" />
                                </div>

                                <div className="mb-2 mt-2 col-span-12">
                                    <label className="text-gray-500">Bueno</label>
                                    <ProgressBar progress={20} color="bg-blue-900" />
                                </div>

                                <div className="mb-2 mt-2 col-span-12">
                                    <label className="text-gray-500">Medio</label>
                                    <ProgressBar progress={10} color="bg-blue-900" />
                                </div>

                                <div className="mb-2 mt-2 col-span-12">
                                    <label className="text-gray-500">Pobre</label>
                                    <ProgressBar progress={10} color="bg-blue-900" />
                                </div>
                            </div>
                        </div>

                        {/* Contenedor reseñas */}
                        <div className="mt-4 col-span-12 grid grid-cols-12">
                            <Review />
                        </div>
                    </div>

                </div>

                {/* Columna 2 */}
                <div className="col-span-12 md:col-span-6  ">
                       
                <div className="bg-white border-gray-200 rounded-lg shadow grid grid-cols-12 p-8 mb-4"> 
                    <label className="text-2xl font-medium text-blue-900 m-4 col-span-12">Detalles del Viaje</label>
                    {/* Contendor informacion salida */}
                   


                       <div className="m-4 col-span-12 grid grid-cols-12">
                        {/* Contenedor lugar salida */}
                        <div className="col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400 font-bold">Lugar de Salida</label>
                            <label className="col-span-12 text-gray-600">Av. Ordoñez Lasso, CUE 010219, Azuay</label>

                        </div>

                        {/* Contenedor hora salida */}
                        <div className="md:ml-3 col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Fecha de Salida</label>
                            <label className="col-span-12 text-gray-600">13 de Abril de 2024 08:00 AM</label>

                        </div>

                         {/* Contendor informacion llegada */}
                    <div className=" col-span-12 grid grid-cols-12">
                        {/* Contenedor lugar llegada */}
                        <div className="col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Lugar de Llegada</label>
                            <label className="col-span-12 text-gray-600">Mall del Sol, GYE 091003, Guayas</label>

                        </div>

                        {/* Contenedor hora llegada */}
                        <div className="md:ml-3 col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Fecha de Llegada</label>
                            <label className="col-span-12 text-gray-600">13 de Abril de 2024 11:00 AM</label>

                        </div>
                    </div>

                    {/* Contendor informacion distanicia */}
                   
                    </div>

                    {/* Contenedor Boton Confirmar */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        <Link to="/pagar-viaje" onClick={handleReservarViajeClick} className="col-span-12 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center">
                            Reservar Viaje
                        </Link>
                    </div>  

                   
                    
                    </div>

                    <div className=" bg-white border border-gray-200 rounded-lg shadow mb-5">
                        <div className="flex flex-col m-8">
                            <label className="font-bold text-xl text-blue-900">Información del precio</label>
                            <div className='flex flex-row justify-between mt-4 mb-2'>
                                <label className="text-gray-600">Valor x asiento</label>
                                <label className="text-gray-600">$15.00</label>
                            </div>
                            <div className='flex flex-row justify-between mt-2 mb-2'>
                                <label className="text-gray-600">Asiento reservado</label>
                                <label className="text-blue-400">x1</label>
                            </div>
                            <div className="border-t border-blue-400 mt-4 mb-4"></div>
                            <div className='flex flex-row justify-between mt-2 mb-4'>
                                <label className="text-gray-600 text-lg">Total (USD)</label>
                                <label className="text-gray-600">$15.00</label>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Confirmation;