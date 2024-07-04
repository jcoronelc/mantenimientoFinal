import axios from 'axios'

const vehicleAPI = axios.create({
   baseURL: 'http://localhost:8000/goTogether/api/v1/vehicle/'
})

export const getAllVehicle  = () => {
   return vehicleAPI.get('/')
}

export const createVehicle = (vehicle) => {
   return vehicleAPI.post('/',vehicle)   
}

export const deleteVehicle  = (vehicle_id) => {
   return vehicleAPI.delete(`/${vehicle_id}`)  //interpolacion  
}

export const updateVehicle  = (vehicle_id, vehicle) => {
   return vehicleAPI.put(`/${vehicle_id}/`,vehicle)  //interpolacion  
}

export const getVehicle  = (vehicle_id) => {
   return vehicleAPI.get(`/${vehicle_id}/`)  
}

export const getVehicleByOwner  = (owner_id) => {
    return axios.get(`http://localhost:8000/goTogether/api/v1/vehicles-by-owner/${owner_id}/`)  
 }
