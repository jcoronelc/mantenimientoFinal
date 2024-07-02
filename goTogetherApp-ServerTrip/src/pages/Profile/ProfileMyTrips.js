
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useData } from "../Registrar/DataContext";
import Header from "../../components/layout/Header";
import BackButton from "../../components/ui/Bottom/Back";
import TripCard from "../../components/layout/TripCard";
import { getAllTrips } from "../../services/trip"


function ProfileMyTrips() {

    const [trips, setTrips] = useState([]);

    //get viajes
  useEffect(() => {
    async function loadTrip(){
      const res = await getAllTrips();
      console.log(res.data);
      setTrips(res.data);
     
    }
    loadTrip();
  }, []);

    const [tripsData, setTripsData] = useState([
        {
            avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            name: "Nohelia Holtz",
            rating: 3,
            price: "$15",
            startTime: "08:00 AM",
            startLocation: "Cuenca",
            duration: "3 H 10 MIN",
            endTime: "11:00 AM",
            endLocation: "Guayaquil",
            status:"en_curso"
        },
        {
            avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            name: "Juan Perez",
            rating: 4,
            price: "$20",
            startTime: "09:00 AM",
            startLocation: "Quito",
            duration: "4 H 30 MIN",
            endTime: "01:30 PM",
            endLocation: "Manta",
            status:"completado"
        },
        {
            avatarSrc: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            name: "Patricia Bermeo",
            rating: 2,
            price: "$10",
            startTime: "09:00 AM",
            startLocation: "Santo Domingo",
            duration: "8 H 30 MIN",
            endTime: "07:30 PM",
            endLocation: "Riobamba",
            status:"cancelado"
        }

    ]);

  

    return (
        <div>

            <div className="m-2 p-4">
                <Header />
                <div className="flex flex-col mt-20 mb-4 sm:mr-20 sm:ml-20 ml-8 mr-8 ">
                    <BackButton to="/mi-cuenta" />
                </div>

                <div className="flex flex-col items-center justify-center sm:ml-56 sm:mr-56 mt-4  ml-8 mr-8" >
                    <h1 className="md:text-3xl sm:text-4xl text-2xl font-bold py-4 text-blue-900">Mis viajes</h1>
                    <label htmlFor="email" className="block text-ls text-gray-700">Lleva un registro de tus viajes publicados y reservados</label>
                </div>



                <div className="  sm:ml-56 sm:mr-56 mt-2 mb-5 ml-8 mr-8">
                    <div className="flex flex-col p-8">

                    {trips.map((trip) => (
                    <TripCard trip = {trip} />
                  
                    ))}

                    {/* {tripsData.map((trip, index) => (
                        <TripCard
                            key={index}
                            avatarSrc={trip.avatarSrc}
                            name={trip.name}
                            rating={trip.rating}
                            price={trip.price}
                            startTime={trip.startTime}
                            startLocation={trip.startLocation}
                            duration={trip.duration}
                            endTime={trip.endTime}
                            endLocation={trip.endLocation}
                            status={trip.status}
                            index={index}
                            onDelete={handleDeleteTrip}
                        />
                    ))} */}

                    
                    

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileMyTrips
