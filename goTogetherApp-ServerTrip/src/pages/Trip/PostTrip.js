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

function PostTrip() {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });

  const mapWidth = isSmallScreen ? '300px' : '800px';
  const mapHeight = isSmallScreen ? '500px' : '500px';

  const { tripData, saveTripData } = useTrip();
  const [progress, setProgress] = useState(0);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);



  useEffect(() => {
    saveTripData({
      origin: '',
      destination: '',
      route: ''
    });
  }, []);

 
  const calculateProgress = () => {
    let completedFields = 0;
    if (tripData.origin) completedFields++;
    //if (tripData.pickup) completedFields++;
    if (tripData.destination) completedFields++;
    //if (tripData.dropoff) completedFields++;
    if (tripData.route) completedFields++;

    const totalFields = 3;
    const progressPercentage = (completedFields / totalFields) * 100;
    setProgress(progressPercentage);
  };

  const checkAllFieldsFilled = () => {
    if (
      tripData.origin &&
      //tripData.pickup &&
      tripData.destination &&
      //tripData.dropoff &&
      tripData.route
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };
  

  useEffect(() => {
    calculateProgress();
    checkAllFieldsFilled();
  }, [tripData]);


  const handlePlaceSelected = (address, latLng, inputNumber) => {
    if (inputNumber === 1) {
      console.log("Saving origin:", address);
      saveTripData({ origin: address });
    } else if (inputNumber === 2) {
      console.log("Saving destination:", address);
      saveTripData({ destination: address });
    }
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

  const handleRadioChange = (e) => {
    const { value } = e.target;
    saveTripData({ route: value });

    // saveTripData((prevState) => ({
    //   ...prevState,
    //   route: value,
    // }));
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
        {/* <Link to="/" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">
           Regresar
        </Link> */}

        {/* <Link to="/publicar-viaje-paso2" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">
          Continuar
        </Link> */}

        <div className='flex flex-row '>
          <BackButton to="/" />
        </div>

        <div className='flex flex-row '>
          <NextButton to="/publicar-viaje-paso2" onClick={handleSubmit}/>
        </div>

      </div>

      <div className=" bg-white border border-gray-200 rounded-lg shadow m-20 mt-5 mb-5">
        <div className="flex flex-row flex-nowrap  flex-grow justify-items-center align-items:center space-between m-4 md:gap-12 ">
          {/* Point 1 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              {/* <FaCheckCircle className="text-blue-500" /> */}
              <FaCircle className="text-blue-500" />
              {/* <ProgressBar progress={80} color="bg-blue-500" /> */}
              <ProgressBar progress={progress} color="bg-blue-500" />
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 1</h1>
              <h1 className="md:text-2l font-bold">Detalles de ruta</h1>
              <h3 className="font-semibold text-blue-500">En progreso</h3>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCircle className="text-blue-100" />
              <ProgressBar progress={0} />
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 2</h1>
              <h1 className="md:text-2l font-bold">Viaje y pasajero</h1>
              <h3 className="font-semibold text-blue-200">Pendiente</h3>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCircle className="text-blue-100" />
              <ProgressBar progress={0} />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 3</h1>
              <h1 className="md:text-2l font-bold">Detalles de viaje</h1>
              <h3 className="font-semibold text-blue-200">Pendiente</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-between bg-white border border-gray-200 rounded-lg shadow m-20 mt-5 mb-5 p-2">
        <form onSubmit={handleSubmit}>
          <div className="flex-1 flex-row flex-nowrap flex-grow justify-items-center align-items:center space-between m-4 mt-8 md:gap-12  ">
            {/* Point 1 */}
            <div className="flex-grow m-4">
              <PostTripLocationInput
                setSelectedLocation={setSelectedLocation}
                onPlaceSelected={handlePlaceSelected}
              />

              {/* <div class="sm:col-span-4 mb-3">
                <label
                  for="username"
                  class="block text-l font-bold leading-6 text-gray-900">
                  ¿Dónde te gustaría recoger a los pasajeros?
                </label>
                <div class="mt-2">
                  <div class="flex ">
                    <input
                      type="text"
                      name="pickup"
                      id="pickup"
                      autocomplete="pickup"
                      value={tripData.pickup}
                      onChange={handleChange}
                      class="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div> */}
{/* 
              <div class="sm:col-span-4 mb-3">
                <label
                  for="username"
                  class="block text-l font-bold leading-6 text-gray-900">
                  ¿Dónde te gustaría dejar a los pasajeros?
                </label>
                <div class="mt-2">
                  <div class="flex">
                    <input
                      type="text"
                      name="dropoff"
                      id="dropoff"
                      autocomplete="dropoff"
                      value={tripData.dropoff}
                      onChange={handleChange}
                      class="block w-full rounded-md border border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div> */}

              <div class="sm:col-span-4 mb-3">
                <label for="route" class="block text-l font-bold leading-6 text-gray-900">
                  ¿Cuál es tu ruta?
                </label>
                <div class="mt-2">
                  <div class="mt-2 space-y-2">
                    <div class="flex items-center gap-x-3">
                      <input id="route1"
                        name="route"
                        type="radio"
                        value="route1"  
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onChange={handleRadioChange} />
                      <div className="flex flex-col mt-3">
                        <div className="flex">
                          <label for="route1" class="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route1" class="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input 
                        id="route2"
                        name="route"
                        type="radio"
                        value="route2" 
                      onChange={handleRadioChange}
                      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <div className="flex flex-col align-bottom">
                        <div className="flex">
                          <label for="route2" class="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route2" class="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input 
                      id="route3"
                      name="route"
                      type="radio"
                      value="route3" 
                      onChange={handleRadioChange}
                       class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <div className="flex flex-col align-bottom">
                        <div className="flex">
                          <label for="route3" class="block text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">3 H 10 MIN</label>
                        </div>
                        <label for="route3" class="block text-sm font-medium leading-6 text-gray-400">360 km - Cuenca - Molleturo - Guayaquil</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="flex-1 flex-grow flex-wrap p-4 justify-center">
          <div class="sm:col-span-4 mb-3 ">
            <div className="flex justify-center">
              {/* aqui va un mapa */}
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
