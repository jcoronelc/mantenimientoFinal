import {React, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import PostTrip from './pages/Trip/PostTrip';
import PostTripStep2 from './pages/Trip/PostTripStep2';
import PostTripStep3 from './pages/Trip/PostTripStep3';
import Admin from './pages/AdminControl/Admin';
import ListTrip from './pages/Booking/ListTrip';
import Confirmation from './pages/Booking/Confirmation';
import Payment from './pages/Booking/Payment';
import AboutUs from './pages/AboutUs/AboutUs';
import Terms from './pages/AboutUs/Terms';
import Questions from './pages/AboutUs/Questions';

import RegisterModal from './pages/Login/RegisterModal';
import LoginModal from './pages/Login/LoginModal'
import ProfilePreview from './pages/Profile/ProfilePreview';
import ProfileData from './pages/Profile/ProfileData';
import ProfilePreference from './pages/Profile/ProfilePreference';

import TripDetail from './pages/Trip/TripDetail';
import PasswordChange from './pages/Login/PasswordChange'
import ProfileVerification from './pages/Profile/ProfileVerification';
import ProfileAddCar from './pages/Profile/ProfileAddCar';
import ProfileMyTrips from './pages/Profile/ProfileMyTrips';
import ProfilePayment from './pages/Profile/ProfilePayment';
import Register from './pages/Registrar/Register';
import Login from './pages/Login/LoginPage';
import TripUpdate from './pages/Trip/TripUpdate';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    document.title = "Go Together"; 
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
          <Route index element={<Home />} />
          <Route path="publicar-viaje" element={<PostTrip />} />
          <Route path="publicar-viaje-paso2" element={<PostTripStep2 />} />
          <Route path="publicar-viaje-paso3" element={<PostTripStep3 />} />
          <Route path="detalle-viaje" element={<TripDetail />} />
          <Route path="actualizar-viaje/:id" element={<TripUpdate />} />


          <Route path="cambiar-contraseña" element={<PasswordChange />} />

          <Route path="listar-viajes" element={<ListTrip />} />
          <Route path='confirmar-viaje' element={<Confirmation />} />
          <Route path="pagar-viaje" element={<Payment />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="terminos-condiciones" element={<Terms />} />
          <Route path="preguntas" element={<Questions />} />
          <Route path="control-admin" element={<Admin />} />

          <Route path='login'  element={<LoginModal/>}/>
          <Route path='registrar'  element={<RegisterModal/>}/>

          <Route path='mi-cuenta'  element={<ProfilePreview/>}/>
          <Route path='datos-personales'  element={<ProfileData/>}/>
          <Route path='verificacion-identidad'  element={<ProfileVerification/>}/>
          <Route path='agregar-vehiculo'  element={<ProfileAddCar/>}/>
          <Route path='mis-viajes' element={<ProfileMyTrips/>}/>
          <Route path='metodo-pago' element={<ProfilePayment/>}/>
          <Route path='preferencias'  element={<ProfilePreference/>}/>
          <Route path='registrar-usuario'  element={<Register/>}/>
          <Route path='login-usuario'  element={<Login/>}/>
         

  
      </Routes>
    </BrowserRouter>
  );
}

export default App;