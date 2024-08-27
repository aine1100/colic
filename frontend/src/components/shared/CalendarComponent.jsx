import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import CSS for the calendar
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Time = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={styles.container}>
      <div style={styles.calendarContainer}>
        <Calendar
          onChange={setDate}
          value={date}
          prevLabel={<FaChevronLeft color='blue' />}
          nextLabel={<FaChevronRight color='blue' />}
          tileClassName={({ date, view }) =>
            date.toISOString().split('T')[0] === new Date().toISOString().split('T')[0]
              ? 'selectedDay'
              : null
          }
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48vh',
    backgroundColor: '#0A0B0C',
  },
  calendarContainer: {
    width: '90%',
    maxWidth: '400px',
    border: '0px',
    borderRadius: '10px',
    padding: '10px',
    backgroundColor: '#0A0B0C',
  },
};

// You can add some CSS for the selected day
const style = document.createElement('style');
style.innerHTML = `
  .selectedDay {
    background-color: blue !important;
    color: '#0A0B0C' !important;
    border-radius: 50%;
  }
`;
document.head.appendChild(style);

export default Time;

