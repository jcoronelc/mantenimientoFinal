import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';


function Back({to}) {
    return (
        <div className='flex flex-row'>

            <Link to={to} className="rounded-full bg-transparent hover:bg-blue-100 focus:outline-none p-2">
                <MdArrowBackIosNew className='text-blue-900 hover:text-blue-700' />
            </Link>

            <label className="font-bold text-xl text-blue-900 ml-2 align-middle">Regresar</label>

        </div>
    )
}

export default Back