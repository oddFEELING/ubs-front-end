/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import AOS from 'aos';
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
