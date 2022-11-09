/** 🌹oddFEELING */

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import React from 'react';

const Loader = () => {
  return (
    <div>
      <Player
        className='w-16 h-16 md:w-32 md:h-32'
        loop
        src='https://assets10.lottiefiles.com/packages/lf20_ctopYC.json'
        autoplay
      >
        <Controls visible={false} buttons={['debug']}></Controls>
      </Player>
    </div>
  );
};

export default Loader;
