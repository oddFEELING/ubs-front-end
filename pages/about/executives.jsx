/** 🌹oddFEELING */

import AOS from 'aos';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ExecutiveData } from '../../data/about.data';
import Hero from '../../components/lib/hero/Hero.component';
import { Container } from '../../styles/about/execPage.component';
import ExecCardComponent from '../../components/executive/ExecCard.component';

const Executives = () => {
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
      <Head>
        <title>UBS | Executives</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <Hero
        title='Meet the Executives'
        desc='The right people in the right Job!'
        btn_1_txt='Enquiries'
        btn_2_txt='Admissions'
      />
      <Container>
        {ExecutiveData &&
          ExecutiveData.map((executive, index) => {
            return (
              <ExecCardComponent
                name={executive.name}
                position={executive.title}
                imageSrc={executive.image}
                left={executive.left}
                key={index}
                firstItem={index === 0 ? true : false}
              />
            );
          })}
      </Container>
    </div>
  );
};

export default Executives;
