import { Fragment, useState } from 'react';
import Image from 'next/image';
import LogoImg from '../../assets/images/logo/logo.jpg';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { navigation } from '../../data/admin/admin.data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='overflow-hidden'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 flex z-40'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex-1 flex flex-col max-w-xs w-full bg-gray-800'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                    <div className='flex-shrink-0 flex items-center px-4'>
                      <img
                        className='h-8 w-auto'
                        src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                        alt='Workflow'
                      />
                    </div>
                    <nav className='mt-5 px-2 space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                    <a href='#' className='flex-shrink-0 group block'>
                      <div className='flex items-center'>
                        <div>
                          <img
                            className='inline-block h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='text-base font-medium text-white'>
                            Tom Cook
                          </p>
                          <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='flex-shrink-0 w-14'>
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
            <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center flex-shrink-0 px-4'>
                <Image alt='ubs logo' src={LogoImg} width={45} height={40} />
              </div>
              <nav className='mt-5 flex-1 px-2 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className='flex-shrink-0 flex bg-gray-700 p-4'>
              <a href='#' className='flex-shrink-0 w-full group block'>
                <div className='flex items-center'>
                  <div>
                    <img
                      className='inline-block h-9 w-9 rounded-full'
                      src='https://images.unsplash.com/photo-1658458053585-e4f431bf4398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-white'>UBS ADMIN</p>
                    <p className='text-xs font-medium text-gray-300 group-hover:text-gray-200'>
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='md:pl-64 flex flex-col flex-1'>
          <div className='sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100'>
            <button
              type='button'
              className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <main className='flex-1'>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  Admin Dashboard
                </h1>
              </div>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>{children}</div>
                <span className='bg-indigo-300 p-3 rounded-md  shadow-lg block'>
                  <h2>
                    <b>Note:</b> Other tabs don't work yet
                  </h2>
                  <h2>
                    <b>Note:</b> All emails must be replied with the UBS
                    official emailing providers
                  </h2>
                </span>

                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
