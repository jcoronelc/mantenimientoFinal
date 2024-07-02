import React from "react";

import { IoLogoWhatsapp } from "react-icons/io5";

import Header from "../../components/layout/Header";
import Footer from  '../../components/layout/Footer';
import Accordion from "../../components/layout/Accordion"

function PostTrip() {
  const phoneNumber = '+593996426065'; // Número de teléfono de WhatsApp (Solo para prueba)
  
  //Envia mensajes a whatsapp
  const handleSendMessage = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <div>
      <div className="m-2 p-4">
        <Header />
      </div>
      
      <div className='m-20  mb-5 lg:m-60 lg:mt-14 lg:mb-5'>
        <div className="grid place-items-center  mt-20">
          <label className="text-4xl font-bold text-blue-900 mb-8">Preguntas Frecuentes</label>
        </div>
        
        <Accordion />
      </div>

   



      
      
   

    </div>
  );
}

export default PostTrip;