/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import * as S from '../styles/Contact.component';
import Hero from '../components/lib/hero/Hero.component';
import ContactCardComponent from '../components/contact/ContactCard.component';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  });
  return (
    <S.Container>
      <Head>
        <title>UBS | Contact</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <Hero
        title='Get in Touch'
        btn_1_txt='Enquiries'
        btn_2_txt='Admissions'
        desc='Choose the most suitable way to reach out to us'
      />
      <ContactCardComponent />
    </S.Container>
  );
};

export default Contact;
