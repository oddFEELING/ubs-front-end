import Image from 'next/image';
import Link from 'next/link';
import { BlogLatest } from '../../data/blog.data';

export default function Latest() {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 w-full'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Keep up with <b className='text-color-5'>Unique Blossom!</b>
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Select from our list of well sort out articles to keep up to date
            with latest announcments, data, events, news and many more.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {BlogLatest.map((post) => (
            <div
              key={post.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden '
            >
              <div className='flex-shrink-0 relative h-56 w-full'>
                <Image
                  className='h-48 w-full object-cover'
                  src={post.imageUrl}
                  alt=''
                  layout='fill'
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-color-5'>
                    {post.category.name}
                  </p>
                  <Link href='#' passHref>
                    <a href={post.href} className='block mt-2'>
                      <p className='text-xl font-semibold text-dark-100 hover:text-color-5'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-gray-500'>
                        {post.description}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={post.author.imageUrl}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <p className=' text-color-5 '>{post.author.name}</p>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
