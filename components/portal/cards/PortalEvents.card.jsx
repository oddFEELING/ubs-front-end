/** 🌹oddFEELING */

import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const events = [
  {
    title: "Children's day",
    date: 'Sept 03',
    color: 'bg-green-500',
    visitable: true,
  },
  {
    title: 'Workers day',
    date: 'Dec 20',
    color: 'bg-rose-500',
    visitable: false,
  },
];

const PortalEventsCard = () => {
  return (
    <div className='rounded-xl shadow-lg border bg-white h-full w-full flex flex-col py-3 px-3 lg:py-8 lg:px-6'>
      <h3 className='text-gray-700 font-bold text-xl'>Upcoming Events</h3>

      {/* ======= event <cards></cards> */}
      <div className='grid w-full h-auto py-4 px-2 grid-cols-2 gap-3'>
        {events.map((event, index) => (
          <div
            className='flex flex-col gap-1  col-span-2 md:col-span-1'
            key={index}
          >
            <div
              className={`${event.color} h-52 w-fullshadow-lg rounded-lg relative py-8 px-4 lg:px-10 flex flex-col-reverse max-w-lg border`}
            >
              <CalendarDaysIcon className='text-gray-100 absolute top-3 left-3 w-8 h-8 ' />
              <p className='text-4xl font-bold text-gray-50'>{event.title}</p>
              <p className='absolute -right-5 top-6 text-8xl font-extrabold text-gray-200/30 text-right'>
                {event.date}
              </p>
            </div>
            <p className='text-gray-600 text-sm mt-1 py-1 px-4 border border-gray-400 w-max rounded-md shadow-sm'>
              Visitation&nbsp;{' '}
              <b>{event.visitable ? 'allowed' : 'not allowed'}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortalEventsCard;
