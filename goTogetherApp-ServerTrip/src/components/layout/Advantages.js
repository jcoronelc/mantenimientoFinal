import React from 'react';
import { MdOutlineSecurity } from 'react-icons/md';

function Advantages() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className='mb-12 text-center'>
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Ahorra y gana mientras conduces</h2>
        <p className="mt-2 text-lg leading-8 text-gray-700 ">
        Publica tu próximo viaje en <b className='text-blue-400'>Go Together</b> y llévate, de ganancia $4 de tus pasajeros. Sólo necesitarás un par de minutos para publicar tu viaje.
        </p>
      </div>


      <div className="flex flex-col flex-wrap md:flex-row m-4 p-4 justify-between space-x-8">

        <div className="flex-1 text-center mb-8 md:mb-0">
          <div className="flex justify-center mx-auto my-4">
            {/* <MdOutlineSecurity style={{ fontSize: '100px' }} /> */}
            <img src={require('../../assets/img/ad1.jpg')} alt="Carpool Booking" style={{ width: '300px', height: 'auto' }} />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-4xl sm:text-3xl text-blue-900 text-2xl font-bold py-2">Viaja seguro</h1>
            <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</p>
          </div>
        </div>

        <div className="flex-1 text-center mb-8 md:mb-0">
        <div className="flex justify-center mx-auto my-9">
            <img src={require('../../assets/img/ad2.jpg')} alt="Carpool Booking"  />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-4xl sm:text-3xl text-blue-900 text-2xl font-bold py-2">Crea amigos</h1>
            <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</p>
          </div>
        </div>

        <div className="flex-1 text-center mb-8 md:mb-0">
        <div className="flex justify-center mx-auto my-4">
            <img src={require('../../assets/img/ad3.jpg')} alt="Carpool Booking" style={{ width: '300px', height: 'auto' }} />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-4xl sm:text-3xl text-blue-900 text-2xl font-bold py-2">Más comodidad</h1>
            <p className=" text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Advantages;
