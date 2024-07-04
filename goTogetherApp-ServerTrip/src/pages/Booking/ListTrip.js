import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Calendar from '../../components/ui/Calendar';
import PassengerCount from '../../components/ui/PassengerCount';
import { MdDateRange } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import SearchLocationInput from '../../components/layout/SearchLocationInput';
import BookingCard from '../../components/layout/BookingCard';

import { FaRegClock } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineMoon } from "react-icons/ai";
import { IoMdSunny } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { getAllTrips } from "../../services/trip"


function ListTrip() {
  const location = useLocation();
  const { passengerCount: numPasajeros, selectedDate: fechaSeleccionada, origin, destination } = location.state || {};
  const [numPasajerosInput, setNumPasajerosInput] = useState('');
  const [fechaSeleccionadaInput, setFechaSeleccionadaInput] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);
  const [showPassengerCountModal, setShowPassengerCountModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [trips, setTrips] = useState([]);


  useEffect(() => {
    setNumPasajerosInput(numPasajeros || '');
    setFechaSeleccionadaInput(fechaSeleccionada || '');
    if (!selectedDate) {
      setSelectedDate(fechaSeleccionada || '');
    }
    if (passengerCount === 1) {
      setPassengerCount(numPasajeros || 1);
    }
  }, [numPasajeros, fechaSeleccionada, selectedDate, passengerCount]);

  //get viajes
  useEffect(() => {
    async function loadTrip(){
      const res = await getAllTrips();
      console.log(res.data);
      setTrips(res.data);
     
    }
    loadTrip();
  }, []);

  const handleDateInputClick = () => {
    setShowDateModal(prevState => !prevState);
    setShowPassengerCountModal(false); 
  };

  const closeModals = () => {
    setShowDateModal(false);
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

  //Refresca la página
  const handleReloadPage = () => {
    window.location.reload();
  };

  const tripsData = [
    {
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Nohelia Holtz",
      rating: 3,
      price: "$25",
      startTime: "08:00 AM",
      startLocation: "Cuenca",
      duration: "4 H 30 MIN",
      endTime: "12:30 PM",
      endLocation: "Guayaquil"
    },
    {
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Juan Perez",
      rating: 4,
      price: "$15",
      startTime: "13:00 PM",
      startLocation: "Cuenca",
      duration: "3 H 10 MIN",
      endTime: "16:10 PM",
      endLocation: "Guayaquil"
    },
    {
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Diego Ulloa",
      rating: 2,
      price: "$10",
      startTime: "18:00 PM",
      startLocation: "Cuenca",
      duration: "3 H 35 MIN",
      endTime: "21:35 PM",
      endLocation: "Guayaquil"
    }
  ];

  //Ordenar por
  const [sortCriteria, setSortCriteria] = useState('earlyDeparture');
  const [beforeNoon, setBeforeNoon] = useState(true);
  const [afterNoon, setAfterNoon] = useState(true);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleClearFilters = () => {
    setSortCriteria('earlyDeparture');
    setBeforeNoon(true);
    setAfterNoon(true);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'beforeNoon') {
      setBeforeNoon(checked);
    } else if (name === 'afterNoon') {
      setAfterNoon(checked);
    }
  };

  const filteredTrips = tripsData.filter(trip => {
    const [startHour, startMinute, startPeriod] = trip.startTime.match(/(\d+):(\d+) (\w+)/).slice(1);
    const startTime24 = parseInt(startHour) + (startPeriod === 'PM' && startHour !== '12' ? 12 : 0);
    
    const isBeforeNoon = startTime24 < 12;
    const isAfterNoon = startTime24 >= 12;

    if (beforeNoon && afterNoon) {
      return true;
    } else if (beforeNoon) {
      return isBeforeNoon;
    } else if (afterNoon) {
      return isAfterNoon;
    } else {
      return false;
    }
  });

  const sortedTrips = filteredTrips.sort((a, b) => {
    const durationToMinutes = (duration) => {
      const [hoursPart, minutesPart] = duration.split(' ').filter((_, index) => index % 2 === 0);
      const hours = parseInt(hoursPart);
      const minutes = parseInt(minutesPart);
      return (hours * 60) + minutes;
    };

    switch (sortCriteria) {
      case 'earlyDeparture':
        return new Date(`1970/01/01 ${a.startTime}`) - new Date(`1970/01/01 ${b.startTime}`);
      case 'lowPrice':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'shortDuration':
        return durationToMinutes(a.duration) - durationToMinutes(b.duration);
      default:
        return 0;
    }
  });

  return (
    <div>
      <Header />
      <div className="flex flex-col m-20 mb-5 justify-center relative">
        {/* Barra busqueda */}
        <div className="flex flex-row text-center m-4 mb-5 rounded-full bg-gray-100 shadow-md">
          <div className="flex w-full justify-between">
            <div className='w-1/2' onClick={closeModals}>
              <SearchLocationInput origin={origin} destination={destination} />
            </div>
            <div className="relative flex-grow ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                <MdDateRange />
              </div>
              <input
                type="text"
                name="date"
                id="date"
                autoComplete="off"
                placeholder="Seleccionar fecha"
                readOnly
                className="text-gray-900 border border-gray-300 text-sm block w-full ps-10 p-3 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none h-12"
                style={{ appearance: 'none' }} 
                onClick={handleDateInputClick}
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
              />
              {showDateModal && (
                <div className="absolute top-6 right-0 lg:left-0">
                  <div className="flex bg-white rounded-lg p-8 relative z-50">
                    <Calendar onSelect={handleDateSelect}/>
                  </div>
                </div>
              )}
            </div>
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-300">
                <BsPersonFillAdd />
              </div>
              <input 
                type="text" 
                name="passengers" 
                id="passengers" 
                autoComplete="off" 
                placeholder={`${passengerCount} pasajero(s)`}
                readOnly
                className="text-gray-900 border border-gray-300 text-sm block w-full ps-10 p-3 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none h-12" 
                onClick={handlePassengerCountInputClick}
              />
              {showPassengerCountModal && (
                <div className="absolute top-12 lg:left-12 lg:right-11 sm:left-0 md:left-0">
                  <div className="flex bg-gray-100 rounded-lg p-6 relative z-50 shadow-2xl justify-between">
                    <p className='text-blue-400 font-bold'>Pasajero (s)</p>
                    <PassengerCount onCountChange={handlePassengerCountChange} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-grow justify-center items-center" onClick={closeModals}>
            <div className="relative">
              <button 
              type="button" 
              onClick={handleReloadPage} 
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-full text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 w-14">
                <div className="flex items-center justify-center h-full">
                  <FaSearch className="text-blue-50" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-200 ml-0 mr-0"></div>

        <div className="flex flex-row flex-wrap m-5" onClick={closeModals}>
          {/* Filtros */}
          <div className="flex flex-col flex-grow pr-8 w-30">
            {/* Filtro 1 */}

            <div className="flex flex-col mb-3">
              <div className="flex flex-row justify-between">
                <label className="text-2xl font-medium text-blue-900">Ordenar por</label>
                <label className="p-2 text-blue-400 text-l font-bold cursor-pointer hover:bg-blue-200 hover:rounded-lg hover:text-blue-600" onClick={handleClearFilters}>Borrar todo</label>
              </div>
              <div className="mt-3 space-y-2 ">
                <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg ">
                  <div className="flex items-center space-x-4 pl-4">
                    <FaRegClock className="text-blue-400 text-lg" />
                    <label htmlFor="earlyDeparture" className="block text-sm font-medium leading-6 text-gray-700">Salida más temprana</label>
                  </div>
                  <div className="flex items-center space-x-2 justify-end pr-8">
                    <input 
                      id="earlyDeparture" 
                      name="sortCriteria" 
                      type="radio" 
                      className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" 
                      checked={sortCriteria === 'earlyDeparture'}
                      value="earlyDeparture" 
                      onChange={handleSortChange}
                    />
                  </div>
                </div>

                <div className="border-t border-blue-200"></div>

                <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2 ">
                  <div className="flex items-center space-x-4 pl-4">
                    <RiCoinsFill className="text-blue-400 text-lg" />
                    <label htmlFor="lowPrice" className="block text-sm font-medium leading-6 text-gray-700">Precio más bajo</label>
                  </div>
                  <div className="flex items-center space-x-2 justify-end pr-8">
                    <input 
                      id="lowPrice" 
                      name="sortCriteria" 
                      type="radio" 
                      className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" 
                      value="lowPrice" 
                      checked={sortCriteria === 'lowPrice'}
                      onChange={handleSortChange}
                    />
                  </div>
                </div>
                <div className="border-t border-blue-200"></div>
                <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2 ">
                  <div className="flex items-center space-x-4 pl-4">
                    <GiSandsOfTime className="text-blue-400 text-lg" />
                    <label htmlFor="shortDuration" className="block text-sm font-medium leading-6 text-gray-700">Viaje más corto</label>
                  </div>
                  <div className="flex items-center space-x-2 justify-end pr-8">
                    <input 
                      id="shortDuration" 
                      name="sortCriteria" 
                      type="radio" 
                      value="shortDuration" 
                      checked={sortCriteria === 'shortDuration'}
                      className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" 
                      onChange={handleSortChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Filtro 2 */}
            <div className="flex flex-col mb-3">
              <div className="flex flex-row justify-between">
                <label className="text-2xl font-medium text-blue-900">Hora de Salida</label>
              </div>
              <div className="mt-3 space-y-2 ">
                <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg ">
                  <div className="flex items-center space-x-4 pl-4">
                    <IoMdSunny className="text-blue-400 text-lg" />
                    <label htmlFor="beforeNoon" className="block text-sm font-medium leading-6 text-gray-700">Antes del medio día</label>
                  </div>
                  <div className="flex items-center space-x-2 justify-end pr-8">
                    <input 
                      id="beforeNoon" 
                      name="beforeNoon" 
                      type="checkbox" 
                      checked={beforeNoon}
                      className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" 
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className="border-t border-blue-200"></div>
                <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2 ">
                  <div className="flex items-center space-x-4 pl-4">
                    <AiOutlineMoon className="text-blue-400 text-lg" />
                    <label htmlFor="afterNoon" className="block text-sm font-medium leading-6 text-gray-700">Después del medio día</label>
                  </div>
                  <div className="flex items-center space-x-2 justify-end pr-8">
                    <input 
                      id="afterNoon" 
                      name="afterNoon" 
                      type="checkbox" 
                      checked={afterNoon}
                      className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600"
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
                <div className="border-t border-blue-200"></div>
              </div>
            </div>

          </div>

          {/* Viajes */}
          <div className="flex flex-col flex-grow w-70">
            <div className="my-2">
              <label className="text-xl font-medium text-blue-900 mb-2">Hoy</label>
            </div>

            <div className="mb-2">
              <label className="text-l font-medium text-gray-700 mb-2">Cuenca, Ecuador → Guayaquil, Ecuador: 3 viajes disponibles</label>
            </div>

            <Link to="/confirmar-viaje">

              {/* ver con el sortedTrips */}
            {trips.map((trip) => (
                  <BookingCard trip = {trip} />
                  
                ))}

              {/* {sortedTrips.map((trip, index) => (
                <BookingCard
                  key={index}
                  avatarSrc={trip.avatarSrc}
                  name={trip.name}
                  rating={trip.rating}
                  price={trip.price}
                  startTime={trip.startTime}
                  startLocation={trip.startLocation}
                  duration={trip.duration}
                  endTime={trip.endTime}
                  endLocation={trip.endLocation}
                />
              ))} */}
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ListTrip