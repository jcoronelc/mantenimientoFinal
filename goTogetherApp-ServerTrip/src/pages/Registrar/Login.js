import React from 'react'
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div class="bg-white w-full md:w-1/2 p-4 md:p-24">
                <div className="bg-blue-50 border border-gray-200 rounded-lg shadow p-10 h-full">
                    <h2 className="text-lg font-semibold mb-2 text-center">Iniciar Sesión</h2>
                    <div className="p-2">
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                            <div className="sm:col-span-1">
                                <label htmlFor="emailLogin" className="block text-l font-bold leading-6 text-gray-900">
                                    Correo
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            id="emailLogin"
                                            name="emailLogin"
                                            type="email"
                                            autoComplete="emailLogin"
                                            className="block flex-1 border border-gray-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Correo Electrónico"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="password" className="block text-l font-bold leading-6 text-gray-900">Contraseña</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="current-password"
                                            className="block flex-1 border border-gray-200 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Contraseña"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center mx-auto">
                                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded shadow-sm transition duration-300 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <span className="google-icon-wrapper">
                                        <FcGoogle />
                                    </span>
                                    <span className="google-text"> Iniciar sesión con Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hidden md:block md:w-1/2 p-4 h-full">
                {/* Sección Imagen*/}
                <img src={require('../../assets/img/carpool-booking.png')} alt="Carpool Booking" className="object-cover w-full h-full" />
            </div>
        </div>



    );
}

export default Login