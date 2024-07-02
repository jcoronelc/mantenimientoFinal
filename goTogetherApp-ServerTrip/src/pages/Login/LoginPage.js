import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../Registrar/DataContext";
import BackButton from "../../components/ui/Bottom/Back";
import Header from "../../components/layout/Header";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';



function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { formData, saveFormData } = useData();
    const [formState, setFormState] = useState({
        emailLogin: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveFormData({ ...formData, ...formState }); // Combinar los datos del contexto global con el estado local del formulario
        notifyExtra('Usuario ingresado correctamente');
        navigate('/')
    };
    return (

        <div className="m-2 p-4">


                <Header />
                <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                    <BackButton to="/" />
                </div>
           

            <div className="flex justify-center items-center">
                <div className="w-full max-w-md p-6 mb-4 ">


                    <div className="text-center mt-4 ">
                        <div className="flex items-center justify-center mb-6">
                            <p className="text-gray-800 text-xl font-extrabold mr-1">Bienvenido</p>
                            <p className="text-blue-700 text-xl font-extrabold">de vuelta 👏</p>
                        </div>
                        {/* <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-4"> Por favor ingresa tus datos</label> */}
                    </div>
                    <div className="flex flex-col space-y-2 w-full pt-2 mb-4">

                        <button className="flex  items-center justify-center shadow-sm bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                            <span className="google-icon-wrapper mr-2">
                                <FcGoogle />
                            </span>
                            <span className="google-text">Iniciar sesión con Google</span>
                        </button>
                    </div>
                    <div className="flex items-center pt-2 mb-4">
                        <hr className="flex-1 border-t border-gray-300" />
                        <p className="mx-3 text-gray-500">o</p>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>


                    <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
                        <div className="flex items-center">

                            <div className="relative w-full">

                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                                    <MdEmail />
                                </span>
                                <input id="emailLogin" name="emailLogin" type="email" autoComplete="email" value={formState.emailLogin} onChange={handleChange}
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
                            <div className="flex">
                                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="remember" className="ml-2 block text-sm font-medium text-gray-900">Recuérdame</label>
                            </div>
                            <div className="flex">
                                <Link to="/cambiar-contraseña" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">¿Olvidaste la contraseña?</Link>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="w-full text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3">Iniciar Sesión</button>

                        <div className="flex flex-row items-center justify-center">
                            <div className="flex mr-2">
                                <p className="text-sm text-gray-600">¿No tienes una cuenta?</p>
                            </div>

                            <div className="flex">
                                <Link to="/registrar" className="text-blue-700 text-sm font-bold">Regístrate</Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;