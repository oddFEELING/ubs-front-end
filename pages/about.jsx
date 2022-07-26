/** 🌹oddFEELING */

import AOS from 'aos';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AppLayout from '../layout/AppLayout';
import { NextSeo } from 'next-seo';
import { MainBody } from '../styles/about/about.component';
import Hero from '../components/lib/hero/Hero.component';
import Main from '../components/about/main/Main.component';
import ValueComponent from '../components/about/value/Value.component';
import ExecutiveComponent from '../components/about/executive/Executive.component';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      once: true,
      offset: 50,
      duration: 800,
      disable: 'phone',
    });
  });

  return (
    <div>
      <NextSeo
        title='UBS | About'
        description='Get to know more about us here at Unique Blossom'
      />

      <Hero
        title='Get to know us better'
        desc='At Unique Blossom'
        btn_1_txt='Enqiries'
        btn_2_txt='Admissions'
        img='/about/about-hero.webp'
      />

      <MainBody>
        {/* <Main /> */}
        <Main />
        <ValueComponent />
        <ExecutiveComponent />
      </MainBody>
    </div>
  );
};

export default About;

About.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
