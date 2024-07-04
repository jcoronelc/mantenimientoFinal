
import React, { useState, useEffect } from 'react';
import StarsRating from '../ui/StarsRating'; 
import { getUser } from "../../services/profile";


function BookingCard({ trip }) {

    const [user, setUser] = useState();

    useEffect(() => {
        async function loadUser() {
            try {
                const res = await getUser(trip.driver);
                console.log(res.data);
                setUser(res.data);
            } catch (error) {
                console.error("Error obtener usuario:", error);
                setUser(null); 
            }
        }
        loadUser();
    }, [trip.id]);


    const avatarSrc = user ? user.avatarSrc : '';
    const name = user ? user.username : '';
    const rating = user ? user.rating: 1;
    const endTime = trip.arrival_time
    const duration = trip.duration

    return (
        <div className="flex bg-white border border-gray-200 rounded-lg shadow-md mt-2 mb-2 hover:bg-blue-100 transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="flex flex-col m-4 space-y-4 w-full">
                <div className="flex flex-row justify-between items-center m-2">
                    <div className="flex flex-row items-center space-x-4">
                        <img className="inline-block w-10 h-auto rounded-full ring-2 ring-blue-400"
                            src={avatarSrc}
                            alt="avatar" />
                        <div className="flex flex-col">
                            <label htmlFor="name-profile" className="font-bold">{name}</label>
                            <StarsRating stars={rating} color="text-blue-400" />
                        </div>
                    </div>
                    <div className="flex">
                        <label htmlFor="username" className="block text-2xl font-bold leading-6 text-blue-800 mx-2 self-end">
                            ${trip.price_per_seat}
                        </label>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap m-2 sm:space-x-4 md:space-x-8 lg:space-x-12">
                    <div className="flex flex-col mb-2 ">
                        <label htmlFor="" className="font-bold text-l">{trip.pickup_time}</label>
                        <label htmlFor="" className="font-bold text-l text-blue-800">{trip.origin}</label>
                    </div>
                    <div className="flex flex-col mb-2 w-full sm:w-auto sm:max-w-xs">
                        <label htmlFor="push-everything" className="block border-2 border-blue-800 rounded-lg text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">{duration}</label>
                    </div>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="" className="font-bold text-l">{endTime}</label>
                        <label htmlFor="" className="font-bold text-l text-blue-800">{trip.destination}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingCard;




// function BookingCard({ avatarSrc, name, rating, price, startTime, startLocation, duration, endTime, endLocation }) {
//     return (
//         <div className="flex bg-white border border-gray-200 rounded-lg shadow-md mt-2 mb-2 hover:bg-blue-100 transform hover:-translate-y-1 transition duration-300 ease-in-out">
//             <div className="flex flex-col m-4 space-y-4 w-full">
//                 <div className="flex flex-row justify-between items-center m-2">
//                     <div className="flex flex-row items-center space-x-4">
//                         <img className="inline-block w-10 h-auto rounded-full ring-2 ring-blue-400"
//                             src={avatarSrc}
//                             alt="avatar" />
//                         <div className="flex flex-col">
//                             <label htmlFor="name-profile" className="font-bold">{name}</label>
//                             <StarsRating stars={rating} color="text-blue-400" />
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <label htmlFor="username" className="block text-2xl font-bold leading-6 text-blue-800 mx-2 self-end">
//                             {price}
//                         </label>
//                     </div>
//                 </div>
//                 <div className="flex flex-row flex-wrap m-2 sm:space-x-4 md:space-x-8 lg:space-x-12">
//                     <div className="flex flex-col mb-2 ">
//                         <label htmlFor="" className="font-bold text-l">{startTime}</label>
//                         <label htmlFor="" className="font-bold text-l text-blue-800">{startLocation}</label>
//                     </div>
//                     <div className="flex flex-col mb-2 w-full sm:w-auto sm:max-w-xs">
//                         <label htmlFor="push-everything" className="block border-2 border-blue-800 rounded-lg text-sm font-bold leading-6 text-blue-800 bg-blue-100 pl-2 pr-2">{duration}</label>
//                     </div>
//                     <div className="flex flex-col mb-2">
//                         <label htmlFor="" className="font-bold text-l">{endTime}</label>
//                         <label htmlFor="" className="font-bold text-l text-blue-800">{endLocation}</label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



