/** 🌹oddFEELING */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useScroll from '../../../hooks/useScroll';
import { Nav_Links } from '../../../data/nav.data';
import logoImg from '../../../assets/images/logo/logo.jpg';
import { Bars3Icon, BackwardIcon } from '@heroicons/react/24/outline';

//=============================================>  COMPONENT
const Nav = () => {
  // ======= mobile menu state -->
  const [isOpen, setIsOpen] = useState(false);
  // ======= check page scroll-->
  const scrolled = useScroll();

  const router = useRouter();

  // ======= mobile menu handler -->
  const MenuHandler = () => setIsOpen((state) => !state);

  return (
    <div
      className={`nav_container ${
        scrolled ? `nav__container-scrolled` : `nav__container-no-scroll`
      }`}
    >
      {/* ====== logo */}
      <div className='flex cursor-pointer relative h-[50px] max-h-1/2 w-[60px] items-center justify-center'>
        <Link href='/' passHref>
          <a>
            <Image
              src={logoImg}
              alt=''
              layout='fill'
              priority
              placeholder='blur'
              quality={100}
            />
          </a>
        </Link>
      </div>

      {/* ====== desktop menu div */}
      <div
        className='hidden gap-[3%] w-[70%] py-1 items-center n justify-end transition-all duration-300 md:flex'
        data-aos='fade-down'
      >
        {Nav_Links.map((data, index) => {
          return (
            <Link href={data.link} key={index} passHref>
              <a
                className={`font-primary transition-all duration-300 relative text-md  nav__link-after ${
                  router.pathname.indexOf(data.select) !== -1
                    ? scrolled
                      ? `text-indigo-500 font-bold after:bg-indigo-500 `
                      : `text-gray-50 font-bold after:bg-gray-50 `
                    : scrolled
                    ? `text-gray-600 font-light after:bg-gray-600 `
                    : `text-gray-300 font-light after:bg-gray-300 `
                }`}
              >
                {data.text}
              </a>
            </Link>
          );
        })}
      </div>

      {/* ====== Mobile nav menu  */}

      {/* ====== Mobile menu Btn  */}
      <div
        className={`flex items-center justify-center relative w-12  h-10 border rounded-lg shadow-lg transiton-all duration-300 hover:shadow-2xl md:hidden cursor-pointer ${
          scrolled && `border-gray-600`
        }`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <Bars3Icon
          className={`w-2/3 h-2/3  ${
            scrolled ? `text-gray-700` : `text-gray-100`
          }`}
        />
      </div>

      <div
        className={`absolute h-screen justify-center gap-[5%] flex flex-col items-center bg-gray-800 z-50 md:hidden top-0 right-0 transition-all duration-300 ${
          isOpen
            ? `pointer-events-auto w-full opacity-1`
            : `pointer-events-none w-0 opacity-0`
        }`}
      >
        {/* ====== title bar  */}
        <h2 className='top-[5%] left-[5%]  absolute font-primary text-gray-50 font-black text-3xl'>
          U B S
        </h2>
        <BackwardIcon
          icon='akar-icons:arrow-right-thick'
          height='35'
          className='absolute top-[5%] right-[8%] w-14 h-12 text-orange-400 cursor-pointer rotate-180 hover:translate-x-1 transition-all duration-300'
          onClick={MenuHandler}
        />

        {/* ====== nav links  */}
        {Nav_Links.map((data, index) => {
          return (
            <Link href={data.link} key={index} passHref>
              <a
                className={`text-4xl font-secondary font-light  text-md hover:text-indigo-300 transition-all ${
                  router.pathname.indexOf(data.select) !== -1
                    ? ` text-indigo-500 font-bold`
                    : ` text-gray-300`
                }`}
                onClick={MenuHandler}
              >
                {data.text}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
