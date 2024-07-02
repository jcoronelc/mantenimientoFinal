import React from "react";
import ChatBot from "react-chatbotify";

const options = {
	header: {
		title: (
			<h3>GoBot
			</h3>
		),
	},

	tooltip: {
		text: "¿Tienes preguntas?"
	},
	theme: {
		primaryColor: "#172554",
		secondaryColor: "#1d4ed8"
	},
	chatHistory: {
		storageKey: "example_theming"
	}
}

const helpOptions = [
	"Agendar un viaje",
	"¿Es segura?",
	"Aplicar para conductor",
	"Ingresos",
	"Mascotas",
	"Fumar"
];


const flow = {
	start: {
		message: "¡Hola! Soy tu asistente virtual. ¡Bienvenido a Go Together!",
		transition: { duration: 1000 },
		path: "show_options"
	},
	show_options: {
		message: "Aquí tienes algunas cosas útiles que puedes consultar para comenzar:",
		options: helpOptions,
		path: "process_options"
	},
	prompt_again: {
		message: "¿Necesitas alguna otra ayuda?",
		options: helpOptions,
		path: "process_options"
	},
	unknown_input: {
		message: "Lo siento, no entiendo tu mensaje 😢. Si necesitas ayuda adicional, puedes comunicarte con nosotros.",
		options: helpOptions,
		path: "process_options"
	},

	gracias: {
		message: "Es un placer, ¿hay algo más en lo que pueda ayudarte?",
		options: helpOptions,
		path: "process_options"
	},

	process_options: {
		transition: { duration: 0 },
		chatDisabled: true,
		path: async (params) => {
			let response = "";
			switch (params.userInput) {
				case "Agendar un viaje":
					response = "Para agendar un viaje, necesitas crear una cuenta en nuestra plataforma. Puedes registrarte haciendo clic en el ícono de perfil en la esquina superior derecha y seleccionando 'Registrarse'.";
					break;
				case "¿Es segura?":
					response = "La seguridad es uno de nuestros pilares. Hemos implementado varias medidas de seguridad para garantizar la tranquilidad de nuestros usuarios. Estas incluyen la verificación de identidad de los conductores, la evaluación de antecedentes, y un sistema de calificaciones y reseñas para fomentar la confianza entre los usuarios. ";
					break;
				case "Aplicar para conductor":
					response = "Para convertirte en conductor, además de tener una cuenta en nuestra plataforma, debes completar ciertos requisitos. En tu 'Perfil' deberás en 'Verificaciones' llenar tus datos, así como subir los documentos necesarios. Tu solicitud será entonces enviada para revisión.";
					break;
				case "Ingresos":
					response = "Los ingresos como conductor dependerá del precio que le pongas a tu viaje, así como la cantidad de pasajeros que lleves. Nosotros, por nuestro servicio, cobraremos un 10% de lo que recaudes";
					break;
				case "Mascotas":
					response = "Cada conductor tiene sus preferencias, pueden permitir o no llevar mascotas. Asegurate de comprobar las preferencias de cada conductor antes de agendar un viaje.";
					break;
				case "Fumar":
					response = "Cada conductor pueden permitir o no fumar en sus vehículos. Asegurate de comprobar las preferencias de cada conductor antes de agendar un viaje.";
					break;
				default:
					return "unknown_input";
			}
			await params.injectMessage(response);
			return "prompt_again";
		},
	},
	repeat: {
		transition: { duration: 3000 },
		path: "prompt_again"
	},
};


const MyChatBot = () => {
	return (
		<ChatBot options={options} flow={flow} />
	);
};

export default MyChatBot;