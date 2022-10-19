/** 🌹oddFEELING */

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import {
  XMarkIcon,
  HomeIcon,
  DocumentTextIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  Bars3BottomLeftIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';

const navOptions = [
  {
    icon: HomeIcon,
    text: 'dashboard',
    lottie: 'https://assets5.lottiefiles.com/packages/lf20_wtpprtnc.json',
  },
  {
    icon: DocumentTextIcon,
    text: 'results',
    lottie: 'https://assets6.lottiefiles.com/packages/lf20_d97uxr.json',
  },
  {
    icon: NewspaperIcon,
    text: 'notifications',
    lottie: 'https://assets8.lottiefiles.com/private_files/lf30_egxsy0o3.json',
  },
  {
    icon: Cog6ToothIcon,
    text: 'settings',
    lottie: 'https://assets4.lottiefiles.com/packages/lf20_6zv260y7.json',
  },
];

const PortalLayout = ({ children }) => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [navLottie, setNavLottie] = useState('');

  useEffect(() => {
    navOptions.forEach((item) => {
      if (router.pathname.indexOf(item.text) !== -1)
        return setNavLottie(item.lottie);
    });
  });

  return (
    <div className='w-full h-screen grid grid-cols-6'>
      {/* ======= mobile sidebar */}
      <Transition.Root
        as='aside'
        show={showSidebar}
        enter='transition ease-in-out duration-300 transform'
        enterFrom='opacity-0'
        leave='transition ease-in-out duration-300 transform'
        leaveTo='opacity-0 pointer-events-none'
        enterTo='opacity-100'
        className='flex fixed w-full h-full shadow-md bg-gray-500/80 gap-4 lg:hidden z-30'
      >
        <Transition.Child
          as='div'
          enter='transition ease-in-out duration-300 '
          enterFrom='-translate-x-full'
          leave='transition ease-in-out duration-300 '
          leaveTo='-translate-x-full pointer-events-none'
          enterTo='opacity-100 translate-x-0'
          className='w-3/4 h-full bg-white relative max-w-md flex flex-col items-center justify-start'
        >
          <span className='w-full h-32 bg-color-5 flex flex-col items-center justify-center'>
            <p className='text-3xl text-gray-50 font-black tracking-widest'>
              UBS
            </p>
            <p className='text-gray-200 font-bold font-secondary tracing-widest text-lg'>
              STUDENT PORTAL
            </p>
          </span>
          <nav className='h-full w-full bg-gray-800 flex pt-10 flex-col gap-3 items-start pl-6'>
            {navOptions.map((item, index) => (
              <Link href={item.text} key={index} passHref>
                <a
                  className={`text-gray-200 flex items-center justify-start gap-3 w-full pl-8 py-2 font-medium tracking-wide text-sm transition-all duration-300 rounded-l-lg ${
                    router.pathname.indexOf(`/portal/${item.text}`) !== -1 &&
                    'bg-color-5 gap-6/70 text-white font-bold shadow-lg'
                  }`}
                  onClick={() => setShowSidebar(false)}
                >
                  <item.icon className='w-6 h-6' />
                  {`${item.text.slice(0, 1).toUpperCase()}${item.text.slice(
                    1
                  )}`}
                </a>
              </Link>
            ))}
            <Link href='/portal' passHref>
              <a
                className={`text-rose-500 flex items-center justify-start gap-3 w-full pl-8 py-2 font-medium tracking-wide text-sm transition-all duration-300 rounded-l-lg`}
                onClick={() => setShowSidebar(false)}
              >
                <ArrowLeftOnRectangleIcon className='w-6 h-6' />
                Logout
              </a>
            </Link>
            <Player
              autoplay
              loop
              src={navLottie}
              style={{
                width: '100%',
                height: '150px',
                position: 'absolute',
                bottom: 25,
                right: 0,
              }}
            />
          </nav>
        </Transition.Child>

        <button
          className='rounded-full h-8 w-8 border-2 flex items-center justify-center shadow-md mt-2'
          onClick={() => setShowSidebar((state) => !state)}
        >
          <XMarkIcon className='text-gray-100 w-6 h-6' />
        </button>
      </Transition.Root>

      {/* ======= desktop sidebar */}
      <aside className='hidden lg:flex lg:flex-col lg:col-span-1 h-full min-w-max relative'>
        <span className='w-full h-48 bg-color-5 flex flex-col items-center justify-center'>
          <p className='text-4xl text-gray-50 font-black tracking-widest'>
            UBS
          </p>
          <p className='text-gray-200 font-bold font-secondary tracing-widest text-lg'>
            STUDENT PORTAL
          </p>
        </span>
        <nav className='h-full w-full bg-gray-800 flex pt-10 flex-col gap-3 items-start pl-4'>
          {navOptions.map((item, index) => (
            <Link href={item.text} key={index} passHref>
              <a
                className={`text-gray-200 flex items-center justify-start gap-2 w-full pl-5 py-2 font-medium tracking-wide transition-all duration-300 rounded-l-lg text-sm  ${
                  router.pathname.indexOf(`/portal/${item.text}`) !== -1 &&
                  'bg-color-5/70 gap-6 text-white font-bold shadow-lg'
                }`}
                onClick={() => setShowSidebar(false)}
              >
                <item.icon className='w-6 h-6' />
                {`${item.text.slice(0, 1).toUpperCase()}${item.text.slice(1)}`}
              </a>
            </Link>
          ))}
          <Link href='/portal' passHref>
            <a
              className={`text-rose-500 flex items-center justify-start gap-2 w-full pl-5 py-2 font-medium tracking-wide transition-all duration-300 rounded-l-lg text-sm`}
              onClick={() => setShowSidebar(false)}
            >
              <ArrowLeftOnRectangleIcon className='w-6 h-6' />
              Logout
            </a>
          </Link>
        </nav>
        <Player
          autoplay
          loop
          src={navLottie}
          style={{
            width: '100%',
            height: '250px',
            position: 'absolute',
            bottom: 25,
            right: 0,
          }}
        />
      </aside>

      {/* ======= main content */}
      <main className=' w-full flex flex-col col-span-6 lg:col-span-5 bg-gray-100 overflow-scroll'>
        {/* ======= tob bar */}
        <div className='w-full h-16 py-2 border-b border-gray-300 shadow-lg flex items-center'>
          <span
            className='flex items-center justify-center w-20  h-full border-r border-gray-300shadow-md rounded-md lg:hidden'
            onClick={() => setShowSidebar((state) => !state)}
          >
            <Bars3BottomLeftIcon className='w-7 h-7 font-medium text-gray-600' />
          </span>
          {/* ======= search bar */}
          <div className='flex w-full h-full items-center relative px-3 py-2 font-secondary gap-2 md:pl-10'>
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500' />
            <input
              type='text'
              placeholder='Search for anything...'
              className='px-2 h-full outline-none border-none w-full bg-transparent'
            />
          </div>

          {/* ======= profile bubble */}
          <div className='w-24 h-full flex items-center justify-center border-l border-gray-300'>
            <span className='relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shadow-md'>
              <Image
                src='https://images.unsplash.com/photo-1665873806985-9b487caa672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='profile-image'
                layout='fill'
                objectPosition='center'
                objectFit='cover'
              />
            </span>
          </div>
        </div>

        {/* ======= children */}
        {children}
      </main>
    </div>
  );
};

export default PortalLayout;
