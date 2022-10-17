import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/outline';

const PortalAwardCard = () => {
  return (
    <div className='w-full h-full py-5 flex bg-color-5 max-h-[250px] shadow-md rounded-md px-8 items-center justify-center gap-8'>
      <div className='flex items-center justify-center border-2 rounded-full p-3 xl:p-8 border-gray-200 shadow-lg'>
        <TrophyIcon className='w-10 h-10 xl:w-16 xl:h-16 text-gray-200' />
      </div>
      <sppan>
        <p className='text-gray-100 font-bold text-3xl xl:text-4xl'>
          Achievements
        </p>
        <p className='text-gray-200/90 font-secondary text-sm xl:text-lg'>
          Awards and gifts earned over time
        </p>
      </sppan>
    </div>
  );
};

export default PortalAwardCard;
