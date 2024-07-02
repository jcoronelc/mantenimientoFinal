import React, { useState } from 'react';
import { useData } from '../../Registrar/DataContext';

function SmokingModal({ onClose }) {
    const { formData, saveFormData } = useData();
    const [smoke, setSmoke] = useState('');

    const handleOptionChange = (e) => {
        setSmoke(e.target.value);
    };

    const handleSubmit = () => {
        saveFormData({ ...formData, smoking: smoke });
        onClose();
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full p-4 ">
                <h2 className="text-blue-800 text-2xl font-extrabold mt-6 mb-2">¿Permites fumar en tu auto?</h2>
                <p className="text-gray-700 mb-6">
                    Comparte si permites a tus pasajeros fumar en el viaje
                </p>

                <div className="mt-3 space-y-2 ">
                    <div className="flex items-center space-x-4 pl-4">
                        <input
                            id="yes"
                            name="option"
                            type="radio"
                            value="Si se permite fumar"
                            className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600"
                            onChange={handleOptionChange}
                            checked={smoke === 'Si se permite fumar'}
                        />
                        <label htmlFor="yes" className="block text-sm font-medium leading-6 text-gray-700">Sí</label>
                    </div>

                    <div className="flex items-center space-x-4 pl-4">
                        <input
                            id="no"
                            name="option"
                            type="radio"
                            value="No se permite fumar"
                            className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600"
                            onChange={handleOptionChange}
                            checked={smoke === 'No se permite fumar'}
                        />
                        <label htmlFor="no" className="block text-sm font-medium leading-6 text-gray-700">No</label>
                    </div>
                </div>

                <div className="border-t border-blue-200 mt-8 mb-4" />

                <div className="flex justify-end mt-2 gap-4">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 w-32 h-12 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SmokingModal;
