import React from 'react'

import Header from "../../components/layout/Header";
import UserInfo from "../../components/layout/UserInfo";
import ProfilePhoto from "../../components/layout/ProfilePhoto"
import ProfileData from "../../components/layout/ProfileData"
import ProfilePreference from "../../components/layout/ProfilePreference"
import ProfileCredential from '../../components/layout/ProfileCredential';
import ProfileAddCar from '../../components/layout/ProfileAddCar';
import ProfieleTableCars from '../../components/layout/ProfileTableCars';
import Footer from "../../components/layout/Footer"

function index() {
    return (
        <div>
            <div className="flex flex-col md:flex-row m-20 mb-3">
                <div className="w-full md:w-1/3 p-4">
                    {/* Contenido de la primera columna */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                        <ProfilePhoto/>
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4">
                    {/* Contenido de la segunda columna */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                        {/* Contenido específico de la segunda columna */}
                        <ProfileData/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col m-20 mb-3">
                <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <ProfilePreference />
                </div>
            </div>
            <div className="flex flex-col m-20 mb-3">
                <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <ProfileCredential />
                </div>
            </div>
            <div className="flex flex-col m-20 mb-3">
                <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
                    <ProfieleTableCars />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default index
