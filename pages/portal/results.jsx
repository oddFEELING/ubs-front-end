/** 🌹oddFEELING */

import React from 'react';
import PortalLayout from '../../layout/Portal.Layout';
import { Player } from '@lottiefiles/react-lottie-player';

const Results = () => {
  const lottieStyle = {
    width: '300px',
    height: '300px',
    position: 'relative',
    rignt: '150px',
  };

  return (
    <div className='py-10 px-5 lg:p-10 w-full h-full flex items-center justify-center'>
      <div className='border-2 border-dashed border-gray-500 rounded-lg w-full h-full flex flex-col items-center justify-center text-lg text-gray-600'>
        <Player
          autoplay
          loop
          src='https://assets4.lottiefiles.com/packages/lf20_ukkmrz6p.json'
          style={{ ...lottieStyle }}
        ></Player>
        <>
          <p>Results Are yet to be available </p>
          <p>Come back for updates!!</p>
        </>
      </div>
    </div>
  );
};

export default Results;

Results.layout = PortalLayout;
