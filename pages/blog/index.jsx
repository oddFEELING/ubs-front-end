/** 🌹oddFEELING */

import React from 'react';
import Hero from '../../components/lib/hero/Hero.component';

const Blog = () => {
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
