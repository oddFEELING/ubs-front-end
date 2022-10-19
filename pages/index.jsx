/** 🌹oddFEELING */

import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';
import * as S from '../styles/Home.component';
import HomeHero from '../components/landing/home/hero/HomeHero';
import TopSection from '../components/landing/home/top_section/TopSection';
import Equip from '../components/landing/home/equip_section/Equip';
import Facility from '../components/landing/home/facility_section/Facility';
import Offer from '../components/landing/home/offer_section/Offer';
import Testimony from '../components/landing/home/testimony_section/Testimony';
import Register from '../components/landing/home/register/Register.component';
import AppLayout from '../layout/AppLayout';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

//=============================================>  COMPONENT
export default function Home() {
  // ======= effect to initialize libs -->
  useEffect(() => {
    AOS.init({
      delay: 0,
      once: true,
      offset: 50,
      duration: 800,
      disable: 'phone',
    });

    // Google tag (gtag.js)

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3JFLYDHTJ');
  }, []);

  return (
    <S.Container>
      <NextSeo
        title='Unique Blossom School'
        description='Unique Blossom Schools official site. Unique Blossom School is truly an extraordinary place of learning. Our talented staff provides each student with a rigorous standard.'
      />
      <Script
        async
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

      <HomeHero />
      <TopSection />
      <Equip />
      <Facility />
      <Offer />
      <Testimony />
      <Register />
    </S.Container>
  );
}

Home.layout = AppLayout;
