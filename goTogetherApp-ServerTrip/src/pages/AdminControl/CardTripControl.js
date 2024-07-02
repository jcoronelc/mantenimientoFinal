import React, { useState } from 'react';

function CardTrip({ idRuta, distancia, startTime, endTime, avatarSrc, driver, state }) {

    const getStateClass = (state) => {
        switch (state) {
          case 'En curso':
            return 'text-sm bg-green-50 text-green-200';
          case 'Completado':
            return 'text-sm bg-orange-50 text-orange-200';
          case 'Cancelado':
            return 'text-sm bg-red-600 text-red-50';
          default:
            return 'bg-gray-50 text-gray-800';
        }
    };

    return (
        <div className="my-6 mx-2 border rounded-lg border-gray-200 shadow-md cursor-pointer hover:bg-blue-100 transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="flex flex-col border-b-2 border-gray-200">
                <h1 className="mx-3 mt-2 text-sm text-gray-400">ID Ruta</h1>
                <p id="id_ruta" className="mx-3 text-md font-bold text-blue-800">{idRuta}</p>
            </div>
            <div className="flex border-b-2 border-gray-200 justify-between">
                <div className="flex">
                    <div className="flex flex-col mt-4">
                        <h1 className="mx-3 text-sm text-gray-400">Distancia</h1>
                        <p id="distancia_ruta" className="mx-3 text-md font-bold text-blue-800">{distancia}</p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 ml-2">
                        <div className='flex relative'>
                            <div className="relative w-0.5 h-full bg-gray-500 left-[3px]"></div>
                            <div className="flex flex-col m-2">
                                <p className='text-sm text-gray-400 ml-2'>Fecha de salida</p>
                                <p id="fecha_salida_viaje" className='text-sm text-blue-800 mb-3 ml-2'>{startTime}</p>
                                <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-4 left-0"></div>
                                <p className='text-sm text-gray-400 ml-2'>Fecha de llegada</p>
                                <p id="fecha_llegada_viaje" className='text-sm text-blue-800 ml-2'>{endTime}</p>
                                <div className="absolute w-2 h-2 bg-gray-500 rounded-full bottom-4 transform translate-y-1/2 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-4 flex flex-row items-center space-x-4 justify-start'>
                <img className="inline-block w-[45px] h-auto rounded-full ring-2 ring-blue-400"
                    src={avatarSrc}
                    alt="avatar" />
                <div className="text-center">
                    <label htmlFor='userconductor' className='font-bold text-blue-900'>{driver}</label>
                    <p id="estado_ruta" className={`p-0.5 font-bold rounded-lg ${getStateClass(state)}`}>{state}</p>
                </div>
            </div>
        </div>
    );
}

export default CardTrip;
