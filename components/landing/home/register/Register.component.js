/** 🌹oddFEELING */

import Link from 'next/link';

export default function Register() {
  return (
    <div className='w-full m-12'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-dark-100 sm:text-4xl font-primary'>
          Do you believe in the <b className='text-color-5'>Best?</b>.
        </h2>
        <p className='mt-4 text-lg leading-6 font-secondary text-gray-700'>
          Make the right choice for your ward by enrolling them in a school with
          a learning environment that is conducive to success.
        </p>
        <Link href='login' passHref>
          <a className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-light-200 bg-color-1 hover:bg-color-2 sm:w-auto'>
            Admissions
          </a>
        </Link>
      </div>
    </div>
  );
}
