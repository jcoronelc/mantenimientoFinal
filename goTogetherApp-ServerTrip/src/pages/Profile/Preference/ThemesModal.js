import React from 'react';
import { LuBookMarked } from 'react-icons/lu';
import { GiForestCamp } from 'react-icons/gi';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { MdOutlineSportsSoccer } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { IoIosMusicalNotes } from "react-icons/io";
import { LuGhost } from "react-icons/lu";


const brands = [
    { icon: <LuBookMarked size={20} />, name: 'Lectura' },
    { icon: <GiForestCamp size={20} />, name: 'Al aire libre' },
    { icon: <MdOutlineCameraAlt size={20} />, name: 'Fotografía' },
    { icon: <MdOutlineSportsSoccer size={20} />, name: 'Deportes' },
    { icon: <CgGames size={20} />, name: 'Juegos' },
    { icon: <IoIosMusicalNotes size={20} />, name: 'Música' },
    { icon: <LuGhost size={20} />, name: 'Historias' },
];

function ThemeModal({ onClose, onSelectBrand }) {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full p-4">
                <h2 className="text-blue-800 text-2xl font-extrabold mt-6 mb-2">¿Qué te gusta?</h2>
                <p className="text-gray-700 mb-6">Añade una etiqueta</p>
                <div className="flex flex-wrap gap-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="cursor-pointer text-primary font-medium rounded-full bg-gray-100 hover:bg-gray-200 text-base px-4 py-2 text-center flex items-center"
                            onClick={() => onSelectBrand(brand)}
                        >
                            {brand.icon}
                            <span className="ml-2">{brand.name}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t border-blue-200 mt-8 mb-4" />
                <div className="flex justify-end mt-2 gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 w-32 h-12 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThemeModal;
