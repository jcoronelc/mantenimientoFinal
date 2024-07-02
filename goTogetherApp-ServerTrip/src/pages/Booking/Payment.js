import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import StarsRating from "../../components/ui/StarsRating";
import BackButton from "../../components/ui/Bottom/Back";
import Header from "../../components/layout/Header";
import { SlArrowLeft } from "react-icons/sl";
import Notification, { notifySuccess, notifyError, notifyInfo, notifyWarning, notifyExtra } from '../../components/ui/Notifications';

function Payment() {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        notifyExtra('El viaje se ha reservado con éxito');
        navigate(`/`);
      };

    return (
    <div>
        <div className="m-2 p-4">
            <Header />
        </div>

        {/* Secion principal */}
        <div className='grid grid-cols-12 m-20 mt-10'>
            {/* Titulo y Regresar */}
            {/* <div className='m-4 col-span-12 flex flex-row items-center justify-start'>
                <Link to="/listar-viajes" className="text-l font-bold text-blue-900">
                    <SlArrowLeft />
                </Link>
                <label className="ml-5 text-2xl font-medium text-blue-900">Realizar pago de viaje</label>
            </div> */}

                <div className="m-4 col-span-12 flex flex-row items-center justify-start mt-8">
                    <BackButton to="/confirmar-viaje" />
                </div>


            {/* Columna 1 */}
            <div className='col-span-12 lg:col-span-6'>
                {/* Contenedor información viaje */}
                <div className='bg-white border border-gray-200 rounded-lg shadow m-4 p-4 grid grid-cols-12'>
                    <label className="text-xl font-medium text-blue-900 m-4 col-span-12">Detalles del Viaje</label>
                    {/* Contenedor Informacion conductor */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        <img className="mr-4 col-span-1 inline-block w-10 h-auto rounded-full ring-2 ring-blue-400" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
                            <div className="ml-4 col-span-9">
                                <label htmlFor="name-profile" className="font-bold"> Nohelia Holtz </label>
                                <StarsRating stars={3} color="text-blue-400" />
                            </div>
                    </div>

                    {/* Contendor informacion salida */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        {/* Contenedor lugar salida */}
                        <div className="col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400 font-bold">Lugar de Salida</label>
                            <label className="col-span-12 text-gray-600">Av. Ordoñez Lasso, CUE 010219, Azuay</label>

                        </div>

                        {/* Contenedor hora salida */}
                        <div className="md:ml-3 col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Fecha de Salida</label>
                            <label className="col-span-12 text-gray-600">13 de Abril de 2024 08:00 AM</label>

                        </div>
                    </div>

                    {/* Contendor informacion llegada */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        {/* Contenedor lugar llegada */}
                        <div className="col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Lugar de Llegada</label>
                            <label className="col-span-12 text-gray-600">Mall del Sol, GYE 091003, Guayas</label>

                        </div>

                        {/* Contenedor hora llegada */}
                        <div className="md:ml-3 col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Fecha de Llegada</label>
                            <label className="col-span-12 text-gray-600">13 de Abril de 2024 11:00 AM</label>

                        </div>
                    </div>

                    {/* Contendor informacion distanicia */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        {/* Contenedor distancia */}
                        <div className="col-span-12 md:col-span-6 grid grid-col-12">
                            <label className="col-span-12 text-blue-400  font-bold">Distancia</label>
                            <label className="col-span-12 text-gray-600">300 Km</label>

                        </div>
                        
                    </div>


                </div>

                {/* Contenedor Detalles pago */}
                <div className='bg-white border border-gray-200 rounded-lg shadow p-4 m-4 grid grid-cols-12'>
                    <label className="text-xl font-medium text-blue-900 m-4 col-span-12">Detalles de Pago</label>
                    {/* Contenedro Costo */}
                    <div className="flex flex-col md:flex-row md:justify-between m-4 col-span-12">
                        <label className="text-l font-bold leading-6 text-gray-900">Total</label>
                        <label>USD 15.00</label>
                    </div>

                </div>
            </div>

            {/* Columna 2 */}
            <div className='col-span-12 lg:col-span-6'>
                {/* Contenedor datos tarjeta */}
                <div className='bg-white border border-gray-200 rounded-lg shadow m-4 p-4 grid grid-cols-12'>
                    <div className="m-2 col-span-12 flex flex-row justify-between items-center">
                        <label className="text-xl font-medium text-blue-900">Tarjeta de Crédito o Débito</label>
                        <img src={require('../../assets/img/iconos-tarjetas-credito.png')} alt="Carpool Booking" style={{ width: 'auto', height: '60px' }} />
                    </div>
                    
                    {/* Contenedor input titular tarjeta */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        <label className="col-span-12 text-l font-bold leading-6 text-gray-900">Nombre del titular de la tarjeta</label>
                        <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border border-gray-200 bg-transparent py-1.5 px-2  pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 col-span-12" placeholder="Ej. John Webster"/>
                    </div>

                    {/* Contenedor input tarjeta de credito */}
                    <div className="m-4 col-span-12 grid grid-cols-12">
                        <label className="col-span-12 text-l font-bold leading-6 text-gray-900">Número de Tarjeta</label>
                        <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border border-gray-200 bg-transparent  py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 col-span-12" placeholder="1234 5678 9012 3456"/>
                    </div>

                    <div className="col-span-12 grid grid-cols-12">
                        {/* Contenedor input fecha de vencimiento */}
                        <div className="m-4 col-span-12 md:col-span-6 grid grid-cols-12">
                            <label className="col-span-12 text-l font-bold leading-6 text-gray-900">Fecha de Vencimiento</label>
                            <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border border-gray-200 bg-transparent  py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 col-span-12" placeholder="DD/MM/YYYY"/>
                        </div>

                        {/* Contenedor input CVV */}
                        <div className="m-4 col-span-12 md:col-span-6 grid grid-cols-12">
                            <label className="col-span-12 text-l font-bold leading-6 text-gray-900">CVV</label>
                            <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border border-gray-200 bg-transparent  py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 col-span-12" placeholder=""/>
                        </div>
                    </div>

                    <div className="m-4 col-span-12 grid grid-cols-12">
                        <button onClick={handleSubmit} className="col-span-12 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center">
                            Realizar Pago
                        </button>
                    </div>
                </div>
                

                {/* Contenedor Terminos y condiciones */}
                {/* <div className="m-4 grid grid-cols-12">
                    <div className="m-4 col-span-12">
                        <label className="font-bold text-gray-900 text-xs leading-4">Los datos de su tarjeta están seguros</label>
                        <p className="text-gray-900 text-xs leading-4">No almacenamos la información del titular de la tarjeta en nuestros servidores. Todos los pagos son encriptados y procesados de forma segura por Braintree Payment Solutions.</p>
                        <label className="font-bold text-gray-900 text-xs leading-4">¿Tiene alguna pregunta? Póngase en contacto con nosotros</label>
                        <p className="text-gray-900 text-xs leading-4">Revise nuestras <a href="#" className="text-blue-700 underline hover:text-blue-500">Condiciones de servicio</a> y <a href="#" className="text-blue-700 underline hover:text-blue-500">Política de privacidad</a>.</p>
                    </div>
                </div> */}

                <div className="flex bg-blue-50 rounded-lg m-4">
                        <label className="block text-xs text-gray-600 p-4">
                            Los datos de su tarjeta están seguros. No almacenamos la información del titular de la tarjeta en nuestros servidores. Todos los pagos son encriptados y procesados de forma segura. Revise nuestros{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Términos y condiciones de servicio
                            </a>{' '}
                            y{' '}
                            <a href="/terminos-condiciones" className="text-blue-600 hover:text-blue-800">
                                Políticas de Privacidad
                            </a>{' '}
                            ¿Tiene alguna pregunta? Póngase en contacto con nosotros
                        </label>
                    </div>


            </div>

        </div>
    </div>
    )
}
  
  export default Payment