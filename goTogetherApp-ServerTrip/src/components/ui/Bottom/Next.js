import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

function Next({ to, onClick, disabled }) {
    return (
        <div className='flex flex-row' onClick={disabled ? undefined : onClick}>
            <label className="font-bold text-xl text-blue-900 mr-2 align-middle">Continuar</label>
            <Link to={to} className={`rounded-full bg-transparent hover:bg-blue-100 focus:outline-none p-2 ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
                <MdArrowForwardIos className={`text-blue-900 hover:text-blue-700 ${disabled ? 'pointer-events-none' : ''}`} />
            </Link>
        </div>
    )
}

export default Next;
