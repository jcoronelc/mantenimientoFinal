import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from "../../pages/Registrar/DataContext";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import { SiChevrolet, SiKia, SiMitsubishi, SiToyota, SiHyundai } from "react-icons/si";
import PassengerCount from "../../components/ui/PassengerCount";
import VehicleCard from "../../components/layout/VehicleCard";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';
import { createVehicle, getVehicleByOwner, deleteVehicle } from "../../services/vehicle"



function ProfileAddCar({ onSave, onCancel }) {

    const { formData } = useData();
    const [vehicle, setVehicle] = useState([]);


    //get carros por propietario
    useEffect(() => {
        async function loadVehicle() {
          
            const res = await getVehicleByOwner(formData.id);
            console.log(res.data);
            setVehicle(res.data);

        }
        loadVehicle();
    }, []);

    const [carData, setCarData] = useState({
        plate: '',
        model: '',
        passengers: 0,
        color: '',
        type: '',
        brand: ''
    });

    const [vehicles, setVehicles] = useState([
        {
            model: "Tucson",
            brand: "Hyundai",
            color: "Rojo",
            passengers: 4,
            plate: "PCP-5644"
        },
        {
            model: "Corolla",
            brand: "Toyota",
            color: "Azul",
            passengers: 5,
            plate: "XYZ-123"
        },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSave = async (e) => {
        setVehicle([...vehicle, carData]);
        //onSave(carData);  // Optional, if you need to perform an additional action
    

        const additionalData = {
            owner: formData.id,
        };

        const combinedData = {
            ...carData,
            ...additionalData
        };

        const res = await createVehicle(combinedData);
        console.log(res)
        notifyExtra('Vehículo registrado correctamente');

        setCarData({
            plate: '',
            model: '',
            passengers: 0,
            color: '',
            type: '',
            brand: ''
        });  // Reset form after save

    };

    const handlePassengerCountChange = (count) => {
        setCarData({
            ...carData,
            passengers: count
        });
    };

    const handleDeleteVehicle = async (index, vehicle_id) => {
      
        const res = await deleteVehicle(vehicle_id);
        console.log(res);
        notifySuccess('Vehículo eliminado correctamente');

        setVehicle((prevVehicles) => prevVehicles.filter((_, i) => i !== index));
    };



    const options = ['SUV', 'Sedan', 'Hatchback', 'VAN', '4 x 4'];
    const brands = [
        { icon: <SiChevrolet size={30} />, name: 'Chevrolet' },
        { icon: <SiKia size={30} />, name: 'Kia' },
        { icon: <SiHyundai size={30} />, name: 'Hyundai' },
        { icon: <SiMitsubishi size={30} />, name: 'Mitsubishi' },
        { icon: <SiToyota size={30} />, name: 'Toyota' }
    ];

    const colorMap = {
        'bg-white': 'Blanco',
        'bg-gray-500': 'Gris',
        'bg-red-600': 'Rojo',
        'bg-blue-900': 'Azul',
        'bg-gray-900': 'Negro'
    };
    const colors = Object.keys(colorMap);

    const handleOptionClick = (option) => {
        setCarData({ ...carData, type: option });
    };

    const handleBrandClick = (brandName) => {
        setCarData({ ...carData, brand: brandName });
    };

    const handleColorClick = (color) => {
        setCarData({ ...carData, color: color });
    };


   
    return (
        <div className="m-2 p-4">
            <Header />
            <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                <BackButton to="/mi-cuenta" />
            </div>

            <div className="sm:mr-20 sm:ml-20 ml-8 mr-8">
                <div className="flex justify-center items-center">
                    <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">Añade tu vehículo</h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow mt-5 mb-5">
                        <div className="flex flex-col p-8">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="type" className="block text-lg font-bold text-blue-900 mb-2">Tipo de vehículo</label>
                                <div className="flex flex-wrap gap-3">
                                    {options.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => handleOptionClick(option)}
                                            className={`cursor-pointer text-primary font-medium rounded-full dark:bg-blue-50 dark:hover:bg-blue-100 text-base px-4 py-2 text-center flex items-center ${carData.type === option ? 'ring-2 ring-blue-500' : ''}`}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="brand" className="block text-lg font-bold text-blue-900 mb-2">Marca del vehículo</label>
                                <div className="flex flex-wrap gap-3">
                                    {brands.map((brand) => (
                                        <div
                                            key={brand.name}
                                            onClick={() => handleBrandClick(brand.name)}
                                            className={`cursor-pointer text-primary font-medium rounded-full dark:bg-blue-50 dark:hover:bg-blue-100 text-base px-4 py-2 text-center flex items-center ${carData.brand === brand.name ? 'ring-2 ring-blue-500' : ''}`}
                                        >
                                            {brand.icon}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col mb-4 mt-2">
                                <label htmlFor="model" className="block text-lg font-bold text-blue-900 mb-2">Modelo del vehículo</label>
                                <input
                                    id="model"
                                    name="model"
                                    type="text"
                                    value={carData.model}
                                    onChange={handleChange}
                                    className="block border w-full border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="passengers" className="block text-lg font-bold text-blue-900 mb-2">Número de asientos</label>
                                <div className="mt-2 w-full">
                                    <PassengerCount onCountChange={handlePassengerCountChange} />
                                </div>
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="color" className="block text-lg font-bold text-blue-900 mb-2">Elegir color</label>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {colors.map((color) => (
                                        <div
                                            key={color}
                                            onClick={() => handleColorClick(color)}
                                            className={`cursor-pointer rounded-full w-8 h-8 ${color} border border-gray-400 ${carData.color === color ? 'ring-2 ring-blue-500' : ''}`}
                                        />
                                    ))}
                                </div>
                                <div className="mt-2 text-gray-700">
                                    {carData.color && colorMap[carData.color]}
                                </div>
                            </div>

                            <div className="flex flex-col mb-4 mt-2">
                                <label htmlFor="plate" className="block text-lg font-bold text-blue-900 mb-2">Placa del vehículo</label>
                                <input
                                    id="plate"
                                    name="plate"
                                    type="text"
                                    value={carData.plate}
                                    onChange={handleChange}
                                    className="block border w-full border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md"
                                />
                            </div>

                            <div className="flex justify-end mt-4 gap-4">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="px-4 py-2 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                                >
                                    Agregar vehículo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow mt-5 mb-5">
                        <div className="flex flex-col p-8">
                            <div className="flex flex-col mb-4 mt-2">
                                <label htmlFor="email" className="block text-lg font-bold text-blue-900 mb-2">Mis vehículos</label>
                            </div>

                            {/* {vehicles.map((vehicle, index) => (
                                <VehicleCard
                                    key={index}
                                    name={vehicle.model}
                                    brand={vehicle.brand}
                                    color={colorMap[vehicle.color]}
                                    passengers={vehicle.passengers}
                                    plate={vehicle.plate}
                                    onDelete={() => handleDeleteVehicle(index)}
                                />
                            ))} */}

                            {vehicle.map((vehicle, index) => (
                                 <VehicleCard
                                 key={index}
                                 name={vehicle.model}
                                 brand={vehicle.brand}
                                 color={colorMap[vehicle.color]}
                                 passengers={vehicle.passengers}
                                 plate={vehicle.plate}
                                 onDelete={() => handleDeleteVehicle(index, vehicle.id )}
                             />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileAddCar;
