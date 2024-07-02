import React, { useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import { MdDateRange } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import SearchLocationInput from './SearchLocationHero'
import Calendar from '../../components/ui/Calendar';
import PassengerCount from '../../components/ui/PassengerCount';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showPassengerCountModal, setShowPassengerCountModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [origin, setOrigin] = useState({ address: "", latLng: null });
  const [destination, setDestination] = useState({ address: "", latLng: null });
  const navigate = useNavigate();

  const handleDateInputClick = () => {
    setShowDateModal(prevState => !prevState);
    setShowPassengerCountModal(false);
  };

  const handlePassengerCountInputClick = () => {
    setShowPassengerCountModal(prevState => !prevState);
    setShowDateModal(false);
  };

  const handlePassengerCountChange = (newCount) => {
    setPassengerCount(newCount);
  };

  const handleDateSelect = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    setSelectedDate(formattedDate);
    setShowDateModal(false);
  };

  //Obtiene las direcciones
  const handlePlaceSelected = (address, latLng, inputNumber) => {
    if (inputNumber === 1) {
      setOrigin({ address, latLng });
    } else if (inputNumber === 2) {
      setDestination({ address, latLng });
    }
  };

  const handleSearch = () => {
    navigate('/listar-viajes', { 
      state: { 
        passengerCount, 
        selectedDate, 
        origin, 
        destination 
      } 
    });
  };

  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-8 mt-5">
      <div className="absolute inset-0 z-0">
        <img src={require("../../assets/img/sedan-car-rafiki.png")} alt="Fondo curvado" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row relative z-10">

        <div className="flex-1 flex-col sm:w-2/5 ">
          {/* Simula a una card */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-blue-900  sm:mt-28 ml-6 mt-0 mb-4 ">
            <div class="p-5">
               <SearchLocationInput onPlaceSelected={handlePlaceSelected} /> 
              <div className="sm:col-span-3">

                <div className="mt-2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                    <MdDateRange />
                  </span>
                  <input
                    type="text"
                    class="text-gray-900 text-sm rounded-lg block w-full ps-10 p-3  dark:placeholder-gray-400 dark:text-white h-12"
                    placeholder="Selecccionar fecha"
                    readOnly
                    onClick={handleDateInputClick}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                  {showDateModal && (
                    <div className="absolute top-8 lg:left-0 sm:left-0 md:left-0">
                      <div className="bg-white rounded-lg p-8 relative z-50">
                        <Calendar onSelect={handleDateSelect} />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                    <BsPersonFillAdd />
                  </span>
                  <input
                    type="text"
                    class="text-gray-900 text-sm rounded-lg block w-full ps-10 p-3 dark:placeholder-gray-400 dark:text-white h-12" 
                    placeholder={`${passengerCount} pasajero(s)`}
                    readOnly
                    onClick={handlePassengerCountInputClick} 
                  />
                  {showPassengerCountModal && (

                    <div className="mb-10 absolute w-full top-10">
                      <div className="flex bg-gray-100 rounded-lg p-6 relative z-50 shadow-2xl justify-between">
                        <p className='text-blue-400 font-bold'>Pasajero (s)</p>
                        <PassengerCount onCountChange={handlePassengerCountChange} />
                      </div>
                    </div>

                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <button
                    onClick={handleSearch}
                    className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center h-12 w-full"
                  >
                    <FaSearch className="text-white mr-2" />
                    Buscar
                  </button>
                </div>
              </div>
              {/* <div className="sm:col-span-3">
                <div className="mt-2">
                  <button
                    type="button"
                    className="w-full  text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  mx-auto py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12" >
                    Buscar
                  </button>
                </div>
              </div> */}

            </div>
          </div>

        </div>

        <div className="flex flex-col sm:w-3/5 mt-12 sm:mb-0 ">
          <div className="text-black">
            <div className="w-full mx-auto text-center flex flex-col justify-center ">
              <p className="font-bold text-blue-400 ">VIAJEMOS JUNTOS</p>
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 text-blue-900">
                ¡Un viaje, múltiples historias!
              </h1>

              <div className="flex justify-center items-center ">
                <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 text-blue-900">
                  La primera aplicación de{' '}
                  <ReactTyped strings={['carpooling', 'viajes compartidos', 'carsharing']} typeSpeed={120} backSpeed={140} loop className="text-blue-400" />
                  {' en Ecuador'}
                </p>
              </div>

              <p className="md:text-2xl text-xl font-bold text-gray-500 py-4">
                Únete a nuestra comunidad y haz nuevos amigos mientras ahorras
                en tu viaje.
              </p>

              <Link to="/registrar-usuario"
                type="button"
                className="w-[200px] text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-6 mx-auto py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Registrate
              </Link>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;
