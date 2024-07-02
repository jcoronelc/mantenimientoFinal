import { useState } from 'react';

import StarsRating from "../../components/ui/StarsRating";

function Panel({ name, rating, date, children }) {
  return (
    <div className='col-span-12 mt-5 mb-5'>
        {/* Contenedor informacion cliente */}
        <div className="flex flex-row justify-between">
            <div className="flex flex-row">
                {/* Contenedor Foto */}
                <div>
                    <img className="mr-5 inline-block w-16 h-16 rounded-lg" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" />
                </div>

                {/* Contenedor texto */}
                <div>
                    <label className="text-gray-500">{name}</label>
                    <StarsRating stars={rating} color="text-blue-400" />
                    <label className="text-gray-500">{"("+rating+")"}</label>

                </div>
            </div>

            {/* Contenedor fecha */}
            <div>
                <label className="text-gray-500">{date}</label>
            </div>
        </div>

        {/* Contenedor reseña */}
        <div>
            <label className="text-gray-500">{children}</label>
        </div>
        
        
    </div>
  );
}

export default function Review() {
  return (
    <>
      <Panel name="Martin Luather" rating={3.1} date="Hace 2 días">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </Panel>

      <Panel name="Johan Smith" rating={4.1} date="Hace 1 mes">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </Panel>
    </>
  );
}
