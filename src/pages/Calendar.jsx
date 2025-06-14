import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ThemeContext } from "../context/ThemeContext";


const Calendar = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`calendar-wrapper ${dark ? 'dark' : ''}`}>
      <h2 className="calendar-title">📆 Calendar</h2>
      <div className="calendar-card">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    </div>
  );
};

export default Calendar;
