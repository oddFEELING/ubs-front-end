/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import AOS from 'aos';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import Hero from '../../components/lib/hero/Hero.component';
import AppLayout from '../../layout/AppLayout';
import Latest from '../../components/landing/blog/Latest.component';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
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
    <div className='flex flex-col gap-3 w-full items-center'>
      <NextSeo
        title='UBS | Blog'
        description='Keep up with Unique blossom. Select from our list of well sort out articles to keep up to date with latest announcments, data, events, news and many more.'
      />

      {/* ====== google analytics */}
      <Script
        async
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

      <Hero
        title='School Blog'
        desc='Stay up to date with NEWS and events'
        btn_1_txt='Enquiries'
        btn_2_txt='Admission'
        img='/blog/blog-img.webp'
      />

      <Latest />
    </div>
  );
};

export default Blog;

Blog.layout = AppLayout;
