import React, { createContext, useState } from 'react';

// Crea el contexto
export const ProfilePreferenceContext = createContext();

// Crea el proveedor del contexto
export const ProfilePreferenceProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        favoriteSong: '',
        love: '',
        work: '',
        pets: '',
        smoking: '',
        talk: ''
    });

    const updateProfileData = (key, value) => {
        setProfileData(prevData => ({ ...prevData, [key]: value }));
    };

    return (
        <ProfilePreferenceContext.Provider value={{ profileData, updateProfileData }}>
            {children}
        </ProfilePreferenceContext.Provider>
    );
};
