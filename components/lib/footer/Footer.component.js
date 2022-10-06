import { useRef, useEffect } from 'react';
import Mailchimp from '../mailchimp/Mailchimp.component';
import { elementsStore } from '../../../global/element.global';
import { navigation } from '../../../data/footer.data';

export default function Footer() {
  const footRef = useRef();
  const { setfooterElement } = elementsStore();

  useEffect(() => {
    setfooterElement(footRef.current);
  }, [footRef, setfooterElement]);
  return (
    <footer
      className='bg-color-4 w-full'
      aria-labelledby='footer-heading'
      ref={footRef}
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Admission
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.admissions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Support
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  School
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.school.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Events
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.events.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-8 xl:mt-0'>
            <h3 className='text-lg font-semibold text-white tracking-wider uppercase'>
              Subscribe to our newsletter
            </h3>
            <p className='mt-4 text-base text-gray-300'>
              Be the first to know!
            </p>

            {/* ====== ## MAILCHIMP FORM  */}
            <Mailchimp />
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-400 hover:text-gray-300'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2022 Unique Blossom, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className='w-full h-8 bg-dark-100'> </div>
    </footer>
  );
}
