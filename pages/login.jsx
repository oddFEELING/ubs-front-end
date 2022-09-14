/** 🌹oddFEELING */

import AOS from 'aos';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import AppLayout from '../layout/AppLayout';
import { Container } from '../styles/login.component';
import ErrorComponent from '../components/lib/error/Error.component';

const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      alert(
        'We are currently working on this page. Click on the UBS logo to go home'
      );
    }, 1500);

    AOS.init(
      {
        delay: 0,
        once: true,
        offset: 50,
        duration: 800,
        disable: 'phone',
      },
      []
    );

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
      <NextSeo title='UBS | Login' description='ogin to students Dashboard' />

      <Script
        strategy='lazyOnload'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

      <h1 style={{ position: 'absolute  ' }}>
        Login page coming soon...Try again later
      </h1>
      <ErrorComponent />
    </Container>
  );
};

export default Login;

Login.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
