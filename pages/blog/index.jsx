/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import AOS from 'aos';
import Hero from '../../components/lib/hero/Hero.component';
import AppLayout from '../../layout/AppLayout';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      disable: 'mobile',
    });
  });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5vh',
      }}
    >
      <Hero
        title='School Blog'
        desc='Stay up to date with NEWS and events'
        btn_1_txt='Enquiries'
        btn_2_txt='Admission'
        img='/blog/blog-img.webp'
      />

      <h1>Blog Coming soon</h1>
    </div>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
