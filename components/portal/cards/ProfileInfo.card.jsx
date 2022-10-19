/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import {
  SparklesIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

const subjects = [
  'English',
  'Mathematics',
  'Social Studies',
  'French',
  'Computer Science',
  'Bussiness studies',
  'Geography',
  'Data processing',
];

const ProfileInfoCard = () => {
  return (
    <div className='w-full h-full bg-white shadow-lg border rounded-xl flex justify-center px-3 py-14 gap-8 flex-col lg:flex-row'>
      {/* ======= image section */}
      <section className='flex flex-col items-center gap-3 border-b pb-5  w-full shrink-0 lg:w-1/3 bg-color-5 rounded-lg shadow-xl lg:shadow-none lg:bg-transparent py-12'>
        <div className='relative w-32 h-32 lg:w-40 lg:h-40 rounded-full shadow-xl  overflow-hidden '>
          <Image
            src='https://images.unsplash.com/photo-1665873806985-9b487caa672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            alt='main-avatar'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <span className='text-gray-700 font-secondary text-sm flex flex-col gap-1'>
          <p className='portal__card-p text-lg text-gray-50 lg:text-gray-600 '>
            <SparklesIcon className='portal__card-icon' />
            Current class: <b>Year 3</b>
          </p>
          <p className='portal__card-p text-lg text-gray-50 lg:text-gray-600'>
            <InformationCircleIcon className='portal__card-icon' />
            Previous class: <b>Year 2</b>
          </p>
        </span>
      </section>

      {/* ======= details section */}
      <section className='text-gray-700 gap-1 flex flex-col pr-5'>
        <h3 className='portal__card-title'>Olusegun Samuel</h3>
        <p className='portal__card-p '>
          <CalendarDaysIcon className='portal__card-icon' /> 14 yrs old
        </p>
        <p className='portal__card-p '>
          <EnvelopeIcon className='portal__card-icon' />
          samuelolusegun23@gmail.com
        </p>

        <div className='flex flex-col mt-6 gap-2'>
          <p className='font-primary font-bold text-gray-600 flex gap-1 items-center '>
            <BookmarkIcon className='portal__card-icon' /> Subjects taken
          </p>
          <span className='w-full flex flex-wrap gap-2'>
            {subjects.map((item, index) => (
              <p
                className='py-1 px-2 border rounded-md w-max shadow-md border-gray-500 font-secondary text-gray-700'
                key={index}
              >
                {item}
              </p>
            ))}
          </span>
        </div>

        {/* ======= Remarks */}
        <p className='mt-6 text-gray-600 font-secondary'>
          Nice and hard working student with the zeal to work. Always punctual
          and ready to learn. Humble and teaches his peers what they do not
          understand.
        </p>

        <div className='w-full flex items-center justify-between xl:justify-end gap-5 mt-5 xl:mt-8 border-t border-gray-400'>
          <button className='border border-gray-400 py-2 px-5 cursor-pointer hover:shadow-md hover:text-color-5 hover:border-color-5 transition-all duration-150 mt-4 rounded-md shadow-sm'>
            Edit profile
          </button>
          <button className='border  py-2 px-5 cursor-pointer  bg-rose-500 hover:bg-rose-400 text-white transition-all duration-150 mt-4 rounded-md shadow-sm hover:shadow-md'>
            Report an issue
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfoCard;
