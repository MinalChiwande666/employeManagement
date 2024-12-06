import React, { SetStateAction, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parse, format, startOfWeek, getDay } from 'date-fns';
import {enUS} from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
  });
  
  
interface CalendarProp{
  setOpenModal : React.Dispatch<SetStateAction<Boolean>> ,
  selectedStatus : String | any,
  openModal : Boolean | any
}
  
const AttendanceCalender = ({setOpenModal,selectedStatus,openModal}:CalendarProp) => {
    // const localizer = momentLocalizer(moment)
    // console.log(selectedStatus,'skdskdk')
    const [Events,setEvents] = React.useState<any>([])
    const [selectDate,setSelectDate] = useState<Date | any>(null)


    const check = ()=>{
      if(openModal)
      {
        console.log(selectedStatus)
        return
      }
    }
    const handleSelectDate = (slotInfo : {start : Date; end: Date})=>{
     
       const curr_date = new Date()
       setSelectDate(slotInfo.start)
    
       if(slotInfo.start)
       {
           const selectedOnly =  new Date(
            slotInfo.start.getFullYear(),
            slotInfo.start.getMonth(),
            slotInfo.start.getDate()
           )

           const currDateOnly = new Date(
            curr_date.getFullYear(),
            curr_date.getMonth(),
            curr_date.getDate()
           )

           if(selectedOnly.getTime()=== currDateOnly.getTime())
           {
        
            const findIndex = Events.findIndex((e:any)=>{return e.title === "Present" })
            if(findIndex >= 0)
            {
              alert('already Selected Present Date')
            }
            else
            {
              setOpenModal(true)
              check()
              // console.log(selectedStatus,'anskanskanska')
              // setEvents([...Events,{title:selectedStatus,start:slotInfo.start,end:slotInfo.end}])
            }
           }else
           {
            alert('You can only mark present for the current date.');
           }
       }
       
    }
  return (
    <div style={{ height: 500 }}>
         <h1>{selectDate ?selectDate.toString():
            'None'}</h1>
    <Calendar
      localizer={localizer}
      events={Events}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={handleSelectDate}
      style={{ height: '100%', width: '100%' }}
    />
  </div>


  )
}

export default AttendanceCalender