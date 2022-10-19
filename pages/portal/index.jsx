/** 🌹oddFEELING */

import AOS from 'aos';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/login.component';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Portal = () => {
  const router = useRouter();
  const [details, setDetails] = useState({ username: '', password: '' });
  useEffect(() => {
    AOS.init(
      {
        delay: 0,
        once: true,
        offset: 50,
        duration: 800,
        disable: 'phone',
      },
      []
    );

    // Google tag (gtag.js)

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3JFLYDHTJ');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    details.username === 'student' &&
      details.password === 'student' &&
      router.push('portal/dashboard');

    (details.username !== 'student') | (details.password !== 'student') &&
      alert('Wrong credentials');
  };

  return (
    <Container>
      <NextSeo title='UBS | Login' description='ogin to students Dashboard' />

      <Script
        strategy='lazyOnload'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
      ></Script>

      <h1 style={{ position: 'absolute  ' }}>
        Login page coming soon...Try again later
      </h1>

      <div className='flex min-h-full'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          {/* ====== home button */}
          <Link href='/' passHref>
            <div className='group absolute left-10 top-10 flex items-center justify-center text-indigo-600 hover:text-indigo-500 gap-1 hover:scale-105 hover:font-medium transition-all duration-300 hover:italic hover:-translate-x-2'>
              <ArrowLeftIcon className='w-5 h-4 opacity-0 translate-x-5 duration-300 group-hover:opacity-100 group-hover:translate-x-0' />
              <a className='text-sm md:text-lg '>Back to site</a>
            </div>
          </Link>
          <div className='mx-auto w-full max-w-sm lg:w-96 -mt-36 lg:mt-0'>
            <div>
              <img className='h-12 w-auto' src='/logo.jpg' alt='Your Company' />
              <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 font-primary'>
                Sign in to student Portal
              </h2>
            </div>

            <div className='mt-8'>
              <div>
                <div className='relative mt-6'></div>
              </div>

              <div className='mt-6'>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='username'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Username
                    </label>
                    <div className='mt-1'>
                      <input
                        id='username'
                        name='username'
                        type='text'
                        autoComplete='username'
                        required
                        onChange={(e) =>
                          setDetails({ ...details, username: e.target.value })
                        }
                        placeholder='surname.firstname'
                        className='block w-full appearance-none 
                        font-medium rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm font-secondary focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        onChange={(e) =>
                          setDetails({ ...details, password: e.target.value })
                        }
                        placeholder="new user use '123456'"
                        className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm font-medium font-secondary focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-md'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm'>
                      <Link href='#' passHref>
                        <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Forgot your password?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={handleLogin}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='/about/about-hero.webp'
            alt=''
          />
        </div>
      </div>
    </Container>
  );
};

export default Portal;
