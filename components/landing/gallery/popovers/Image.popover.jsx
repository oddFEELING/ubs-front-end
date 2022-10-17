import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

const ImagePopover = ({ image, state = false, setState }) => {
  return (
    <Transition.Root show={state} as={Fragment}>
      <Transition.Child
        show={state}
        enter='transition-opactity duration-150'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leaveTo='opacity-0'
        className='w-full h-screen fixed top-0 bottom-0 left-0 bg-gray-500/90 z-[200] flex items-center justify-center'
      >
        <p
          className='absolute top-8 right-10 border border-red-500 py-1 px-5 cursor-pointer rounded-md shadow-lg text-lg bg-red-500 font-medium md:right-24 hover:shadow-xl text-gray-50 z-50'
          onClick={() => setState((state) => !state)}
        >
          close
        </p>
        <Transition.Child
          show={state}
          enter='duration-300 transition-all'
          enterFrom='translate-y-24 opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='transition-all duration-150'
          leaveTo='translate-y-24 opacity-0'
          className='w-full max-w-6xl h-full max-h-[700px] bg-white relative py-12 px-5 shadow-xl flex items-center justify-center'
        >
          <p>loading...</p>
          <div>
            <Image
              src={image}
              alt='image'
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              loading='eager'
            />
          </div>
        </Transition.Child>
      </Transition.Child>
    </Transition.Root>
  );
};

export default ImagePopover;
