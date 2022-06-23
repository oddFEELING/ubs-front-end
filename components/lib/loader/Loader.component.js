/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';

//=============================================>  # RENDER
const LoaderComponent = () => {
  const lottieStyle = {
    width: '150px',
    height: '150px',
    position: 'absolute',
  };
  return (
    <COntainer>
      <lottie-player
        src='https://assets6.lottiefiles.com/packages/lf20_a2chheio.json'
        background='white'
        speed='1'
        style={{ ...lottieStyle }}
        loop
        autoplay
      ></lottie-player>
      <h1>Loading...</h1>
    </COntainer>
  );
};

export default LoaderComponent;

//=============================================>  # COMPONENT
const COntainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
