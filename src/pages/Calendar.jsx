import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">Calendar</h2>
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
  </div>
);

export default Calendar;
