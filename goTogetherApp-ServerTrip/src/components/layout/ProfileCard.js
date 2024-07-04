import ProfileImageUploader from "../../components/ui/ProfileImageUploader";
import StarsRating from '../ui/StarsRating';
import React, { useState, useEffect } from "react";
import { useData } from "../../pages/Registrar/DataContext";

import { LuBookMarked } from "react-icons/lu";
import { GiForestCamp } from "react-icons/gi";
import { MdOutlineCameraAlt } from "react-icons/md";

import { PiDog } from "react-icons/pi";
import { LuCigaretteOff } from "react-icons/lu";
import { RiDiscussLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";

function ProfileCard() {

    const brands = [
        { icon: <LuBookMarked size={20} />, name: 'Lectura' },
        { icon: <GiForestCamp size={20} />, name: 'Al aire libre' },
        { icon: <MdOutlineCameraAlt size={20} />, name: 'Fotografìa' },
    ];

    const { formData, saveFormData } = useData();

    const [selectedBrand, setSelectedBrand] = useState('');
    const handleBrandClick = (brandName) => {
        setSelectedBrand(brandName);
    };

    return (

        <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col text-center justify-center items-center p-2">
                <ProfileImageUploader />
                <div className="p-4">
                    <label htmlFor="name-profile" className=" text-lg font-bold">{formData.username} {formData.lastname}</label>
                    <StarsRating stars={5} color="text-blue-400" />
                </div>
            </div>

            <div className="flex flex-col p-2">
                <div className="flex flex-col">
                    <h3 className="md:text-lg sm:text-4xl text-2xl font-bold mb-2 text-blue-900"> Sobre ti</h3>
                    <p className="text-sm text-gray-600">{formData.aboutMe}</p>
                </div>
                <div className="border-t border-blue-200 mt-4 mb-4" />
                <div className="flex flex-col">
                    <h3 className="md:text-lg sm:text-4xl text-2xl font-bold mb-2 text-blue-900">Mis intereses</h3>
                    <div className="flex flex-wrap gap-3">
                        {formData.tag1}
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                onClick={() => handleBrandClick(brand.name)}
                                className={`cursor-pointer text-primary font-medium rounded-full dark:bg-blue-50 dark:hover:bg-blue-100 text-base px-4 py-2 text-center flex items-center ${selectedBrand === brand.name ? '' : ''}`}
                            >
                                <div className="flex gap-2">
                                    {brand.icon}
                                    {brand.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-blue-200 mt-4 mb-4" />
                <div className="flex flex-col">
                    <h3 className="md:text-lg sm:text-4xl text-2xl font-bold mb-2 text-blue-900">Mis preferencias</h3>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex-1 flex-col">
                            <div className="mt-3 space-y-2">
                                <div className="flex gap-x-3 items-center justify-between p-3 border-gray-100 rounded-lg">
                                    <div className="flex items-center space-x-4 pl-4">
                                        <LuCigaretteOff className="text-blue-400 text-lg" />
                                        <label htmlFor="song" className="block text-md font-medium leading-6 text-gray-700">{formData.smoking}</label>
                                    </div>
                                </div>
                                <div className="border-t border-blue-200" />
                                <div className="flex gap-x-3 items-center justify-between p-3 rounded-lg mt-2">
                                    <div className="flex items-center space-x-4 pl-4">
                                        <PiDog className="text-blue-400 text-lg" />
                                        <label htmlFor="love" className="block text-md font-medium leading-6 text-gray-700">{formData.pets}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex-col items-start justify-start">
                            <div className="mt-3 space-y-2">
                                <div className="flex gap-x-3 items-center justify-between p-3 border-gray-100 rounded-lg">
                                    <div className="flex items-center space-x-4 pl-4">
                                        <IoMusicalNotesOutline className="text-blue-400 text-lg" />
                                        <label htmlFor="pets" className="block text-md font-medium leading-6 text-gray-700">{formData.favoriteSong}</label>
                                    </div>
                                </div>
                                <div className="border-t border-blue-200" />
                                <div className="flex gap-x-3 items-center justify-between p-3 rounded-lg mt-2">
                                    <div className="flex items-center space-x-4 pl-4">
                                        <RiDiscussLine className="text-blue-400 text-lg" />
                                        <label htmlFor="talk" className="block text-md font-medium leading-6 text-gray-700">{formData.talk} </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
