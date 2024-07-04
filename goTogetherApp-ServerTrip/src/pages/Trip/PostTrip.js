import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import ProgressBar from "../../components/ui/ProgressBar";
import { FaCircle } from "react-icons/fa6";
import BackButton from "../../components/ui/Bottom/Back";
import NextButton from "../../components/ui/Bottom/Next";
import MapComponent from "../../components/ui/MapPostTrip";
import PostTripLocationInput from '../../components/layout/PostTripLocationInput';
import { useTrip } from "../Trip/TripContext";
import { useData } from "../../pages/Registrar/DataContext";
import { getVehicleByOwner } from "../../services/vehicle"



import Route from '../../components/ui/Route';

function PostTrip() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });
  const mapWidth = isSmallScreen ? '300px' : '800px';
  const mapHeight = isSmallScreen ? '500px' : '500px';
  const { tripData, saveTripData } = useTrip();

  const [progress, setProgress] = useState(0);
  const [latLngOrigin, setLatLngOrigin] = useState(null);
  const [latLngDestination, setLatLngDestination] = useState(null);
  const [duration, setDuration] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const { formData } = useData();
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    saveTripData({
      origin: '',
      destination: '',
      vehicle: '',
      duration: '',
    });
  }, []);

  //get carros por propietario
  useEffect(() => {
    async function loadVehicle() {

      const res = await getVehicleByOwner(formData.id);
      console.log(res.data);
      setVehicle(res.data);

    }
    loadVehicle();
  }, []);

  const calculateProgress = () => {
    let completedFields = 0;
    if (tripData.origin) completedFields++;
    if (tripData.destination) completedFields++;
    if (tripData.vehicle) completedFields++;

    const totalFields = 3;
    const progressPercentage = (completedFields / totalFields) * 100;
    setProgress(progressPercentage);
  };

  const checkAllFieldsFilled = () => {
    if (tripData.origin && tripData.destination && tripData.vehicle) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    calculateProgress();
    checkAllFieldsFilled();
  }, [tripData]);

  useEffect(() => {
    if (latLngOrigin && latLngDestination) {
      fetchDirections(latLngOrigin, latLngDestination);
    }
  }, [latLngOrigin, latLngDestination]);

  const handlePlaceSelected = (address, latLng, inputNumber) => {
    if (inputNumber === 1) {
      console.log("Saving origin:", address);
      saveTripData({ origin: address });
      setLatLngOrigin(latLng);
    } else if (inputNumber === 2) {
      console.log("Saving destination:", address);
      saveTripData({ destination: address });
      setLatLngDestination(latLng);
    }
  };

  const fetchDirections = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);

          // Obtener la duración del viaje
          const duration = result.routes[0].legs[0].duration.text;
          console.log(duration);
          setDuration(duration);
          saveTripData({ duration: duration });
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  };

  const [selectedLocation, setSelectedLocation] = useState({
    lat: -2.8911027,
    lng: -79.0366076,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    saveTripData({
      ...tripData,
      [name]: value,
    });
  };


  const handleRadioChange = (vehicle_id) => {
    console.log(vehicle_id)
    saveTripData({ vehicle: vehicle_id });
};

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/publicar-viaje-paso2');
  };

  return (
    <div>
      <div className="m-2 p-4">
        <Header />
      </div>

      <div className="flex justify-between m-20 mt-15 mb-5">
        <div className='flex flex-row '>
          <BackButton to="/" />
        </div>

        <div className='flex flex-row '>
          <NextButton to="/publicar-viaje-paso2" onClick={handleSubmit} />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mt-5 mb-5">
        <div className="flex flex-row flex-nowrap flex-grow justify-items-center align-items:center space-between m-4 md:gap-12">
          <div className="flex-grow">
            <div className="flex m-4 space-x-4">
              <FaCircle className="text-blue-500" />
              <ProgressBar progress={progress} color="bg-blue-500" />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400">Paso 1</h1>
              <h1 className="md:text-2l font-bold">Detalles de ruta</h1>
              <h3 className="font-semibold text-blue-500">En progreso</h3>
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex m-4 space-x-4">
              <FaCircle className="text-blue-100" />
              <ProgressBar progress={0} />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400">Paso 2</h1>
              <h1 className="md:text-2l font-bold">Viaje y pasajero</h1>
              <h3 className="font-semibold text-blue-200">Pendiente</h3>
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex m-4 space-x-4">
              <FaCircle className="text-blue-100" />
              <ProgressBar progress={0} />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400">Paso 3</h1>
              <h1 className="md:text-2l font-bold">Detalles de viaje</h1>
              <h3 className="font-semibold text-blue-200">Pendiente</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between bg-white border border-gray-200 rounded-lg shadow m-20 mt-5 mb-5 p-2">
        <form onSubmit={handleSubmit}>
          <div className="flex-1 flex-row flex-nowrap flex-grow justify-items-center align-items:center space-between m-4 mt-8 md:gap-12">
            <div className="flex-grow m-4">
              <PostTripLocationInput
                setSelectedLocation={setSelectedLocation}
                onPlaceSelected={handlePlaceSelected}
              />

              <div className="sm:col-span-4 mb-3">
                <label for="route" className="block text-l font-bold leading-6 text-gray-900">
                  Elige tu vehículo
                </label>
                {/* <div className="mt-2">
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-x-3">
                      <input id="route1"
                        name="route"
                        type="radio"
                        value="route1"  
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleRadioChange} />
                      <div className="flex flex-col mt-3">
                        <div className="flex">
                          <label for="route1" className="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route1" className="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input 
                        id="route2"
                        name="route"
                        type="radio"
                        value="route2" 
                        onChange={handleRadioChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <div className="flex flex-col align-bottom">
                        <div className="flex">
                          <label for="route2" className="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route2" className="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input 
                        id="route3"
                        name="route"
                        type="radio"
                        value="route3" 
                        onChange={handleRadioChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <div className="flex flex-col align-bottom">
                        <div className="flex">
                          <label for="route3" className="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route3" className="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="mt-2 flex flex-col justify-between gap-4">
                  {vehicle.map(vehicle => (
                    <div key={vehicle.id} className="flex items-center gap-x-3">
                      <input
                        id={`vehicle-${vehicle.id}`}
                        name="selectedVehicle"
                        type="radio"
                        value={vehicle.id}
                        //checked={selectedVehicle === vehicle.id}
                        onChange={() => handleRadioChange(vehicle.id)}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <div className="flex flex-col">
                        <div className="flex">
                          <label htmlFor={`vehicle-${vehicle.id}`} className="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">{vehicle.model}</label>
                        </div>
                        <label htmlFor={`vehicle-${vehicle.id}`} className="block text-sm font-medium leading-6 text-gray-400">{vehicle.plate}</label>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </form>

        <div className="flex-1 flex-grow flex-wrap p-4 justify-center">
          <div className="sm:col-span-4 mb-3">
            <div className="flex justify-center">
              <MapComponent
                selectedLocation={selectedLocation}
                width={mapWidth}
                height={mapHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostTrip;
