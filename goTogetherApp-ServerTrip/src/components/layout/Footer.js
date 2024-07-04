import React from 'react'

function Footer() {
  return (
    <footer class="w-full mx-auto px-4 py-8 bg-white bg-gradient-to-r from-blue-700 to-[#172554] text-blue-50 ">
    <div class="grid justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div className='lg:m-4'>
        <a href="https://flowbite.com">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" class="h-8" />
          <span class="font-bold">Go Together</span>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2 class="font-bold mb-2 text-blue-400">Acerca de</h2>
          <ul>
            <li><a href="/sobre-nosotros" className='text-gray-400'>Sobre nosotros</a></li>
            <li><a href="#" className='text-gray-400'>Centro de ayuda</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold mb-2 text-blue-400">Contacto</h2>
          <ul>
            <li><a href="/preguntas" className='text-gray-400'>Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold mb-2 text-blue-400">Legal</h2>
          <ul>
            <li><a href="#" className='text-gray-400'>Aviso legal</a></li>
            <li><a href="/terminos-condiciones" className='text-gray-400'>Términos y condiciones</a></li>
            <li><a href="#" className='text-gray-400'>Privacidad</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-8 border-t border-gray-300" />
    <div class="flex justify-between items-center">
      <span class="text-sm lg:ml-4  text-blue-100">&copy; Go Together 2024. All rights reserved.</span>
      <div class="flex space-x-6">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-dribbble"></i></a>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer

