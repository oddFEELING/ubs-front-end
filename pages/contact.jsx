/** 🌹oddFEELING */

import AOS from 'aos';
import { NextSeo } from 'next-seo';
import AppLayout from '../layout/AppLayout';
import React, { useEffect } from 'react';
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
      <NextSeo
        title='UBS | Contact'
        description='Get in touch with us through any of our social media links or walk into the school from 7:30am - 4:00pm weekdays.'
      />

      <Hero
        title='Get in Touch'
        btn_1_txt='Enquiries'
        btn_2_txt='Admissions'
        img='/contact/contact-hero.webp'
        desc='Choose the most suitable way to reach out to us'
      />
      <ContactCardComponent />
    </S.Container>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
