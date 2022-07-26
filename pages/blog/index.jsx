/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import AOS from 'aos';
import { NextSeo } from 'next-seo';
import Hero from '../../components/lib/hero/Hero.component';
import AppLayout from '../../layout/AppLayout';
import Latest from '../../components/blog/Latest.component';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  });
  return (
    <div className='flex flex-col gap-3 w-full items-center'>
      <NextSeo
        title='UBS | Blog'
        description='Keep up with Unique blossom. Select from our list of well sort out articles to keep up to date with latest announcments, data, events, news and many more.'
      />
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

Blog.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
