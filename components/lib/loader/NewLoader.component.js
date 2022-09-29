/** 🌹oddFEELING */

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import React from 'react';

const NewLoader = () => {
  return (
    <div>
      <Player
        className='w-full h-full'
        loop
        src='https://assets8.lottiefiles.com/packages/lf20_a2chheio.json'
        autoplay
      >
        <Controls visible={false} buttons={['debug']}></Controls>
      </Player>
    </div>
  );
};

export default NewLoader;
