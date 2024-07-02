import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/layout/Header";
import ProgressBar from "../../components/ui/ProgressBar";
import { FaCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BackButton from "../../components/ui/Bottom/Back";
import NextButton from "../../components/ui/Bottom/Next";
import { useTrip } from "../Trip/TripContext";



function PostTripStep3() {
  const { state } = useLocation();
  const { tripData, saveTripData } = useTrip(); 
  const [preferenceData, setPreferenceData] = useState({
    checked_items: {}, 
    is_reservation_enabled: false,
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    let completedFields = 0;
    if (Object.keys(preferenceData.checked_items).length > 0) completedFields++;
    if (preferenceData.is_reservation_enabled) completedFields++;

    const totalFields = 2;
    const progressPercentage = (completedFields / totalFields) * 100;
    setProgress(progressPercentage);
  };

  const checkAllFieldsFilled = () => {
    if (
      Object.keys(preferenceData.checked_items).length > 0 
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };
  useEffect(() => {
    calculateProgress();
    checkAllFieldsFilled();
  }, [preferenceData]);

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setPreferenceData((prevState) => ({
      ...prevState,
      checked_items: {
        ...prevState.checked_items,
        [name]: checked,
      },
    }));
  };

  const handleReservationToggleChange = () => {
    setPreferenceData((prevState) => ({
      ...prevState,
      is_reservation_enabled: !prevState.is_reservation_enabled,
    }));
  };


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(preferenceData.checked_items)
    console.log(preferenceData.is_reservation_enabled)
    saveTripData({ 
      ...tripData, 
      checked_items: preferenceData.checked_items,  
      is_reservation_enabled: preferenceData.is_reservation_enabled 
    });   
    navigate(`/detalle-viaje`);
  };


  return (
    <div>
      <div className="m-2 p-4">
        <Header />
      </div>


      <div className="flex justify-between m-20 mt-15 mb-5">
       
        <div className='flex flex-row '>
          <BackButton to="/publicar-viaje-paso2" />
        </div>

        <div className='flex flex-row '>
        <NextButton to="/detalle-viaje" onClick={handleSubmit} disabled={!allFieldsFilled}/>
        </div>

      </div>

      {/* Card este div */}
      <div className=" bg-white border border-gray-200 rounded-lg shadow  m-20 mt-5 mb-5">
        <div className="flex flex-row flex-nowrap  flex-grow justify-items-center align-items:center space-between m-4 md:gap-12 ">
          {/* Point 1 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCheckCircle className="text-[#65a30d]" />
              <ProgressBar progress={100} color="bg-[#65a30d]" />
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 1</h1>
              <h1 className="md:text-2l font-bold">Detalles de ruta</h1>
              <h3 className="font-semibold text-[#65a30d]">Completado</h3>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCheckCircle className="text-[#65a30d]" />
              <ProgressBar progress={100} color="bg-[#65a30d]" />
            </div>

            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 2</h1>
              <h1 className="md:text-2l font-bold">Viaje y pasajero</h1>
              <h3 className="font-semibold text-[#65a30d]">Completado</h3>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex-grow">
            <div className="flex m-4 space-x-4 ">
              <FaCircle className="text-blue-500" />
              <ProgressBar progress={progress} color="bg-blue-500" />
            </div>
            <div className="flex flex-col m-4">
              <h1 className="font-semibold text-gray-400 ">Paso 3</h1>
              <h1 className="md:text-2l font-bold">Detalles de viaje</h1>
              <h3 className="font-semibold text-blue-500">En progreso</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-between bg-white border border-gray-200 rounded-lg shadow  m-20 mt-5 mb-5 ">
        <div className="flex-1 flex-grow m-8 ">
          {/* Point 1 */}
          <div className="flex-grow">

            <div class="sm:col-span-4 mb-4">
              <label
                for="username"
                class="block text-l font-bold leading-6 text-gray-900">
                Activar reserva automática en tu viaje
              </label>
              <div class="mt-4">

                <label class="inline-flex items-center cursor-pointer">
                  <input 
                     type="checkbox"
                     id="reservationToggle"
                     checked={preferenceData.is_reservation_enabled}
                     onChange={handleReservationToggleChange}
                     className="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-400">Activar reserva automática</span>
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <MdInfo className="text-blue-400 text-xl" />
                <span className="text-sm font-medium text-blue-400">Caso contrario las solicitudes de reserva tendrán que ser leídas antes que caduquen</span>
              </div>

            </div>


            <div class="sm:col-span-4 mb-4">
              <label for="username" class="block text-l font-bold leading-6 text-gray-900">
                Seleccione el equipaje que puede llevar tu pasajero
              </label>
              <div class="mt-4">

                <div class="mt-2 space-y-2 ">
                  <div class="flex items-center gap-x-3">
                    <input  id="bag"
                      name="bag"
                      type="checkbox"
                      checked={preferenceData.checked_items.bag || false}
                      onChange={handleCheckBoxChange}
                    
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />

                    <div className="flex items-center space-x-2">
                      <FaShoppingBag className="text-blue-400 text-lg" />
                      <label for="bag" class="block text-sm font-medium leading-6 text-gray-900">1 artículo personal (bolso)</label>
                    </div>
                  </div>

                  <div class="flex items-center gap-x-3 border-t border-gray-200 pt-2">
                    <input  id="backpack"
                      name="backpack"
                      type="checkbox"
                      checked={preferenceData.checked_items.backpack || false}
                      onChange={handleCheckBoxChange}
                     class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />

                    <div className="flex items-center space-x-2">
                      <MdBackpack className="text-blue-400 text-lg" />
                      <label for="backpack" class="block text-sm font-medium leading-6 text-gray-900">1 equipaje de mano (10kg)</label>
                    </div>
                  </div>

                  <div class="flex items-center gap-x-3 border-t border-gray-200 pt-2">
                    <input 
                     id="suitcase"
                     name="suitcase"
                     type="checkbox"
                     checked={preferenceData.checked_items.suitcase || false}
                     onChange={handleCheckBoxChange} class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />

                    <div className="flex items-center space-x-2">
                      <BsFillSuitcaseFill className="text-blue-400 text-lg" />
                      <label for="suitcase" class="block text-sm font-medium leading-6 text-gray-900">1 equipaje de maletero (23kg)</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>



            <div class="sm:col-span-4 mb-4">


              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
                <Link to="/preferencias" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">
                  Editar mis referencias de viaje <FaAngleRight className="w-4 h-4 ml-4" />
                </Link>
              </div>



            </div>
          </div>
        </div>
          <div className="flex-1 flex-grow flex-wrap m-8 justify-center ">
          <div class="sm:col-span-4 mb-3 ">
            <div className="flex justify-center"> 
            <img src={require('../../assets/img/carpool-booking.png')} alt="Carpool Booking" style={{ width: '300px', height: 'auto' }} />

            </div>
            <div class="mt-2">
              <div className="flex items-center space-x-4">
                <FaListCheck className="text-blue-400 text-xl" />
                <div className="flex flex-col ">
                  <span className="text-sm font-medium text-blue-400">Menos trabajo</span>
                  <label className="text-sm font">No tendrás que consultar cada solicitud de viaje</label>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <div className="flex items-center space-x-4">
                <FaMoneyCheckAlt className="text-blue-400 text-xl" />
                <div className="flex flex-col ">
                  <span className="text-sm font-medium text-blue-400">Más pasajeros</span>
                  <label className="text-sm font">Prefieren una respuesta rápida</label>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default PostTripStep3;