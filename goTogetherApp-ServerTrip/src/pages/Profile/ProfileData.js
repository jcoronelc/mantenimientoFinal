import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useData } from "../Registrar/DataContext";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import { updateProfile } from "../../services/profile";

function ProfileData() {
    const { formData, saveFormData } = useData();
    const [countries, setCountries] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formState, setFormState] = useState({
        username: formData.username || '',
        lastname: formData.lastname || '',
        emailLogin: formData.emailLogin || '',
        password: formData.password || '',
        phoneNumber: formData.phoneNumber || '',
        day: formData.day || '',
        month: formData.month || '',
        year: formData.year || '',
        gender: formData.gender || '',
        country: formData.country || ''
    });

    useEffect(() => {
        setFormState({
            username: formData.username || '',
            lastname: formData.lastname || '',
            emailLogin: formData.emailLogin || '',
            password: formData.password || '',
            phoneNumber: formData.phoneNumber || '',
            day: formData.day || '',
            month: formData.month || '',
            year: formData.year || '',
            gender: formData.gender || '',
            country: formData.country || ''
        });
    }, [formData]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data.map(country => ({
                    name: country.name.common,
                    code: country.cca2
                })));
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profileId = formData.id;

        if (!profileId) {
            notifyError('ID de perfil no encontrado');
            return;
        }

        try {
            await updateProfile(profileId, formState); // Llamada a la función para actualizar el perfil en el backend
            saveFormData({ ...formData, ...formState }); // Solo pasamos el estado local actualizado
            notifyExtra('Cambios guardados correctamente');
        } catch (error) {
            notifyError('Error al guardar los cambios');
        }
    };

    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <div className="m-2 p-4">
            <Header />
            <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8 ">
                <BackButton to="/mi-cuenta" />
            </div>

            <div className="flex flex-col justify-center items-center sm:ml-56 sm:mr-56 mt-4 ml-8 mr-8">
                <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">Información personal</h1>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow sm:ml-56 sm:mr-56 mt-4 mb-5 ml-8 mr-8">
                <div className="flex flex-col p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* name */}
                        <div className="flex space-x-4">
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="username" className="block text-l font-bold text-gray-900">Nombre</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={formState.username}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="lastname" className="block text-l font-bold text-gray-900">Apellido</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={formState.lastname}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Apellido"
                                />
                            </div>
                        </div>

                        {/* Correo */}
                        <div className="flex flex-col">
                            <label htmlFor="correo" className="block text-l font-bold text-gray-900">Correo</label>
                            <input
                                type="email"
                                name="emailLogin"
                                id="emailLogin"
                                value={formState.emailLogin}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Correo"
                            />
                        </div>

                        {/* Contraseña */}
                        <div className="flex flex-col">
                            <div className="relative w-full">
                                <label htmlFor="password" className="block text-l font-bold text-gray-900">Contraseña</label>
                                <div className="relative flex items-center">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={formState.password}
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        className="block w-full border border-gray-200 bg-transparent py-1.5 px-3 pr-10 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                        placeholder="Contraseña"
                                    />
                                    <span
                                        className="absolute right-3 cursor-pointer text-gray-400 dark:text-gray-300"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Celular */}
                        <div className="flex flex-col">
                            <label htmlFor="celular" className="block text-l font-bold text-gray-900">Número de celular</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                maxLength="10"
                                pattern="[0-9]*"
                                onInput={handleInput}
                                value={formState.phoneNumber}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Número de celular"
                            />
                        </div>

                        {/* Sexo */}
                        <div className="flex flex-col">
                            <label htmlFor="gender" className="block text-l font-bold text-gray-900">Sexo</label>
                            <select
                                name="gender"
                                id="gender"
                                value={formState.gender}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            >
                                <option value="">Seleccione</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>

                        {/* Fecha de nacimiento */}
                        <div className="flex flex-col">
                            <label htmlFor="birthday" className="block text-l font-bold text-gray-900">Fecha de nacimiento</label>
                            <div className="flex space-x-2">
                                <select
                                    name="day"
                                    id="day"
                                    value={formState.day}
                                    onChange={handleChange}
                                    className="block w-1/3 rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Día</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    name="month"
                                    id="month"
                                    value={formState.month}
                                    onChange={handleChange}
                                    className="block w-1/3 rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Mes</option>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    name="year"
                                    id="year"
                                    value={formState.year}
                                    onChange={handleChange}
                                    className="block w-1/3 rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Año</option>
                                    {Array.from({ length: 100 }, (_, i) => (
                                        <option key={i + 1920} value={i + 1920}>
                                            {i + 1920}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* País */}
                        <div className="flex flex-col">
                            <label htmlFor="country" className="block text-l font-bold text-gray-900">País</label>
                            <select
                                name="country"
                                id="country"
                                value={formState.country}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            >
                                <option value="">Seleccione</option>
                                {countries.map(country => (
                                    <option key={country.code} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                            >
                                Guardar perfil
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Notification />
        </div>
    );
}

export default ProfileData;
