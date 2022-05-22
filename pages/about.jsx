/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import Hero from '../components/lib/hero/Hero.component';
import Main from '../components/about/main/Main.component';
import ValueComponent from '../components/about/value/Value.component';
import ExecutiveComponent from '../components/about/executive/Executive.component';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 1500,
    });
  });
  return (
    <div>
      <Head>
        <title>UBS | About</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>
      <Hero
        title='Get to know us better'
        desc='At Unique Blossom'
        btn_1_txt='Enqiries'
        btn_2_txt='Admissions'
      />
      <Main />
      <ValueComponent />
      <ExecutiveComponent />
    </div>
  );
};

export default About;
