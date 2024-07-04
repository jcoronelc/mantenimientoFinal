import React, { useState, useEffect } from "react";
import { useData } from "../Registrar/DataContext";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import { PiSteeringWheelFill } from "react-icons/pi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaPassport } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsPassport } from "react-icons/bs";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';


function ProfileVerification() {
    const { formData, saveFormData } = useData();
    const [formDataState, setFormDataState] = useState(formData);
    const [countries, setCountries] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [idCardFrontImage, setIdCardFrontImage] = useState(null);
    const [idCardBackImage, setIdCardBackImage] = useState(null);
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [passportImage, setPassportImage] = useState(null);

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
        setFormDataState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        notifyExtra('Documento registrado correctamente');
    };

  

    const handleDocumentChange = (e) => {
        setSelectedDocument(e.target.value);
    };

    const handleImageChange = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="m-2 p-4">
            <Header />
            <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8 ">
                <BackButton to="/mi-cuenta" />
            </div>

            <div className="flex flex-col items-center justify-center sm:ml-56 sm:mr-56 mt-4  ml-8 mr-8" >
                <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">Añade tu documento de identificación oficial</h1>
                <label htmlFor="email" className="block text-ls text-gray-700 mb-4">Tendrás que añadir un documento de identificación oficial. Este paso nos sirve para comprobar que eres quien dices ser</label>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow  sm:ml-56 sm:mr-56 mt-4 mb-5 ml-8 mr-8">
                <div className="flex flex-col p-8">

                    <label htmlFor="email" className="block text-lg font-bold text-blue-900 mb-2">Selecciona el documento de identificación que quieras añadir</label>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="pais" className="block text-l font-bold text-gray-700">País</label>
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
                        <div className="mt-4 space-y-2 ">
                            <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg">
                                <div className="flex items-center space-x-4 pl-4">
                                    <PiSteeringWheelFill className="text-blue-400 text-lg" />
                                    <label htmlFor="drivingLicense" className="block text-l font-medium leading-6 text-gray-700">Permiso de conducir</label>
                                </div>
                                <div className="flex items-center space-x-2 justify-end pr-8">
                                    <input id="drivingLicense" name="documentType" type="radio" value="drivingLicense" checked={selectedDocument === "drivingLicense"} onChange={handleDocumentChange} className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" />
                                </div>
                            </div>

                            <div className="border-t border-blue-200"></div>

                            <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                <div className="flex items-center space-x-4 pl-4">
                                    <BsFillPersonVcardFill className="text-blue-400 text-lg" />
                                    <label htmlFor="idCard" className="block text-l font-medium leading-6 text-gray-700">Documento de identidad</label>
                                </div>
                                <div className="flex items-center space-x-2 justify-end pr-8">
                                    <input id="idCard" name="documentType" type="radio" value="idCard" checked={selectedDocument === "idCard"} onChange={handleDocumentChange} className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" />
                                </div>
                            </div>

                            <div className="border-t border-blue-200"></div>

                            <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                <div className="flex items-center space-x-4 pl-4">
                                    <FaPassport className="text-blue-400 text-lg" />
                                    <label htmlFor="passport" className="block text-l font-medium leading-6 text-gray-700">Pasaporte</label>
                                </div>
                                <div className="flex items-center space-x-2 justify-end pr-8">
                                    <input id="passport" name="documentType" type="radio" value="passport" checked={selectedDocument === "passport"} onChange={handleDocumentChange} className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedDocument && (
                        <div className="flex flex-col mt-4">
                            <label htmlFor="documentUpload" className="block text-lg font-bold text-blue-900 mb-2">Sube imágenes de tu {selectedDocument === 'drivingLicense' ? 'permiso de conducir' : selectedDocument === 'idCard' ? 'documento de identidad' : 'pasaporte'}</label>
                            <label htmlFor="email" className="block text-ls text-gray-700 mb-4">Comprueba que las imágenes no estén borrosas y que en la parte delantera del documento de identidad se te vea bien la cara</label>

                            {selectedDocument !== 'passport' ? (
                                <div className="flex flex-row gap-4">
                                    {selectedDocument === 'idCard' ? (
                                        <>
                                            <div className="border border-dashed border-gray-500 relative h-48 w-full flex items-center justify-center">
                                                <input
                                                    type="file"
                                                    className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
                                                    onChange={(e) => handleImageChange(e, setIdCardFrontImage)}
                                                />
                                                {idCardFrontImage ? (
                                                    <img src={idCardFrontImage} alt="ID Card Front Preview" className="w-full h-full object-cover rounded-lg" />
                                                ) : (
                                                    <div className="flex flex-col text-center items-center justify-center p-10">
                                                        <FaRegAddressCard className="w-12 h-12" />
                                                        <h4>Sube la cara delantera</h4>
                                                        <p>Solo archivos JPEG o PNG</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="border border-dashed border-gray-500 relative h-48 w-full flex items-center justify-center">
                                                <input
                                                    type="file"
                                                    className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
                                                    onChange={(e) => handleImageChange(e, setIdCardBackImage)}
                                                />
                                                {idCardBackImage ? (
                                                    <img src={idCardBackImage} alt="ID Card Back Preview" className="w-full h-full object-cover rounded-lg" />
                                                ) : (
                                                    <div className="flex flex-col text-center items-center justify-center p-10">
                                                        <FaRegAddressCard className="w-12 h-12" />
                                                        <h4>Sube la cara trasera</h4>
                                                        <p>Solo archivos JPEG o PNG</p>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="border border-dashed border-gray-500 relative h-48 w-full flex items-center justify-center">
                                                <input
                                                    type="file"
                                                    className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
                                                    onChange={(e) => handleImageChange(e, setFrontImage)}
                                                />
                                                {frontImage ? (
                                                    <img src={frontImage} alt="Front Preview" className="w-full h-full object-cover rounded-lg" />
                                                ) : (
                                                    <div className="flex flex-col text-center items-center justify-center p-10">
                                                        <FaRegAddressCard className="w-12 h-12" />
                                                        <h4>Sube la cara delantera</h4>
                                                        <p>Solo archivos JPEG o PNG</p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="border border-dashed border-gray-500 relative h-48 w-full flex items-center justify-center">
                                                <input
                                                    type="file"
                                                    className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
                                                    onChange={(e) => handleImageChange(e, setBackImage)}
                                                />
                                                {backImage ? (
                                                    <img src={backImage} alt="Back Preview" className="w-full h-full object-cover rounded-lg" />
                                                ) : (
                                                    <div className="flex flex-col text-center items-center justify-center p-10">
                                                        <FaRegAddressCard className="w-12 h-12" />
                                                        <h4>Sube la cara trasera</h4>
                                                        <p>Solo archivos JPEG o PNG</p>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="border border-dashed border-gray-500 relative h-48 w-full flex items-center justify-center">
                                    <input
                                        type="file"
                                        className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
                                        onChange={(e) => handleImageChange(e, setPassportImage)}
                                    />
                                    {passportImage ? (
                                        <img src={passportImage} alt="Passport Preview" className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <div className="flex flex-col text-center items-center justify-center p-10">
                                            <BsPassport className="w-12 h-12" />
                                            <h4>Sube tu pasaporte</h4>
                                            <p>Solo archivos JPEG o PNG</p>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    )}

                    <div className="flex bg-blue-50 rounded-lg mt-4">
                        <label className="block text-xs text-gray-600 p-4">
                            Tu documento de identificación se gestionará de acuerdo con nuestros{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Términos y condiciones de servicio
                            </a>{' '}
                            y{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Políticas de Privacidad
                            </a>{' '}
                            ; ni el conductor ni los demás pasajeros tendrán acceso a él.
                        </label>
                    </div>

                    <div className="flex justify-end mt-4 gap-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="px-4 py-2 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                        >
                            Verificar identidad
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileVerification;
