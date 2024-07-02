import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../Registrar/DataContext";
import { FaPhoneAlt } from "react-icons/fa";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import { registerUser } from "../../services/profile";


function RegisterModal({ onClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            const timer = setTimeout(() => {
                navigate('/login-usuario');
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [redirect, navigate]);

    const handleRedirect = () => {
        navigate('/');
        setRedirect(true);
    };

    const { formData, saveFormData } = useData();
    const [formState, setFormState] = useState({
        username: '',
        lastname: '',
        phoneNumber: '',
        emailLogin: '',
        password: '',year: '',
        month: '',
        day: '',
        gender: '',
        country: '',
        rating: 5
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: formState.username || '',
            lastname: formState.lastname || '',
            phoneNumber: formState.phoneNumber || '',
            emailLogin: formState.emailLogin || '',
            password: formState.password || '',
            year: formState.year || '', // Incluir todos los campos opcionales aquí
            month: formState.month || '',
            day: formState.day || '',
            gender: formState.gender || '',
            country: formState.country || '',
            rating: formState.rating || 5
        };

        try {
            await registerUser(userData);
            notifySuccess('Usuario registrado correctamente');
            setRedirect(true);
        } catch (error) {
            notifyError('Error al registrar el usuario');
            console.error('Error al registrar el usuario:', error);
            //console.log(userData)
        }
    };

    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return (

        <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 mb-4 ">

                <div className="items-start justify-start  mt-8 ">
                    <div className="flex items-center justify-center mb-2">
                        <p className="text-gray-800 text-xl font-extrabold mr-1 ">Registrarse para crear una cuenta</p>
                    </div>
                    <label htmlFor="email" className="block text-ls text-gray-600 mb-4">Ingrese sus datos a continuación para crear su cuenta y comenzar.</label>
                </div>
                <div className="flex flex-col space-y-2 w-full pt-2 pb-2">

                    <button className="flex  items-center justify-center shadow-sm bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                        <span className="google-icon-wrapper mr-2">
                            <FcGoogle />
                        </span>
                        <span className="google-text">Registrarse con Google</span>
                    </button>
                </div>
                <div className="flex items-center pt-2 pb-2">
                    <hr className="flex-1 border-t border-gray-300" />
                    <p className="mx-3 text-gray-500">o</p>
                    <hr className="flex-1 border-t border-gray-300" />
                </div>
                <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
                    <div className="flex flex-row space-x-3  ">
                        <div className="flex flex-grow">
                            <input id="username" name="username" type="text" autoComplete="username" value={formState.username} onChange={handleChange}
                                className="border w-full border-gray-200 bg-transparent  py-1.5  pl-3  text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                placeholder="Nombre" />
                        </div>
                        <div className="flex flex-grow">
                            <input id="lastname" name="lastname" type="text" autoComplete="lastname" value={formState.lastname} onChange={handleChange}
                                className="border w-full border-gray-200 bg-transparent py-1.5   pl-3  text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                placeholder="Apellido" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                <FaPhoneAlt />
                            </span>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                onInput={handleInput}
                                value={formState.phoneNumber}
                                onChange={handleChange}
                                autoComplete="tel"
                                maxLength="10"
                                pattern="[0-9]*"
                                className="block border w-full border-gray-200 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                placeholder="Número de celular" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                <MdEmail />
                            </span>
                            <input
                                id="emailLogin"
                                name="emailLogin"
                                type="email"
                                value={formState.emailLogin} // Establecer el valor del input con el estado local
                                onChange={handleChange}
                                autoComplete="email"
                                className="block border w-full border-gray-200 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                placeholder="Correo electrónico" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full">

                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                <RiLockPasswordFill />
                            </span>

                            <input type={showPassword ? "text" : "password"} name="password" id="password" autoComplete="current-password" value={formState.password} onChange={handleChange}
                                className="block border w-full border-gray-200 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                placeholder="Contraseña" />

                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 dark:text-gray-300" onClick={togglePasswordVisibility}>
                                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </span>
                        </div>
                    </div>


                    <div className="flex flex-row justify-between items-center">
                        <label className="block text-xs text-gray-600 mb-4">
                            Al crear una cuenta, usted acepta nuestros{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Términos y condiciones de servicio
                            </a>{' '}
                            y{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Políticas de Privacidad
                            </a>.
                        </label>


                    </div>
                    <button onClick={handleSubmit} type="submit" className="w-full text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3">Registrarse</button>

                    <div className="flex flex-row items-center justify-center">
                        <div className="flex mr-2">
                            <p className="text-sm text-gray-600">¿Ya tienes una cuenta?</p>
                        </div>

                        <div className="flex">
                            <Link to="/login-usuario" className="text-blue-700 text-sm font-bold">Iniciar sesión</Link>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default RegisterModal;
