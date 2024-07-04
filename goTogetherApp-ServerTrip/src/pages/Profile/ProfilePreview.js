import React from "react";
import { useData } from "../Registrar/DataContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer"
import BackButton from "../../components/ui/Bottom/Back";
import ProfileCard from "../../components/layout/ProfileCard";
import { Link } from 'react-router-dom';
import { RiProfileLine } from "react-icons/ri";
import { FaRegIdCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";





function ProfilePreview() {
    const { formData } = useData();

    return (

        <div>
            <div className="m-2 p-4">
                <Header />
            </div>
            <div className="flex flex-col mt-20 mb-20 mr-20 ml-20">

                <BackButton to="/" />

                <div className="flex flex-col gap-4 mt-4">


                    <div className="flex bg-white border border-gray-200 rounded-lg shadow-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                        <div className="flex flex-col m-4 p-4 space-y-3">
                            {/* <RiProfileLine className="w-10 h-10 text-blue-500" /> */}
                            {/* <label className="font-bold text-xl text-blue-900">Perfil</label> */}
                            
                            <ProfileCard />
                            {/* <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo
                            </label> */}

                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-nowrap flex-wrap gap-4">

                    <Link to="/datos-personales" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                                <div className="flex flex-col m-4 p-4 space-y-3">
                                    <RiProfileLine className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Datos personales</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                        Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo
                                    </label>
                                </div>
                            </div>
                        </ Link>


                        <Link to="/verificacion-identidad" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full  bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            <div className="flex flex-col m-4 p-4 gap-3">
                                    <FaRegIdCard className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Verifica tu identidad</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                     Antes de publicar o reservar un viaje, sube una foto de tu identificación para completar la verificación                                  </label>
                                </div>
                            </div>
                        </ Link>


                        <Link to="/metodo-pago" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full  bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            <div className="flex flex-col m-4 p-4 gap-3">
                                    <MdPayment className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Pagos y cobros</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                       Agrega un método de cobro para que sepamos dónde enviar tu dinero
                                    </label>
                                </div>
                            </div>
                        </ Link>

                    </div>

                    <div className="flex flex-row lg:flex-nowrap flex-wrap gap-4">
                    <Link to="/agregar-vehiculo" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full   bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                                <div className="flex flex-col m-4 p-4 gap-3">
                                    <FaCarAlt className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Vehículos</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                    Registra y gestiona la información de tus vehículos
                                    </label>
                                </div>
                            </div>
                        </ Link>


                        <Link to="/preferencias" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full  bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            <div className="flex flex-col m-4 p-4 gap-3">
                                    <AiOutlineLike className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Preferencias de viaje</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                    Ajusta tus preferencias de viaje para mejorar tu experiencia
                                    </label>
                                </div>
                            </div>
                        </ Link>


                        <Link to="/mis-viajes" className="flex-1 min-w-[300px]">
                            <div className="flex w-full h-full  bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                            <div className="flex flex-col m-4 p-4 gap-3">
                                    <MdOutlinePlaylistAddCheck className="w-10 h-10 text-blue-500" />
                                    <label className="font-bold text-xl text-blue-900">Mis viajes</label>
                                    <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                                    Revisa y gestiona tu historial de viajes y reservas
                                    </label>
                                </div>
                            </div>
                        </ Link>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
        // <div>
        //     <Header />

        //     <div className='flex flex-row '>
        //         <BackButton to="/" />
        //     </div>

        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5 flex justify-start items-center p-4">
        //         <Link to="/" className="rounded-full bg-transparent hover:bg-blue-100 focus:outline-none p-2">
        //             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-900 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        //                 <path fill="none" d="M0 0h24v24H0z"></path>
        //                 <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
        //             </svg>
        //         </Link>
        //         <label className="font-bold text-xl text-blue-900 ml-2 align-middle">Regresar</label>
        //     </div>

        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5 flex items-center"> {/* Contenedor principal con alineación centrada */}
        //         <div className="sm:col-span-3 flex justify-center items-center w-full gap-8"> {/* Alineación centrada y elementos en dos columnas con espacio entre ellos */}
        //             <div className="flex flex-col justify-end text-right"> {/* Columna izquierda */}
        //                 <h2 className="md:text-2xl sm:text-2xl text-xl font-bold p-4 text-blue-900">Nombre1 Apellido</h2>
        //                 <p className="md:text-lg text-md font-bold text-gray-500 py-2">Celular: {formData.phoneNumber}</p> {/* Texto más pequeño */}
        //                 <p className="md:text-lg text-md font-bold text-gray-500 py-2">Correo: {formData.emailLogin}</p> {/* Texto más pequeño */}
        //             </div>
        //             <div className="flex justify-center items-center"> {/* Columna derecha */}
        //                 <label htmlFor="upload-button" className="cursor-pointer relative">
        //                     <div className="h-32 w-32 rounded-full overflow-hidden border border-gray-300"> {/* Contenedor con tamaño fijo */}
        //                         <img className="w-32 h-32 object-cover" src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="" /> {/* Imagen */}
        //                     </div>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>




        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5 ">
        //         <div className="flex flex-col">
        //             <p className="md:text-2xl sm:text-2xl text-xl font-bold p-4 text-blue-900">Perfil</p>
        //         </div>
        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <RiProfileLine className="mr-2 w-5 h-5 text-blue-500" />
        //                 <h5>Datos Personales</h5>

        //             </div>
        //             <Link to="/datos" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>
        //         </div>
        //         <div>
        //             <hr className="flex-1 border-t-2 border-gray-300" />
        //         </div>
        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <CgProfile className="mr-2 w-5 h-5 text-blue-500" />
        //                 <h5>Imagen Perfil</h5>

        //             </div>
        //             <Link to="/foto" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>

        //         </div>
        //         <div>
        //             <hr className="flex-1 border-t-2 border-gray-300" />
        //         </div>
        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <FaDog className="mr-2 w-5 h-5 text-blue-500" />
        //                 <h5>Preferencias</h5>

        //             </div>
        //             <Link to="/preferencias" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>
        //         </div>
        //     </div>
        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5 ">
        //         <div className="flex flex-col">
        //             <p className="md:text-2xl sm:text-2xl text-xl font-bold p-4 text-blue-900">Verificaciones</p>
        //         </div>
        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <HiOutlineIdentification className="mr-2 w-6 h-6 text-blue-500" />
        //                 <h5>Cédula</h5>

        //             </div>
        //             <Link to="/" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>
        //         </div>
        //         <div>
        //             <hr className="flex-1 border-t-2 border-gray-300" />
        //         </div>
        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <FaRegIdCard className="mr-2 w-5 h-5 text-blue-500" />
        //                 <h5>Licencia</h5>
        //             </div>
        //             <Link to="/" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>
        //         </div>

        //     </div>
        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5 ">
        //         <div className="flex flex-col">
        //             <p className="md:text-2xl sm:text-2xl text-xl font-bold p-4 text-blue-900">Vehiculos</p>
        //         </div>

        //         <div className="flex gap-x-3 items-center justify-between p-4 hover:bg-blue-50">
        //             <div className="flex items-center">
        //                 <FaCarSide className="mr-2 w-5 h-5 text-blue-500" />
        //                 <h5>Agregar Vehiculo</h5>

        //             </div>
        //             <Link to="/" className="text-blue-700 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:text-blue-600 dark:hover:text-blue-700 dark:focus:ring-blue-800 flex justify-center items-center">
        //                 <MdArrowForwardIos className="w-5 h-5 text-blue-500" />
        //             </Link>
        //         </div>
        //     </div>

        //     {/*  
        //     <div className="bg-white border border-gray-200 rounded-lg shadow m-20 mb-5">
        //         <div className="sm:col-span-3">
        //             <Link to="/" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center mx-auto" style={{ width: '200px' }}>
        //                 <span className="mr-2">Omitir</span>
        //                 <FaChevronRight className="w-5 h-5" />
        //             </Link>
        //         </div>
        //     </div>



        //     <div className="justify-left">
        //         <Link to="/" className="text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center mx-auto" style={{ width: '200px' }}>
        //             <span className="mr-2">Regresar</span>
        //             <FaArrowRight className="w-5 h-5" />
        //         </Link>
        //     </div> */}
        //     <Footer />
        // </div>
    );
}

export default ProfilePreview;
