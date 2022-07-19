/** 🌹oddFEELING */

import React from 'react';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import styled from 'styled-components';

//=============================================>  RENDER
const NotFound = () => {
  const lottieStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
  };

  return (
    <Container>
      <NextSeo
        title='UBS | 404 Not found'
        description="Page not found or doesn't exist"
      />
      <h1>Page Not Found</h1>
      <lottie-player
        src='https://assets3.lottiefiles.com/packages/lf20_kcsr6fcp.json'
        background='white'
        speed='1'
        style={{ ...lottieStyle }}
        loop
        autoplay
      ></lottie-player>
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
    </Container>
  );
};

export default NotFound;
//=============================================>  COMPONENT
const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  min-height: 500px;
  position: relative;
  align-items: center;
  justify-content: center;
`;
