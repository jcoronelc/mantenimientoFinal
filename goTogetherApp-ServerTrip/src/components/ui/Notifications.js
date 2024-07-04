import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ notify }) => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
   
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
   
  });
};

export const notifyInfo = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
   
  });
};

export const notifyWarning = (message) => {
  toast.warn(message, {
    position: "top-right",
    autoClose: 5000,
  });
};

export const notifyExtra = (message) => {
  toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}

export default Notification;
