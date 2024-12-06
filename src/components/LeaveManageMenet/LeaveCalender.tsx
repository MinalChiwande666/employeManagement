import React, { SetStateAction } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { parse, format, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';

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

interface LeaveDataProp{
    Leave : [] | any,
    setLeave : React.Dispatch<SetStateAction<[] | any>>
}


const LeaveCalender = ({Leave,setLeave}:LeaveDataProp) => {
   

    const handleSelectDate = (slotInfo: { start: Date, end: Date }) => {
        const event = {
            id:Math.floor(Math.random()*10000).toString(),
            title: "Leave",
            start:slotInfo.start,
            end : slotInfo.end
        }
        const isEventExists = Leave.some((e: any) => 
            new Date(e.start).getTime() === new Date(event.start).getTime()
        );
        console.log(isEventExists,'ansnaj')
        if (isEventExists) {
          alert('Already Added')
        }
        else {
            setLeave([...Leave, event])
        }

    }
    return (
        <div style={{ height: 500 }}>
            <Calendar
                localizer={localizer}
                events={Leave}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectDate}
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    )
}

export default LeaveCalender