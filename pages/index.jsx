/** 🌹oddFEELING */

import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';
import * as S from '../styles/Home.component';
import HomeHero from '../components/home/hero/HomeHero';
import TopSection from '../components/home/top_section/TopSection';
import Equip from '../components/home/equip_section/Equip';
import Facility from '../components/home/facility_section/Facility';

//=============================================>  COMPONENT
export default function Home() {
  // ======= effect to initialize libs -->
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      delay: 0,
      offset: 0,
      duration: 800,
    });
  });
  return (
    <S.Container>
      <Head>
        <title>UBS | Home</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <HomeHero />
      <TopSection />
      <Equip />
      <Facility />
    </S.Container>
  );
}
