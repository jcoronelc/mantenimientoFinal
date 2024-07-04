import React, { useState } from 'react';
import Calendar from './Calendar';
import { IoSearchSharp } from "react-icons/io5";
import { IoFunnelOutline } from "react-icons/io5";

function TripFilter() {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Conductor");
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

  const opcionesFiltro = ['Conductor', 'ID Ruta', 'Fecha']; 
  const [readOnly, setReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const seleccionarFiltro = (filtro) => {
    setFiltroSeleccionado(filtro);
    setMostrarDropdown(!mostrarDropdown);
    if (filtro === 'Fecha') {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setMostrarDropdown(false);
  };

  const handleDateSelect = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
    setInputValue(formattedDate);
    setShowDateModal(false);
  };

  const handleInputClick = () => {
    if (filtroSeleccionado === 'Fecha') {
      setShowDateModal(prevState => !prevState);
      setMostrarDropdown(false);
    }
  };

  return (
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
  );
}

export default TripFilter;