



import Sidenav from '../components/sidenav'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const myEventList=[
    {
        title:"Wedding work",
        start:new Date(2024,9,26,10,0),
        end:new Date(2024,9,26,17,0)
    },
    {
        title:"Birthday party of Tiphanie",
        start:new Date(2024,9,26,18,0),
        end:new Date(2024,9,26,21,0)
    },
    {
        title:"Fashion photography",
        start:new Date(2024,9,28,18,0),
        end:new Date(2024,9,28,21,0)
    }
]

const Calendars = () => (
    
  <div className='flex h-[100%] bg-black '>
    <Sidenav/>
    <div className='flex flex-col gap-10  '>
        <h1 className='text-white mt-10 font-bold text-[120%]'>Calendar</h1>
        <div className='h-[500px] overflow-y-auto w-[100%]'>
            <Calendar
             localizer={localizer}
             events={myEventList}
             startAccessor="start"
             endAccessor="end"
           
             className='rbc-off-range rbc-off-range-bg rbc-today rbc-toolbar-label rbc-button-group>button m-[50px] bg-[#0a0b0c] text-white focus:bg-red'
            />
        </div>
    </div>
  </div>
)

export default Calendars;








































// import Calendars from 'react-big-calendar'
// import Sidenav from "../components/sidenav";
// import {useState} from 'react';


// const Calendar = () =>{
//     const [value,onChange]=useState(new Date());
// return(
// <div className="flex">
// <Sidenav/>   
// <div className="bg-black w-[100%] flex  flex-col gap-5 ">
// <h1 className="text-[#ffff] font-bold mt-10">Calendar</h1>
// <Calendars className="bg-[#0a0b0c] text-white w-[90%]  h-[100%] mx-auto" onChange={onChange} value={value}/>
// </div>

// </div>


// )}

// export default Calendar;