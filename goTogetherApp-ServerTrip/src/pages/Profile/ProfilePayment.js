import React, { useState, useEffect } from "react";
import { useData } from "../Registrar/DataContext";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import { BsBank, BsPaypal } from "react-icons/bs";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';


function ProfilePayment() {
    const { formData, saveFormData } = useData();
    const [formDataState, setFormDataState] = useState(formData);
    const [countries, setCountries] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleDocumentChange = (e) => {
        setSelectedDocument(e.target.value);
    };

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

    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    const handleSubmit = (e) => {
        notifyExtra('Datos registrados correctamente');
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePaypalClick = () => {
        notifyInfo("Redirigiendo a PayPal para vincular su cuenta.");
        

        // Simulación de redirección, puedes usar `window.location.href` para redirigir a una URL real
    };

    return (
        <div className="m-2 p-4">
            <Header />
            <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                <BackButton to="/mi-cuenta" />
            </div>

            <div className="flex flex-col items-center justify-center sm:ml-56 sm:mr-56 mt-4 ml-8 mr-8">
                <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">Pagos y cobros</h1>
                <label htmlFor="email" className="block text-ls text-gray-700 mb-4">Tendrás que añadir una forma de poder cobrar por tu servicio. Esta sección es de suma importancia si planeas publicar viajes</label>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow sm:ml-56 sm:mr-56 mt-4 mb-5 ml-8 mr-8">
                <div className="flex flex-col p-8">
                    <div className="flex flex-col mt-2">
                    <label htmlFor="pais" className="block text-lg font-bold text-blue-900 mb-2">Selecciona el método de cobro</label>

                        {/* <label htmlFor="email" className="block text-ls text-gray-700 mb-4">Indica a donde quieres enviemos tu dinero</label> */}
                        <label htmlFor="pais" className="block text-l font-bold text-gray-700 mt-2">País para facturación</label>
                        <select
                            name="pais"
                            id="pais"
                            value={formDataState.pais || ''}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-200 bg-transparent py-2.5 px-2 text-gray-700 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        >
                            <option value="">Seleccione</option>
                            {countries.map(country => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col mb-4">
                        <div className="mt-4 space-y-2">
                            <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg">
                                <div className="flex items-center space-x-4 pl-4">
                                    <BsBank className="text-blue-400 text-lg" />
                                    <label htmlFor="bank" className="block text-l font-medium leading-6 text-gray-700">Transferencia Bancaria</label>
                                </div>
                                <div className="flex items-center space-x-2 justify-end pr-8">
                                    <input id="bank" name="paymentMethod" type="radio" value="bank" checked={selectedDocument === "bank"} onChange={handleDocumentChange} className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" />
                                </div>
                            </div>

                            <div className="border-t border-blue-200"></div>

                            <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                <div className="flex items-center space-x-4 pl-4">
                                    <BsPaypal className="text-blue-400 text-lg" />
                                    <label htmlFor="paypal" className="block text-l font-medium leading-6 text-gray-700">PayPal</label>
                                </div>
                                <div className="flex items-center space-x-2 justify-end pr-8">
                                    <input id="paypal" name="paymentMethod" type="radio" value="paypal" checked={selectedDocument === "paypal"} onChange={handleDocumentChange} className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedDocument && (
                        <div className="flex flex-col mt-4">
                            <label htmlFor="documentUpload" className="block text-lg font-bold text-blue-900 mb-2">Recibir los pagos por {selectedDocument === 'bank' ? 'transferencia bancaria' : 'PayPal'}</label>
                            <label htmlFor="email" className="block text-ls text-gray-700 mb-4">Asegúrese de que los datos estén llenados correctamente</label>

                            {selectedDocument === 'bank' ? (
                                <div className="flex flex-col gap-4">
                                    <div className="flex space-x-4">
                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="bankA" className="block text-l font-bold text-gray-900">Entidad bancaria</label>
                                            <input
                                                type="text"
                                                name="bankA"
                                                id="bankA"
                                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Entidad bancaria"
                                            />
                                        </div>
                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="account" className="block text-l font-bold text-gray-900">Número de cuenta</label>
                                            <input
                                                type="text"
                                                name="account"
                                                id="account"
                                                pattern="[0-9]*"
                                                onInput={handleInput}
                                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Número de Cuenta"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="idcard" className="block text-l font-bold text-gray-900">Cédula</label>
                                            <input
                                                type="text"
                                                name="idcard"
                                                id="idcard"
                                                maxLength="10"
                                                pattern="[0-9]*"
                                                onInput={handleInput}
                                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Cédula"
                                            />
                                        </div>
                                        <div className="flex flex-col w-1/2">
                                            <label htmlFor="nameComplete" className="block text-l font-bold text-gray-900">Nombre</label>
                                            <input
                                                type="text"
                                                name="nameComplete"
                                                id="nameComplete"
                                                className="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Nombre Completo"
                                            />
                                        </div>

                                        
                                    </div>

                                    <div className="flex flex-row gap-4 items-center justify-center">
                                    <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 w-32 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                                   
                                    >
                                       Guardar
                                    </button>
                                </div>
                                </div>
                            ) : (
                                <div className="flex flex-row gap-4 items-center justify-center">
                                    <button
                                    className="px-4 py-2 w-32 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                                    onClick={handlePaypalClick}
                                    >
                                        Ir a PayPal
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePayment;
