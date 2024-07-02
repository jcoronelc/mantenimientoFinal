import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import ProfileImageUploader from "../../components/ui/ProfileImageUploader";
import { useData } from "../Registrar/DataContext";

import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { PiDog } from "react-icons/pi";
import { LuCigarette } from "react-icons/lu";
import { RiDiscussLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

import SongModal from '../../pages/Profile/Preference/SongModal';
import PetsModal from '../../pages/Profile/Preference/PetsModal';
import LoveModal from '../../pages/Profile/Preference/LoveModal';
import SmokingModal from '../../pages/Profile/Preference/SmokingModal';
import WorkModal from '../../pages/Profile/Preference/WorkModal';
import InterestModal from '../../pages/Profile/Preference/InterestModal';
import AboutMeModal from '../../pages/Profile/AboutMeModal';
import ThemeModal from "./Preference/ThemesModal";

function ProfilePreference() {
    const { formData, saveFormData } = useData();
    const [modalType, setModalType] = useState(null);
    const [selectedTag, setSelectedTag] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [selectedTags, setSelectedTags] = useState([null, null, null]);


    const openModal = (type) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const openModal2 = (index) => {
        setModalOpen(true);
        setClickedIndex(index);
    };

    const closeModal2 = () => {
        setModalOpen(false);
    };

    const handleSelectBrand = (brand) => {
        const updatedTags = [...selectedTags];
        updatedTags[clickedIndex] = brand;
        setSelectedTags(updatedTags);
        closeModal();
    };
    return (
        <div>
            <div className="m-2 p-4">
                <Header />
                <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                    <BackButton to="/mi-cuenta" />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4 sm:mr-20 sm:ml-20 ml-8 mr-8">
                    <div className="flex-[2] bg-white border border-gray-200 rounded-lg shadow mt-5 mb-5 p-8 ">
                        <ProfileImageUploader />
                        <div className="flex justify-center p-4">
                    <label htmlFor="name-profile" className=" text-lg font-bold">Nohelia Holtz</label>
                  
                </div>
                    </div>

                    <div className="flex-[3] bg-white border border-gray-200 rounded-lg shadow mt-5 mb-5 p-8">
                        <div className="flex flex-col">
                            <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">
                                Tu perfil
                            </h1>
                            <label htmlFor="email" className="block text-ls text-gray-700 mb-4">
                                La información que compartas se usará en todo GoTogether para que
                                otros conductores y pasajeros te conozcan mejor.
                            </label>

                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1 flex-col">
                                    <div className="mt-3 space-y-2 ">
                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <IoMusicalNotesOutline className="text-blue-400 text-lg" />
                                                <label htmlFor="song" className="block text-md font-medium leading-6 text-gray-700">Canción favorita</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="song" name="song" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('song')} />
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <FaRegHeart className="text-blue-400 text-lg" />
                                                <label htmlFor="love" className="block text-md font-medium leading-6 text-gray-700">Amo</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="love" name="love" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('love')} />
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <MdWorkOutline className="text-blue-400 text-lg" />
                                                <label htmlFor="work" className="block text-md font-medium leading-6 text-gray-700">¿A qué te dedicas?</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="work" name="work" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('work')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex-col items-start justify-start">
                                    <div className="mt-3 space-y-2">
                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 border-gray-100 rounded-lg">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <PiDog className="text-blue-400 text-lg" />
                                                <label htmlFor="pets" className="block text-md font-medium leading-6 text-gray-700">Mascotas</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="pets" name="pets" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('pets')} />
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <LuCigarette className="text-blue-400 text-lg" />
                                                <label htmlFor="smoking" className="block text-md font-medium leading-6 text-gray-700">Fumar</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="smoking" name="smoking" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('smoking')} />
                                            </div>
                                        </div>

                                        <div className="border-t border-blue-200" />

                                        <div className="flex gap-x-3 items-center justify-between hover:bg-blue-50 p-3 rounded-lg mt-2">
                                            <div className="flex items-center space-x-4 pl-4">
                                                <RiDiscussLine className="text-blue-400 text-lg" />
                                                <label htmlFor="talk" className="block text-md font-medium leading-6 text-gray-700">Conversar</label>
                                            </div>
                                            <div className="flex items-center space-x-2 justify-end pr-8">
                                                <button id="talk" name="talk" type="button" className="h-4 w-4 border-blue-800 text-indigo-600 focus:ring-blue-600" onClick={() => openModal('talk')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-2">
                                <h3 className="md:text-2xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">
                                    Sobre ti
                                </h3>

                                <div className="flex flex-col justify-center border border-dashed rounded-lg border-gray-500 relative h-24 p-4">
                                    <label className="text-gray-600">{formData.aboutMe}</label>
                                    <a href="#" onClick={() => openModal('aboutMe')}>Preséntate</a>
                                </div>
                            </div>

                            <div className="border-t border-blue-200 mt-8"></div>

                            <div className="mt-3 space-y-2">
                                <h1 className="md:text-2xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">
                                    ¿Qué te gusta?
                                </h1>
                                <label htmlFor="email" className="block text-ls text-gray-700 mb-4">
                                    Para encontrar puntos en común con otros conductores y pasajeros, agrega intereses a tu perfil.
                                </label>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {selectedTags.map((selectedTag, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer text-primary font-medium rounded-full dark:bg-blue-50 dark:hover:bg-blue-100 text-base px-4 py-2 text-center flex items-center"
                                            onClick={() => openModal2(index)}
                                        >
                                            {selectedTag ? selectedTag.icon : index === clickedIndex ? null : <FaPlus className="text-blue-400 w-4" />}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="border-t border-blue-200 mt-8"></div>
                            <div className="flex justify-end mt-8 gap-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 w-32 text-blue-50 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                                >
                                    Listo
                                </button>
                            </div>

                        </div>
                    </div>


                    {modalType === 'song' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <SongModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}


                    {modalType === 'pets' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <PetsModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}

                    {modalType === 'love' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <LoveModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}

                    {modalType === 'smoking' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <SmokingModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}

                    {modalType === 'work' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <WorkModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}

                    {modalType === 'talk' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <InterestModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}
                    {modalType === 'aboutMe' && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <AboutMeModal onClose={closeModal} />
                                </div>
                            </div>
                        </div>
                    )}

                    {modalOpen && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-blue-50 p-4 rounded-lg w-full md:max-w-md relative" style={{ background: 'linear-gradient(to bottom, #eff6ff, #FFFFFF)' }}>
                                <button className="text-blue-900  rounded-full bg-transparent hover:bg-blue-100 focus:outline-none px-3 py-1 absolute top-2 right-2" onClick={closeModal2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div>
                                    <ThemeModal onClose={closeModal2} onSelectBrand={handleSelectBrand} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePreference;


