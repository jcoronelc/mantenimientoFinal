import React, { useState, useRef, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useData } from '../../pages/Registrar/DataContext';
import DefaultImage from '../../assets/img/FondoLineas.jpg';

function ProfileImageUploader() {
    const { formData, saveFormData } = useData();
    const [profileImage, setProfileImage] = useState(formData.image || DefaultImage);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef();

    useEffect(() => {
        setProfileImage(formData.image || DefaultImage);
    }, [formData.image]);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                setProfileImage(imageUrl);
                setIsUploading(false);
                saveFormData({ ...formData, image: imageUrl }); // Actualiza la imagen en el contexto
            };
            reader.readAsDataURL(event.target.files[0]);
            setIsUploading(true);
        }
    };

    const handleChooseImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col text-center">
            <div className="relative flex items-center justify-center">
                <label htmlFor="upload-button" className="cursor-pointer relative">
                    <div className={`h-48 w-48 rounded-full overflow-hidden border ${isUploading ? 'border-blue-500 animate-spin-slow' : 'border-gray-300'}`}>
                        <img className="w-full h-full object-cover" src={profileImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="Profile" />
                    </div>
                    <input type="file" id="upload-button" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                    <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                        <button className="bg-blue-700 text-blue-50 p-2 rounded-full shadow-md flex items-center cursor-pointer hover:bg-blue-800" onClick={handleChooseImageClick}>
                            <FaCamera className="text-lg" />
                        </button>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default ProfileImageUploader;
