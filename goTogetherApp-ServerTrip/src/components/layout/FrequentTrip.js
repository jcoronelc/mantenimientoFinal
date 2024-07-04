import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function FrequentTrip() {
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    let origin = {
      place_id: 'ChIJd8BlQ2BZwokRAFUEcm_qrcA',
      address: 'Cuenca, Ecuador'
    };
  
    let destination = {
      place_id: 'ChIJVXealLU_xkcRja_At0z9AGY',
      address: 'Guayaquil, Ecuador'
    };
    e.preventDefault(); 
    navigate('/listar-viajes', { 
      state: { 
        origin, 
        destination
      } 
    });
  };

  const handleSearch2 = (e) => {
    let origin = {
      place_id: 'ChIJd8BlQ2BZwokRAFUEcm_qrcA',
      address: 'Machala, Ecuador'
    };
  
    let destination = {
      place_id: 'ChIJVXealLU_xkcRja_At0z9AGY',
      address: 'Cuenca, Ecuador'
    };
    e.preventDefault(); 
    navigate('/listar-viajes', { 
      state: { 
        origin, 
        destination
      } 
    });
  };

  const handleSearch3 = (e) => {
    let origin = {
      place_id: 'ChIJd8BlQ2BZwokRAFUEcm_qrcA',
      address: 'Riobamba, Ecuador'
    };
  
    let destination = {
      place_id: 'ChIJVXealLU_xkcRja_At0z9AGY',
      address: 'Quito, Ecuador'
    };
    e.preventDefault(); 
    navigate('/listar-viajes', { 
      state: { 
        origin, 
        destination
      } 
    });
  };

    return (
        <div className="flex bg-gradient-to-r from-blue-700 to-[#172554]  w-full justify-center items-center">
        <div className="flex flex-col gap-4 p-8 mb-4">
          <div className="flex m-4 justify-center text-center">
            <h1 className="text-3xl font-bold text-gray-50 sm:text-4xl">¿Cuál es tu próximo destino?</h1>
          </div>
      
          <div className="flex flex-wrap justify-center text-center ">
      
            <div className="flex items-center m-2 ">
              <Link to="#" onClick={handleSearch} className="text-primary bg-blue-700 hover:bg-blue-800 h-16 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-gray-50 dark:hover:bg-blue-100 dark:focus:ring-blue-800 flex items-center">
                Cuenca <FaArrowRightLong className="w-4 h-4 m-2 text-blue-900" /> Guayaquil <FaAngleRight className="w-4 h-4 ml-16 text-blue-primary" />
              </Link>
            </div>
      
            <div className="flex items-center m-2">
              <Link to="#" onClick={handleSearch2} className="text-primary bg-blue-700 hover:bg-blue-800 h-16 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-gray-50 dark:hover:bg-blue-100 dark:focus:ring-blue-800 flex items-center">
                Machala <FaArrowRightLong className="w-4 h-4 m-2 text-blue-900" /> Cuenca <FaAngleRight className="w-4 h-4 ml-16 text-blue-primary" />
              </Link>
            </div>
      
            <div className="flex  items-center m-2">
              <Link to="#" onClick={handleSearch3} className="text-primary bg-blue-700 hover:bg-blue-800 h-16 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-gray-50 dark:hover:bg-blue-100 dark:focus:ring-blue-800 flex items-center">
                Riobamba <FaArrowRightLong className="w-4 h-4 m-2 text-blue-900" /> Quito <FaAngleRight className="w-4 h-4 ml-16 text-blue-primary" />
              </Link>
            </div>


          </div>
{/*       
          <div className='flex justify-end m-4'>
            <label className="text-blue-400 text-l font-bold">Ver los viajes más frecuentes</label>
          </div> */}
        </div>
      </div>
      
    
    )
}

export default FrequentTrip