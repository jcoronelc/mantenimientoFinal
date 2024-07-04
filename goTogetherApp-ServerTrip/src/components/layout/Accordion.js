import { useState } from 'react';

import { SlArrowDown, SlArrowUp} from "react-icons/sl";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel rounded-lg p-3 select-none hover:bg-blue-100 cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className='flex flex-row justify-between' >
            <h3 className="text-lg font-medium text-blue-600">{title}</h3>
            <div className="text-lg font-bold text-blue-900">
                {isActive ? <SlArrowUp /> : <SlArrowDown />}
            </div>
        </div>
      {isActive && <p className='mt-3 text-gray-600'>{children}</p>}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      {/* General */}
      <Panel title="¿Qué es Go Together?">
      Go Together es una plataforma digital que conecta a conductores con pasajeros que buscan transporte a diversos destinos. Nuestro objetivo es ofrecer una forma económica, segura y conveniente de viajar compartiendo vehículos.
      </Panel>

      <Panel title="¿Cómo funciona Go Together?">
      Los conductores publican los asientos disponibles en sus vehículos para viajes específicos. Los pasajeros buscan y reservan estos asientos a través de la plataforma. El pago se realiza de forma segura a través de nuestro sistema.
      </Panel>
      <Panel title="¿Cómo me registro en la plataforma?">
      Puedes registrarte en Go Together visitando nuestro sitio web o descargando nuestra aplicación móvil. Completa el formulario de registro proporcionando la información requerida y sigue el proceso de verificación.
      </Panel>
      <Panel title="¿Es necesario verificar mi cuenta?">
      Sí, para garantizar la seguridad y confiabilidad de nuestra comunidad, todos los usuarios deben pasar por un proceso de verificación que puede incluir la presentación de documentos de identificación.
      </Panel>
      <Panel title="Soy conductor, ¿cómo puedo publicar un viaje?">
      Después de registrarte y verificar tu cuenta, puedes publicar un viaje ingresando los detalles como destino, horario, precio por asiento y cualquier otra información relevante. Todo esto se hace fácilmente a través de tu perfil en la plataforma.
      </Panel>
      <Panel title="Soy pasajero, ¿cómo puedo reservar un viaje?">
      Busca viajes disponibles ingresando tu ubicación y destino deseado en la plataforma. Elige el viaje que mejor se ajuste a tus necesidades, reserva tu asiento y realiza el pago a través de nuestro sistema seguro.
      </Panel>
      <Panel title="¿Cómo se realizan los pagos?">
      Todos los pagos se realizan a través de nuestra plataforma utilizando métodos de pago seguros, como tarjetas de crédito, débito u otros sistemas de pago en línea compatibles.
      </Panel>
      <Panel title="¿Qué sucede si necesito cancelar mi reserva?">
      Puedes cancelar tu reserva a través de la plataforma. Las políticas de reembolso dependen del tiempo de anticipación con que se realice la cancelación. Consulta nuestra Política de Cancelación para más detalles.
      </Panel>
      <Panel title="¿Qué sucede si el conductor cancela el viaje?">
      Si un conductor cancela un viaje, te notificaremos de inmediato y recibirás un reembolso completo.
      </Panel>
      <Panel title="¿Qué medidas de seguridad ofrece la plataforma?">
      Implementamos varias medidas de seguridad, incluyendo la verificación de identidad de usuarios, evaluaciones y comentarios después de cada viaje, y sistemas de pago seguros para proteger tus datos financieros.
      </Panel>
      <Panel title="¿Cómo se manejan las evaluaciones y comentarios?">
      Después de cada viaje, tanto conductores como pasajeros pueden dejar evaluaciones y comentarios. Esto ayuda a mantener una comunidad confiable y respetuosa.
      </Panel>
      <Panel title="¿Qué debo hacer si tengo un problema durante el viaje?">
      Si enfrentas algún problema durante el viaje, intenta resolverlo directamente con el conductor o pasajero. Si no puedes resolver el problema, contacta a nuestro equipo de soporte a través de la plataforma.
      </Panel>
      <Panel title="¿Cómo puedo contactar al soporte al cliente?">
      Puedes contactar a nuestro equipo de soporte al cliente enviando un mensaje a [correo electrónico de contacto] o llamando al [número de teléfono]. Estamos aquí para ayudarte con cualquier pregunta o problema que puedas tener.
      </Panel>
      <Panel title="¿Puedo usar la plataforma fuera de mi región?">
      Sí, Go Together está diseñada para funcionar tanto a nivel local como regional. Los conductores pueden publicar viajes a diversos destinos y los pasajeros pueden buscar opciones en diferentes áreas.
      </Panel>
      <Panel title="¿Hay algún costo por registrarse en la plataforma?">
      No, el registro en Go Together es gratuito. Solo pagas cuando reservas un viaje.
      </Panel>
    </>
  );
}
