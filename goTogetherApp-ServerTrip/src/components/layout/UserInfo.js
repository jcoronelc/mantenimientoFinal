import React, { useState } from 'react';

function InformacionUsuario() {
    const [profileImage, setProfileImage] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col items-center justify-center">
            <label htmlFor="upload-button" className="cursor-pointer relative">
              <img className="mx-auto h-40 w-40 rounded-full" src={profileImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="" />
              <input type="file" id="upload-button" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
            <div className="mt-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-600">Elegir imagen</span>
            </div>
          </div>
          <div className="lg:w-2/3">
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-blue-700">Información de contacto</h2>
      <figure className="mt-10">
        <h3 className="md:text-3xl sm:text-3xl text-2xl font-bold py-2 text-blue-700">Datos Personales</h3>
        <div className="mt-6 flex">
          <div className="flex flex-col mr-6">
            <label htmlFor="nombre" className="text-gray-800">Nombre</label>
            <input type="text" id="nombre" placeholder="Nombre" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apellido" className="text-gray-800">Apellido</label>
            <input type="text" id="apellido" placeholder="Apellido" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
        </div>
        <div className="mt-6 flex">
          <div className="flex flex-col mr-6">
            <label htmlFor="correo" className="text-gray-800">Correo</label>
            <input type="text" id="correo" placeholder="Correo" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fechaNacimiento" className="text-gray-800">Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" placeholder="Fecha de Nacimiento" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
        </div>
        <h6 className="md:text-2xl sm:text-3xl text-2xl font-bold py-2 text-blue-700">Para el registro</h6>
        <div className="mt-6 flex">
          <div className="flex flex-col mr-6">
            <label htmlFor="cedula" className="text-gray-800">Cédula</label>
            <input type="text" id="cedula" placeholder="Cédula" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="celular" className="text-gray-800">Celular</label>
            <input type="text" id="celular" placeholder="Celular" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 w-full lg:w-auto" />
          </div>
        </div>
      </figure>
    </div>
    </div>

    <section className="mt-10">
  <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center text-blue-700">Preferencias</h2>
  <div className="mt-6">
    {/* Acordeón */}
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Parte 1 del acordeón */}
      <div className="border-b border-gray-300">
        <button className="w-full text-left px-4 py-1 text-blue-700 font-semibold focus:outline-none">¿Quiéres viajar con mascotas?</button>
        <div className="px-4 py-3">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-700 mr-2" />
            Sí
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-700 mr-2" />
            Solo Pequeñas
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-700 mr-2" />
            No
          </label>
        </div>
      </div>
      {/* Parte 2 del acordeón */}
      <div className="border-b border-gray-300">
        <button className="w-full text-left px-4 py-3 text-blue-700 font-semibold focus:outline-none">¿Se puede fumar?</button>
        <div className="px-4 py-3">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-700 mr-2" />
            Sí
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-700 mr-2" />
            No
          </label>
        </div>
      </div>
      {/* Parte 3 del acordeón */}
      <div>
        <button className="w-full text-left px-4 py-3 text-blue-700 font-semibold focus:outline-none">Preferencia 3</button>
        <div className="px-4 py-3">
          <p>Contenido de la preferencia 3.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
      
    );

}

export default InformacionUsuario;
