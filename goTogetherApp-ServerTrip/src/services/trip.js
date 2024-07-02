import axios from 'axios'

const tripAPI = axios.create({
   baseURL: 'http://localhost:8000/goTogether/api/v1/trip/'
})

export const getAllTrips = () => {
   return tripAPI.get('/')
}

export const createTrip = (trip) => {
   return tripAPI.post('/',trip)   
}

export const deleteTrip = (trip_id) => {
   return tripAPI.delete(`/${trip_id}`)  //interpolacion  
}

export const updateTrip = (trip_id, trip) => {
   return tripAPI.put(`/${trip_id}/`,trip)  //interpolacion  
}

export const getTrip = (trip_id) => {
   return tripAPI.get(`/${trip_id}/`)  
}

