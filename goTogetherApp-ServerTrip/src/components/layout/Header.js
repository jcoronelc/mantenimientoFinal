import React, { useState, useEffect, useRef } from 'react';
import { IoAddCircleOutline, IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
import LoginModal from '../../pages/Login/LoginModal';
import RegisterModal from '../../pages/Login/RegisterModal';
import { useData } from "../../pages/Registrar/DataContext";

function Header({ showPublishButton = true }) {

  const { formData, saveFormData } = useData();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setModalType(null);
  };
  const handleLogout = () => {
    saveFormData({}); // Vaciar los datos al hacer clic en "Cerrar Sesión"
  };

  const isLoginFormFilled = formData.emailLogin && formData.password;

  return (

    <nav className="bg-white bg-gradient-to-r from-blue-700 to-[#172554] fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="text-blue-50 self-center text-2xl font-semibold whitespace-nowrap ">Go Together</span>
        </Link>

        <div className="flex flex-row md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse items-center ">
          {showPublishButton && (
            <div className="flex lg:mr-4">
              <Link to="/publicar-viaje" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">
                <IoAddCircleOutline className="w-4 h-4 mr-2" /> Publicar un viaje
              </Link>
            </div>
          )}

          <div className="relative">
            <div className={`h-10 w-10 rounded-full overflow-hidden border`}>
              <img
                src={formData.image}
                alt="Fondo de Líneas"
                className="inline-block object-cover w-10 h-auto rounded-full border-blue-400 text-blue-400 ring-2 ring-blue-200 bg-blue-100"
                onClick={toggleDropdown}
              />
            </div>


            {isDropdownOpen && (
              <div className="flex flex-col absolute top-full right-1 mt-3 w-48 bg-white shadow-lg border border-gray-200  bg-gray-50 rounded-lg">
                {isLoginFormFilled ? ( // Cambiar opciones basado en si el formulario está lleno
                  <>
                    <p className="w-full text-left px-4 py-2 text-blue-900 focus:outline-none">
                      {formData.username} {formData.lastname}
                    </p>
                    <div>
                      <hr className="flex-1 border-t-2 border-gray-300" />
                    </div>

                    <Link to="/mi-cuenta" className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none">
                      Cuenta
                    </Link>

                    <Link to="/mis-viajes" className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none">
                      Mis viajes
                    </Link>

                    <Link to="/control-admin" className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none">
                      Controlar viajes
                    </Link>

                    <div>
                      <hr className="flex-1 border-t-2 border-gray-300" />
                    </div>

                    <button className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none" onClick={handleLogout}>
                      Cerrar Sesion
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none" onClick={() => openModal('login')}>
                      Iniciar sesión
                    </button>

                    <button className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none" onClick={() => openModal('register')}>
                      Registrarse
                    </button>


                  </>
                )}

                {/* {dropdownOptions.map((option, index) => (
                          <Link key={index} to={option.link} className="w-full text-left px-4 py-2 hover:bg-blue-100  text-blue-900 focus:outline-none" onClick={option.onClick}>
                            {option.label}
                          </Link>
                        ))} */}

              </div>
            )}
          </div>

        </div>
      </div>

      {modalType === 'login' && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
            <button className="text-blue-900 rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div>
              <LoginModal onClose={closeModal} />
            </div>
          </div>
        </div>
      )}

      {modalType === 'register' && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-blue-50 p-2 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
            <button className="text-blue-900 rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div>
              <RegisterModal onClose={closeModal} />
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Header;


