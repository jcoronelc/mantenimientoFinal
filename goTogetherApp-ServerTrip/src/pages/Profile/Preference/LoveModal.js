import React, { useState } from 'react';
import { useData } from '../../Registrar/DataContext';

function LoveModal({ onClose }) {
    const { formData, saveFormData } = useData();
    const [formState, setFormState] = useState({
        love: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveFormData({ ...formData, ...formState }); // Combinar los datos del contexto global con el estado local del formulario
        onClose();
    };

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full p-4 ">
                <h2 className="text-blue-800 text-2xl font-extrabold mt-6 mb-2">¿Qué es lo que te apasiona?</h2>
                <p className="text-gray-700 mb-6">
                    No tengas miedo, comparte tus aficiones con los demás
                </p>
                <input
                    id="love"
                    name="love"
                    type="text"
                    value={formState.love}
                    onChange={handleChange}
                    placeholder="Escribe aquí lo que te gusta"
                    className="block border w-full h-14 border-gray-200 bg-transparent py-1.5 px-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md" />

                <div className="border-t border-blue-200 mt-8 mb-4" />

                <div className="flex justify-end mt-2 gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 w-32 h-12 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm" >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoveModal;
