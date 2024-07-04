import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import BackButton from "../../components/ui/Bottom/Back";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';

function PasswordChange() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {     
        notifyExtra('Contraseña actualizada correctamente');
    };


    return (

        <div>
            <div className="flex justify-between m-20 mt-15 mb-0">
                <div className='flex flex-row '>
                    <BackButton to="/" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col items-center justify-center">

                        <div className="flex justify-center ">
                            <img src={require('../../assets/img/password.jpg')} alt="Cambio de contraseña" style={{ width: '200px', height: 'auto' }} />
                        </div>


                        <p className="text-2xl font-bold text-blue-900 py-4">
                            Elige una nueva contraseña
                        </p>

                        <label htmlFor="email" className="block text-base font-medium text-gray-600 mb-4"> Introduce tu nueva contraseña y ya está todo listo </label>

                    </div>

                    <form className="flex flex-col mt-2 mb-4">
                        <div className="flex flex-col mt-2 mb-2">
                            <label htmlFor="password" className="block text-base font-medium text-gray-900 mb-2">
                                Nueva contraseña
                            </label>
                            <div className="relative w-full">

                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                    <RiLockPasswordFill />
                                </span>

                                <input type={showPassword ? "text" : "password"} name="password" id="password" autoComplete="current-password"
                                    className="block border w-full border-gray-200 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                    placeholder="Contraseña" />

                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 dark:text-gray-300" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </span>
                            </div>

                        </div>

                        <div className="flex flex-col mt-2 mb-2 ">
                            <label htmlFor="password" className="block text-base font-medium text-gray-900 mb-2">
                                Confirmar nueva contraseña
                            </label>
                            <div className="relative w-full">

                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                    <RiLockPasswordFill />
                                </span>

                                <input type={showPassword ? "text" : "password"} name="password" id="password" autoComplete="current-password"
                                    className="block border w-full border-gray-200 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                    placeholder="Contraseña" />

                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 dark:text-gray-300" onClick={togglePasswordVisibility}>
                                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                </span>
                            </div>

                        </div>
                    </form>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3"
                    >
                        Resetear contraseña
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PasswordChange;
