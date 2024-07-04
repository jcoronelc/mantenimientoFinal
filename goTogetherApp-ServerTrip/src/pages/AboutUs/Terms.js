import React from "react";

import Header from "../../components/layout/Header";
import Footer from  '../../components/layout/Footer';
import About from "../../components/layout/About";

function Terms() {
  return (
    <div>
      <div className="m-2 p-4">
            <Header />
      </div>

      
        {/* Secion principal */}
        <div className='grid grid-cols-12 mb-10 mt-10 ml-24 mr-24 lg:ml-36 lg:mr-36'>
            {/* Titulo */}
            <div className='m-4 mt-20 col-span-12 flex flex-row items-center justify-center'>
                <label className="ml-5 text-4xl font-bold text-blue-900">Condiciones Generales de Uso</label>
            </div>

            {/* Introducción */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Introducción</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                  Bienvenido a Go Together. Estos Términos y Condiciones rigen el uso de nuestra plataforma digital, que facilita la conexión entre conductores y pasajeros para compartir viajes. Al utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con ellos, por favor, no utilices nuestra plataforma.
                </p>
              </div>
            </div>

            {/* Definiciones */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Definiciones</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                  <b>Plataforma: </b>El sitio web de Go Together.
                </p>

                <p className="mb-4">
                  <b>Usuario: </b>Cualquier persona que se registre y use la plataforma, incluyendo conductores y pasajeros.
                </p>

                <p className="mb-4">
                  <b>Conductor: </b>Usuario que ofrece asientos en su vehículo para compartir viajes.
                </p>

                <p className="mb-4">
                  <b>Pasajero: </b>Usuario que reserva asientos en el vehículo de un conductor.
                </p>
              </div>
            </div>


            {/* Registro y Verificación */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Registro y Verificación</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                  <b>Registro: </b>Los usuarios deben registrarse proporcionando información veraz y completa.
                </p>

                <p className="mb-4">
                  <b>Verificación: </b>Go Together puede verificar la identidad de los usuarios mediante documentos de identificación u otros medios necesarios.
                </p>
              </div>
            </div>

            {/* Uso de la Plataforma */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Uso de la Plataforma</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                  <b>Publicación de Viajes: </b>Los conductores pueden publicar detalles de sus viajes, incluyendo destinos, horarios y precios.
                </p>

                <p className="mb-4">
                  <b>Reserva de Viajes: </b>Los pasajeros pueden buscar y reservar asientos disponibles en los vehículos de los conductores.
                </p>

                <p className="mb-4">
                  <b>Pago: </b>El pago se realiza a través de la plataforma, que ofrece métodos de pago seguros.
                </p>
              </div>
            </div>

            {/* Responsabilidades de los Usuarios */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Responsabilidades de los Usuarios</label>
              
              {/* Conductor */}
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <label className="mb-4 text-lg font-medium text-blue-900">Conductores</label>

                <p className="mb-4">
                <b>Licencia y Seguro: </b>Los conductores deben tener una licencia de conducir válida y seguro del vehículo.
                </p>

                <p className="mb-4">
                <b>Condición del Vehículo: </b>Los vehículos deben estar en condiciones seguras y cumplir con todas las normativas legales.
                </p>

                <p className="mb-4">
                <b>Puntualidad y Confiabilidad: </b>Los conductores deben cumplir con los horarios y destinos publicados.
                </p>
              </div>

              {/* Pasajeros */}
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <label className="mb-4 text-lg font-medium text-blue-900">Pasajeros</label>

                <p className="mb-4">
                <b>Reserva Responsable: </b>Los pasajeros deben realizar reservas solo si están seguros de su necesidad de viajar.
                </p>

                <p className="mb-4">
                <b>Comportamiento Adecuado: </b>Los pasajeros deben comportarse de manera respetuosa y seguir las reglas del conductor durante el viaje.
                </p>
              </div>
            </div>

            {/* Política de Cancelación y Reembolsos */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Política de Cancelación y Reembolsos</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                <b>Cancelación por Parte del Conductor: </b>Si un conductor cancela un viaje, se notificará a los pasajeros y se les reembolsará el pago completo.
                </p>
                
                <p className="mb-4">
                <b>Cancelación por Parte del Pasajero: </b>Las políticas de reembolso para cancelaciones por parte de los pasajeros varían según el tiempo de anticipación con que se realice la cancelación. Consultar la sección específica en la plataforma para más detalles.
                </p>
              </div>
            </div>

            {/* Seguridad y Conducta */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Seguridad y Conducta</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                <b>Evaluaciones y Comentarios: </b>Los usuarios pueden evaluarse mutuamente después de cada viaje. Esto ayuda a mantener una comunidad de confianza.
                </p>

                <p className="mb-4">
                <b>Comportamiento Inapropiado: </b>Go Together se reserva el derecho de suspender o eliminar cuentas de usuarios que se comporten de manera inapropiada o violen estos términos.
                </p>
              </div>
            </div>

            {/* Privacidad y Protección de Datos */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Privacidad y Protección de Datos</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                <b>Recopilación de Datos: </b>Go Together recopila y utiliza datos personales según lo descrito en nuestra Política de Privacidad.
                </p>

                <p className="mb-4">
                <b>Protección de Datos: </b>Nos comprometemos a proteger la información personal de nuestros usuarios y a no compartirla con terceros sin consentimiento, excepto cuando sea necesario para el funcionamiento del servicio.
                </p>
              </div>
            </div>

            {/* Limitación de Responsabilidad */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Limitación de Responsabilidad</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                <b>Exclusión de Garantías: </b>Go Together no garantiza la disponibilidad continua y sin errores de la plataforma.
                </p>

                <p className="mb-4">
                <b>Responsabilidad Limitada: </b>Go Together no se responsabiliza por daños, pérdidas o inconvenientes resultantes del uso de la plataforma.
                </p>
              </div>
            </div>

            {/* Modificaciones de los Términos */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Modificaciones de los Términos</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                <b>Actualizaciones: </b>Go Together se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos al ser publicados en la plataforma.
                </p>

                <p className="mb-4">
                <b>Aceptación de Modificaciones: </b>El uso continuo de la plataforma después de cualquier modificación constituye la aceptación de los nuevos términos.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Contacto</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                Para cualquier pregunta o inquietud sobre estos Términos y Condiciones, por favor, contáctanos a través de gotogether@gmail.com o 0998000000.
                </p>
              </div>
            </div>

            {/* Legislación Aplicable */}
            <div className='col-span-12'>
              <label className="ml-5 text-2xl font-medium text-blue-900">Legislación Aplicable</label>
              
              <div className="ml-5 mt-4 text-lg font-medium text-gray-600">
                <p className="mb-4">
                Estos términos y condiciones se rigen por las leyes de Ecuador. Cualquier disputa se resolverá en los tribunales de [localización específica].
                </p>
              </div>
            </div>
        </div>

        <Footer />

    </div>
  );
}

export default Terms;