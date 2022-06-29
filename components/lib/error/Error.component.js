/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';

//=============================================>  # RENDER
const ErrorComponent = () => {
  const lottieStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <Container>
      <lottie-player
        src='https://assets3.lottiefiles.com/packages/lf20_ge2cws3x.json'
        background='white'
        speed='.6'
        style={{ ...lottieStyle }}
        autoplay
      ></lottie-player>
    </Container>
  );
};

export default ErrorComponent;

//=============================================>  # COMPONENT
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: center;
`;
