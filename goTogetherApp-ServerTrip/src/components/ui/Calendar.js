import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../assets/styles/DatePicker.css"


const Calendar = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date(); // Obtener la fecha actual

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onSelect(date); // Llama a la función onSelect con la fecha seleccionada
  };

  return (
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        onChange={date => handleDateSelect(date)}
        inline
        dateFormat="dd/MM/yyyy"
        minDate={currentDate} // Restringe las fechas anteriores a la fecha actual
      />
    </div>
  );
};


export default Calendar;
