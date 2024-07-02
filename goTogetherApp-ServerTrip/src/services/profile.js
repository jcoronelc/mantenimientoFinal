import axios from 'axios'

const userAPI = axios.create({
  baseURL: 'http://localhost:8000/goTogether/api/v1/profile/'
})

export const getAllProfiles = () => {
  const res = axios.get('http://localhost:8000/goTogether/api/v1/profile/')
  return res
}

export const updateProfile = async (id, profileData) => {
  try {
    const response = await fetch(`http://localhost:8000/goTogether/api/v1/profile/${id}/`, {
      method: 'PUT', // O 'PATCH' si sólo quieres actualizar algunos campos
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el perfil');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    throw error;
  }
};

// En el servicio registerUser dentro de auth.js

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/goTogether/api/v1/profile/', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data) {
      throw new Error('No se recibió una respuesta válida del servidor');
    }

    return response.data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};


export const getProfileById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/goTogether/api/v1/profile/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data) {
      throw new Error('No se recibió una respuesta válida del servidor');
    }

    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
    throw error;
  }
};

export const getUser = (user_id) => {
  return userAPI.get(`/${user_id}/`)  
}