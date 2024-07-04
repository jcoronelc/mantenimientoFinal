import React from "react";

import Header from "../../components/layout/Header";
import Footer from  '../../components/layout/Footer';
import About from "../../components/layout/About";

import { RiCarLine, RiListCheck2, RiPassValidLine, RiLineChartLine, RiBusLine, RiShieldCheckLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiAlertLine} from "react-icons/ri";

function PostTrip() {
  return (
    <div>
      <div className="m-2 p-4">
            <Header />
      </div>

        {/* Secion principal */}
        <div className='grid grid-cols-12 m-20 mt-20 text-gray-700'>
          {/* Objetivos */}
          <div className='m-5 col-span-12 grid grid-cols-12'>
            <label className="mb-5 col-span-12 text-4xl font-bold text-blue-900 flex justify-center">Objetivos de Go Together</label>
            <div className="m-10 col-span-12 grid grid-cols-12 items-center gap-4">

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiCarLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Facilitar la Conexión</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                        Crear una plataforma digital que conecte a conductores que ofrecen asientos en sus vehículos con pasajeros que buscan transporte a diversos destinos
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiPassValidLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Experiencia de Reserva Fácil y Segura</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                        Proporcionar un sistema de reservas intuitivo y seguro, garantizando una experiencia de viaje sin complicaciones
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiListCheck2 className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Opciones de Viaje Diversas</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                        Ofrecer a los pasajeros una amplia gama de opciones de viaje, permitiendo a los conductores publicar asientos disponibles para destinos tanto locales como regionales, brindando así flexibilidad y conveniencia
                      </label>
                  </div>
              </div>
            </div>
          </div>

          {/* Problemas */}
          <div className='m-5 col-span-12 grid grid-cols-12'>
            <label className="mb-5 col-span-12 text-4xl font-bold text-blue-900 flex justify-center">Problemas Actuales</label>
            <div className="m-10 col-span-12 grid grid-cols-12 items-center gap-4">

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiLineChartLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Altos Costos de Transporte</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      Muchas personas enfrentan gastos significativos en sus desplazamientos diarios. Nuestra plataforma ofrece una alternativa económica al compartir costos entre conductor y pasajeros
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiBusLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Baja Disponibilidad de Transporte Público</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      En muchas áreas, el transporte público es insuficiente o poco fiable. Nuestra plataforma proporciona una opción adicional, aumentando la disponibilidad de medios de transporte
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiAlertLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Falta de Alternativas de Transporte Seguras y Confiables</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      La seguridad y la confianza son prioridades para nosotros. Implementamos medidas de seguridad robustas para garantizar que tanto conductores como pasajeros tengan una experiencia de viaje segura y confiable
                      </label>
                  </div>
              </div>
            </div>
          </div>



          {/* Beneficios */}
          <div className='m-5 col-span-12 grid grid-cols-12'>
            <label className="mb-5 col-span-12 text-4xl font-bold text-blue-900 flex justify-center">Beneficios de usar Go Together</label>
            <div className="m-10 col-span-12 grid grid-cols-12 items-cente gap-4">

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiMoneyDollarCircleLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Ahorro de Costos</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      Comparte los gastos de viaje y ahorra dinero
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiCheckboxCircleLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Mayor Disponibilidad</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      Encuentra viajes que se ajusten a tus horarios y destinos
                      </label>
                  </div>
              </div>

              <div className="col-span-12 md:col-span-4 flex w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out">
                  <div className="flex flex-col m-4 p-4 space-y-3">
                      <RiShieldCheckLine className="w-10 h-10 text-blue-500" />
                      <label className="font-bold text-xl text-blue-900">Seguridad y Confiabilidad</label>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-4">
                      Disfruta de un sistema de verificación y calificación para una experiencia segura y confiable
                      </label>
                  </div>
              </div>
            </div>
          </div>

          {/* Fundadores */}
          <div className='m-5 col-span-12 grid grid-cols-12'>
            <label className="mb-5 col-span-12 text-4xl font-bold text-blue-900 flex justify-center">Conozca a los Fundadores</label>

            {/* Fundador 1 */}
            <div className='col-span-12 grid grid-cols-12 items-center'>
              {/* Descripción */}
              <div className="m-10 col-span-12 md:col-span-6 ">
                <label className="col-span-12 text-3xl font-medium text-blue-900">Kevin Alvarado</label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
              </div>
              {/* Foto */}
              <div className="m-10 col-span-12 md:col-span-6 flex items-center justify-center">
                <img className="mr-5 inline-block w-50 h-50 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
              </div>
            </div>

            {/* Fundador 2 */}
            <div className='col-span-12 grid grid-cols-12 items-center'>
              {/* Foto */}
              <div className="m-10 col-span-12 md:col-span-6 flex items-center justify-center order-2 md:order-1">
                <img className="mr-5 inline-block w-50 h-50 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
              </div>
              {/* Descripción */}
              <div className="m-10 col-span-12 md:col-span-6 order-1 md:order-2">
                <label className="col-span-12 text-3xl font-medium text-blue-900">Santiago Armijos</label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
              </div>
            </div>

            {/* Fundador 3 */}
            <div className='col-span-12 grid grid-cols-12 items-center'>
              {/* Descripción */}
              <div className="m-10 col-span-12 md:col-span-6">
                <label className="col-span-12 text-3xl font-medium text-blue-900">Juan Coronel</label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
              </div>
              {/* Foto */}
              <div className="m-10 col-span-12 md:col-span-6 flex items-center justify-center">
                <img className="mr-5 inline-block w-50 h-50 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
              </div>
            </div>

            {/* Fundador 4 */}
            <div className='col-span-12 grid grid-cols-12 items-center'>
              {/* Foto */}
              <div className="m-10 col-span-12 md:col-span-6 flex items-center justify-center order-2 md:order-1">
                <img className="mr-5 inline-block w-50 h-50 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
              </div>
              {/* Descripción */}
              <div className="m-10 col-span-12 md:col-span-6 order-1 md:order-2">
                <label className="col-span-12 text-3xl font-medium text-blue-900">Diego Ulloa</label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
              </div>
            </div>
          </div>

          {/* Fundadores */}
          <div className='m-5 mt-10 col-span-12 grid grid-cols-12 text-center'>
            <label className="mb-5 col-span-12 text-4xl font-bold text-blue-900">¡Únete a Nuestra Comunidad!</label>
            <p className="col-span-12">Regístrate hoy en Go Together y empieza a disfrutar de una nueva forma de viajar, más económica, conveniente y segura.</p>
          </div>
        </div>

        <Footer />

    </div>
  );
}

export default PostTrip;
