/** 🌹oddFEELING */

import React from 'react';
import Script from 'next/script';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

//=============================================>  RENDER
const NotFound = () => {
  const lottieStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
  };
  useEffect(() => {
    // Google tag (gtag.js)

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3JFLYDHTJ');
  }, []);

  return (
    <Container>
      <NextSeo
        title='UBS | 404 Not found'
        description="Page not found or doesn't exist"
      />

      {/* ====== google analytics */}
      <Script
        async
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

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
