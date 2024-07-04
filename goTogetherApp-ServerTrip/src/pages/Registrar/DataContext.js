import React, { createContext, useContext, useState, useEffect } from 'react';
import DefaultImage from '../../assets/img/iconProfile.jpg';
import { getAllProfiles } from "../../services/profile";

const initialFormData = {
  id: '',
  phoneNumber: '',
  username: '',
  lastname: '',
  password: '',
  emailLogin: '',
  year: '',
  month: '',
  day: '',
  gender: '',
  country: '',
  rating: 5,
  favoriteSong: 'Thunder, Imagine Dragons',
  love: '',
  work: '',
  pets: 'No se permiten mascotas',
  smoking: 'No se permite fumar',
  talk: 'Me encanta conversar',
  aboutMe: 'Cuéntanos un poco sobre ti. Escribe un breve resumen de quién eres, lo que te gusta, lo que no te gusta, y todo lo que quieras compartir con los demás',
  image: DefaultImage
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(true); // Para controlar el estado de carga inicial

  useEffect(() => {
    async function fetchData() {
      try {
        const profiles = await getAllProfiles();
        const profilesData = profiles.data
        console.log(profilesData)
        const loggedInProfile = profilesData.find(profile => profile.emailLogin === formData.emailLogin && profile.password === formData.password);
        console.log(loggedInProfile)
        if (loggedInProfile) {
          setFormData({
            id: loggedInProfile.id,
            phoneNumber: loggedInProfile.phoneNumber || '',
            username: loggedInProfile.username || '',
            lastname: loggedInProfile.lastname || '',
            password: loggedInProfile.password || '',
            emailLogin: loggedInProfile.emailLogin || '',
            year: loggedInProfile.year || '',
            month: loggedInProfile.month || '',
            day: loggedInProfile.day || '',
            gender: loggedInProfile.gender || '',
            country: loggedInProfile.country || '',
            favoriteSong: loggedInProfile.favoriteSong || 'Thunder, Imagine Dragons',
            love: loggedInProfile.love || '',
            work: loggedInProfile.work || '',
            pets: loggedInProfile.pets || 'No se permiten mascotas',
            smoking: loggedInProfile.smoking || 'No se permite fumar',
            talk: loggedInProfile.talk || 'Me encanta conversar',
            aboutMe: loggedInProfile.aboutMe || 'Cuéntanos un poco sobre ti. Escribe un breve resumen de quién eres, lo que te gusta, lo que no te gusta, y todo lo que quieras compartir con los demás',
            image: loggedInProfile.image || DefaultImage
          });
        } else {
          console.error('Perfil no encontrado para las credenciales proporcionadas.');
        }
      } catch (error) {
        console.error('Error al obtener perfiles:', error);
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    }

    if (formData.emailLogin && formData.password) {
      fetchData();
    }
  }, [formData.emailLogin, formData.password]);

  const saveFormData = (data) => {
    setFormData(data);
  };

  return (
    <DataContext.Provider value={{ formData, saveFormData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
