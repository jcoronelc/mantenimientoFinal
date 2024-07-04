import React, { useState, useEffect } from 'react';
import Header from "../../components/layout/Header";
import Map  from "../../components/layout/Map";
import CardTrip from './CardTripControl';
import Calendar from '../../components/ui/Calendar';
import { IoSearchSharp } from "react-icons/io5";
import { IoFunnelOutline } from "react-icons/io5";
import { IoLinkOutline, IoLogoWhatsapp, IoInformationCircleOutline, IoListOutline } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';

function Admin(){
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+593996426065'; // Número de teléfono de WhatsApp (Solo para prueba)
  const [showActions, setShowActions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Conductor");
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const opcionesFiltro = ['Conductor', 'ID Ruta', 'Fecha']; 
  const [readOnly, setReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState('');

  //Ancho y alto del mapa
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1300px)' });

  const mapWidth = isSmallScreen ? '300px' : '1000px';
  const mapHeight = isSmallScreen ? '500px' : '450px'; 

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal); 
  };

  useEffect(() => {
    // Función para actualizar la fecha y la hora cada segundo
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //Da el formato a la fecha
  const formatDateTime = () => {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
    const dayOfMonth = currentDateTime.getDate();
    const month = months[currentDateTime.getMonth()];
    const year = currentDateTime.getFullYear();
    const hour = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();

    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year} ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  //Copia la URL
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('Error al copiar el enlace:', error);
      });
  };

  //Envia mensajes a whatsapp
  const handleSendMessage = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  const seleccionarFiltro = (filtro) => {
    setFiltroSeleccionado(filtro);
    setMostrarDropdown(false);
    setShowDateModal(filtro === 'Fecha');
    setReadOnly(filtro === 'Fecha');
    setInputValue('');
    setFilteredTrips(tripsData);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    filtrarViajes(value);
  };

  const handleDateSelect = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    setInputValue(formattedDate);
    setShowDateModal(false);
    filtrarViajes(formattedDate);
  };

  const handleInputClick = () => {
    //setMostrarDropdown(!mostrarDropdown);
    if (filtroSeleccionado === 'Fecha') {
      setShowDateModal(prevState => !prevState);
    }
  };

  const filtrarViajes = (value) => {
    let filtered = tripsData;
  
    const normalizeDate = (dateString) => {
      const [day, month, year] = dateString.split('/');
      return `${day.padStart(2, '0')} de ${getMonthName(month)} de ${year}`;
    };
  
    const getMonthName = (month) => {
      const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
      ];
      return months[parseInt(month, 10) - 1];
    };
  
    switch (filtroSeleccionado) {
      case 'Conductor':
        filtered = tripsData.filter(trip => trip.driver.toLowerCase().includes(value.toLowerCase()));
        break;
      case 'ID Ruta':
        filtered = tripsData.filter(trip => trip.idRuta.toLowerCase().includes(value.toLowerCase()));
        break;
      case 'Fecha':
        const normalizedValue = normalizeDate(value);
        filtered = tripsData.filter(trip => trip.startTime.toLowerCase().includes(normalizedValue.toLowerCase()));
        break;
      default:
        break;
    }
    setFilteredTrips(filtered);
  };

  const actions = [
    { label: "Copiar vínculo", onClick: copyLink, icon: <IoLinkOutline /> },
    { label: "Enviar mensaje", onClick: handleSendMessage, icon: <IoLogoWhatsapp  /> },
    { label: "Cancelar Ruta", onClick: () => {}, icon: <IoInformationCircleOutline /> }
  ];

  const tripsData = [
    {
      idRuta: "CG205NH24",
      distancia: "300 Km",
      startTime: "20 de mayo de 2024 08:00 AM",
      endTime: "20 de mayo de 2024 12:30 PM",
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      driver: "Nohelia Holtz",
      state: "En curso"
    },
    {
      idRuta: "CG205JP24",
      distancia: "330 Km",
      startTime: "20 de mayo de 2024 13:00 PM",
      endTime: "20 de mayo de 2024 16:10 PM",
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      driver: "Juan Perez",
      state: "Completado"
    },
    {
      idRuta: "CG215DU24",
      distancia: "400 Km",
      startTime: "21 de mayo de 2024 18:00 PM",
      endTime: "21 de mayo de 2024 21:35 PM",
      avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      driver: "Diego Ulloa",
      state: "Cancelado"
    }
  ];

  const [filteredTrips, setFilteredTrips] = useState(tripsData);

  return (
    <>
      <div className="m-2 p-4">
        <Header />
      </div>
      {/* Contenedor Principal */}
      <div className="flex flex-col mt-[50px] m-4 lg:flex-row">
        {/* Contenedor de las tarjetas de los usarios */}
        <div className="my-6 w-full md:w-1/4 mr-5 border rounded-lg border-gray-200 shadow py-4 lg:h-screen lg:my-0 overflow-y-auto h-[250px]">
          <h1 className='mx-2 font-bold mt-2 text-blue-900'>Lista de Viajes</h1>
          {/* Filtro */}
          <div className='flex mt-2'>
            <div className="mx-2 relative w-full flex items-center">
              <span className="absolute inset-y-0 left-0 flex text-gray-400 items-center pl-3 text-xl">
                <IoSearchSharp />
              </span>
              <input
                type="text"
                name="search_trip"
                id="search_trip"
                placeholder={`Filtrar por ${filtroSeleccionado || ''}`}
                readOnly={readOnly}
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleInputClick}
                className="bg-gray-200 text-gray-900 text-md rounded-lg block w-full ps-12 dark:placeholder-gray-400 dark:text-white h-9"
              />
              {showDateModal && (
                <div className="absolute top-6 right-0 lg:left-0">
                  <div className="flex bg-white rounded-lg p-8 relative z-50">
                      <Calendar onSelect={handleDateSelect}/>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={() => setMostrarDropdown(!mostrarDropdown)}
                className='mr-2 bg-blue-100 hover:bg-blue-600 w-10 h-full rounded-lg'
              >
                <div className="flex items-center justify-center">
                  <IoFunnelOutline className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                </div>
              </button>
              {mostrarDropdown && (
                <div className="absolute right-0 mt-1 w-40 shadow-lg rounded-lg bg-gray-50 text-gray-800 z-50">
                  <ul>
                    {opcionesFiltro.map((opcion, index) => (
                      <li
                        key={index}
                        onClick={() => seleccionarFiltro(opcion)}
                        className="py-2 px-3 cursor-pointer text-blue-900 hover:bg-blue-50"
                      >
                        {opcion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Tarjetas */}
          <div className="md:space-y-4">
            {filteredTrips.map((trip, index) => (
              <CardTrip 
                key={index}
                idRuta={trip.idRuta}
                distancia={trip.distancia}
                startTime={trip.startTime}
                endTime={trip.endTime}
                avatarSrc={trip.avatarSrc}
                driver={trip.driver}
                state={trip.state}
              />
            ))}
          </div>
        </div>

        {/* Contenedor Información del viaje*/}
        <div className="w-full md:w-3/4 border rounded-lg flex-1 justify-center border-gray-200 shadow lg:h-screen">
          {/* Conetedor Header Detalles */}
          <div className='flex justify-between'>
            {/* Contenedor Image, nombre y fecha */}
            <div className='m-4 flex flex-row items-center space-x-4 justify-start'>
              <img className="inline-block w-[45px] h-auto rounded-full ring-2 ring-blue-400"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="avatar" />
              <div>
                <label htmlFor='userconductor' className='font-bold text-blue-900'> Nohelia Holtz </label>
                <p htmlFor='current_date' className='text-sm text-gray-500'> {formatDateTime()} </p>
              </div>
            </div>
            {/* Contenedor de los botones */}
            <div className='relative'>
              {/* Botón de hamburguesa */}
              <button onClick={toggleModal} className="w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center lg:hidden" title='Enviar mensaje'>
                <div className="flex items-center justify-center">
                  <IoListOutline className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                </div>
              </button>

              {/* Acciones */}
              <div className={`flex justify-end m-2 ${showActions ? 'block' : 'hidden'} lg:block`}>
                <button type="button"
                  className="relative w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Copiar vínculo del viaje'  onClick={copyLink}>
                      <div className="flex items-center justify-center">
                        <IoLinkOutline className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                      </div>
                      {copied && (
                      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md">
                        Enlace copiado
                      </div>
                    )}
                  </button>
                  <button type="button"
                    className="w-[40px] h-[40px] m-2 text-blue-50 bg-blue-100 hover:bg-blue-600 focus:ring-2 font-medium rounded-lg text-sm my-6 text-center" title='Enviar mensaje' onClick={handleSendMessage}>
                      <div className="flex items-center justify-center">
                        <IoLogoWhatsapp className="w-7 h-7 text-blue-800 hover:text-blue-50" />
                      </div>
                  </button>
                  <button type="button"
                    className="w-[200px] h-[40px]  text-blue-50 bg-red-600 hover:bg-red-50 hover:text-red-600 focus:ring-2 font-medium rounded-lg text-sm my-6 m-2" title='Cancelar Ruta'>
                      <div className="flex items-center justify-center">
                        <IoInformationCircleOutline className="w-7 h-7 text-blue-50" />
                        <p className='m-2 font-bold'>Cancelar Ruta</p>
                      </div>
                  </button>
              </div>
              {/* Modal */}
              {showModal && (
                <div className="absolute top-16 right-0 z-50">
                  <div className="w-60 bg-gray-50 rounded-lg p-2 shadow-lg">
                    <ul>
                      {actions.map((action, index) => (
                        <li key={index} className="mb-2 flex items-center">
                        <button
                          onClick={() => {
                            action.onClick();
                            toggleModal();
                          }}
                          className="text-blue-500 font-bold hover:bg-blue-50 flex items-center"
                        >
                          <span className="mr-2 text-blue-700">{action.icon}</span> {/* Añade el ícono aquí */}
                          {action.label}
                        </button>
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Contenedor Información */}
          <div className='flex flex-col justify-between m-4 lg:flex-row'>
            <div className="flex flex-col border rounded-lg border-gray-200 shadow-lg p-3 lg:border-none lg:shadow-none lg:p-0">
              <h1 className='text-blue-900 font-bold'>Conductor</h1>
              <label htmlFor='nombreConductor' className='text-sm font-bold text-blue-400'> Nohelia Holtz </label>
              <label htmlFor='idConductor' className='text-sm text-gray-500'> #7G5J1R8V0N </label>
              <div className='flex'>
                <label htmlFor='modeloVehiculo' className='text-sm text-gray-500'>Mazda 7</label>
                <label className='text-sm text-gray-400 mx-2'>-</label>
                <label htmlFor='colorVehiculo' className='text-sm text-gray-500'>Negro</label>
              </div>
            </div>
            <div className="flex flex-col border rounded-lg border-gray-200 shadow-lg p-3 my-3 lg:border-none lg:shadow-none lg:p-0 lg:my-0">
              <h1 className='text-blue-900 font-bold'>Pasajero(s)</h1>
              <label htmlFor='nombrePasajero' className='text-sm font-bold text-blue-400'> Sergio Fernández </label>
              <label htmlFor='idPasajero' className='text-sm text-gray-500'> #T3L7E1A9X2 </label>
              <label htmlFor='nombrePasajero' className='text-sm font-bold text-blue-400'> Juan Pérez </label>
              <label htmlFor='idPasajero' className='text-sm text-gray-500'> #T3C3F4A2X5 </label>
            </div>
            <div className='flex flex-col border rounded-lg border-gray-200 shadow-lg p-3 my-3 lg:border-none lg:shadow-none lg:p-0 lg:my-0 lg:flex-row'>
              <div className='flex flex-col lg:w-full lg:justify-start'>
                <h1 className='text-blue-900 font-bold'>Ubicación Actual</h1>
                <label htmlFor='addressActual' className='text-sm text-gray-500'>Av. 9 de Octubre y Colón</label>
                <label htmlFor='cityActual' className='text-sm text-gray-500'>Guayaquil, Guayas</label>
              </div>
              <div className='flex flex-col mt-2 lg:mt-0 lg:w-full lg:ml-12'>
                <h1 className='text-blue-900 font-bold'>Ubicación Anterior</h1>
                <label htmlFor='addressActual' className='text-sm text-gray-500'>Av. Américas y Primero de Mayo</label>
                <label htmlFor='cityActual' className='text-sm text-gray-500'>Cuenca, Azuay</label>
              </div>
            </div>
            <div className="flex flex-col border rounded-lg border-gray-200 shadow-lg p-3 mt-3 lg:border-none lg:shadow-none lg:p-0 lg:my-0">
              <h1 className='text-blue-900 font-bold'>Ruta de Viaje</h1>
              <div className='flex relative'>
                <div className="absolute w-0.5 h-full bg-gray-500 mx-auto left-[3px] lg:relative"></div>
                <div className="flex flex-col m-2">
                  <label htmlFor='rutaOrigen' className='text-sm text-gray-500 mb-3 ml-2'> Av. Américas y Primero de Mayo, CUE 010201, AZU</label>
                  <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-4 left-0"></div>
                  <label htmlFor='rutaDestino' className='text-sm text-gray-500 mt-3 ml-2'> Av. 9 de Octubre y Colón GYE 091003, GAL</label>
                  <div className="absolute w-2 h-2 bg-gray-500 rounded-full bottom-4 transform translate-y-1/2 left-0"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Conetenedor del mapa */}
          <div className="flex justify-center items-center">
            <Map 
              width={mapWidth}
              height={mapHeight}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;