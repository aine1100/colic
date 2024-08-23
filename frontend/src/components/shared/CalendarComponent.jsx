import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { FaAngleRight, FaAngleLeft, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

const CalendarComponent = () => {
    const [ date, setDate ] = useState(new Date())
    const onChange = (newDate) => {
        setDate(newDate)
    }

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-700 bg-opacity-20 rounded-xl shadow-lg">
      <Calendar
                onChange={setDate}
                value={date}
                className="p-4 bg-grey-700 rounded-lg shadow-md border border-gray-200"
                
                // Customizing the navigation label (Month and Year)
                navigationLabel={({ date, label }) => (
                    <div className="text-lg font-bold text-gray-800">
                        {label} {/* Displays the month and year */}
                    </div>
                )}
                
                // Customizing the previous and next labels (arrows)
                prevLabel={<span className="text-xl text-gray-700">‹</span>}
                nextLabel={<span className="text-xl text-gray-700">›</span>}
                
                // Customizing the previous and next year labels (double arrows)
                prev2Label={<span className="text-xl text-gray-700">«</span>}
                next2Label={<span className="text-xl text-gray-700">»</span>}
            />
    </div>
  )
}

export default CalendarComponent