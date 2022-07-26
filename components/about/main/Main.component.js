import Image from 'next/image';
import { AboutCopy } from '../../../data/about.data';
import CopyImg from '../../../assets/images/about/about-copy-img.webp';

export default function Main() {
  return (
    <div className='bg-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
        <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
          <div>
            <h2 className='text-base text-color-4 font-semibold tracking-wide uppercase'>
              The history behind
            </h2>
            <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Our Great School
            </h3>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:row-start-1 lg:col-start-2'>
            <svg
              className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
              />
            </svg>
            <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
              <figure>
                <div className='aspect-w-12 lg:aspect-none sm:h-36 md:h-36 lg:h-1/3'>
                  <Image
                    className='rounded-lg shadow-lg object-cover object-center'
                    src={CopyImg}
                    alt='School img'
                    layout='responsive'
                    width={1184}
                    height={1076}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='text-base max-w-prose mx-auto lg:max-w-none'>
              <p className='text-lg text-gray-500'>{AboutCopy.phrase_1}</p>
            </div>
            <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
              <p>{AboutCopy.phrase_2}</p>
              <p>{AboutCopy.phrase_3}</p>
              <p>{AboutCopy.phrase_4}</p>
              <ul role='list'>
                {AboutCopy.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{AboutCopy.phrase_5}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
