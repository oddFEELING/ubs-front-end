/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
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

    AOS.init({
      delay: 0,
      once: true,
      offset: 50,
      duration: 800,
      disable: 'phone',
    });
  });

  return (
    <Container>
      <Head>
        <title>UBS | Login</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

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
