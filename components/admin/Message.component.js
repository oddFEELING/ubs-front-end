/** 🌹oddFEELING */

import { useEffect, useState } from 'react';
import { messages } from '../../data/admin/message.data';
import MessageModal from './MessageModal.component';
import { TrashIcon } from '@heroicons/react/outline';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

export default function Example() {
  const [msgOpen, setMsgOpen] = useState(false);
  const [msgData, setMsgData] = useState({});
  const { data: Messages, isSuccess } = useFetch('get-messages');

  isSuccess && console.log(Messages.data.data);

  // ======= set modal props -->
  const onMsgClick = (currentData) => {
    setMsgOpen((open) => !open);
    setMsgData({
      subject: currentData.title,
      sender: currentData.sender,
      time: currentData.createdAt,
      preview: currentData.content,
      contact: currentData.contact,
    });
  };
  return (
    <div className='bg-white px-4 py-5 border-b relative items-center justify-center border-gray-200 sm:px-6'>
      <MessageModal open={msgOpen} data={msgData} setOpen={setMsgOpen} />
      <div className='-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap'>
        <div className='ml-4 mt-4'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            All messages
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            You can read and choose to reply messages
          </p>
        </div>
        <div className=' ml-4 mt-4 flex-shrink-0'>
          <button
            type='button'
            className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Mark all as read
          </button>
        </div>
      </div>

      <ul role='list' className='p-3 divide-y divide-gray-200'>
        {Messages &&
          Messages.data.data.map((message) => (
            <li
              key={message._id}
              className='relative bg-white py-5 px-4 hover:bg-indigo-100 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-400'
            >
              <div className='flex justify-between space-x-3'>
                <div className='min-w-0 flex-1'>
                  <a href='#' className='block focus:outline-none'>
                    <span
                      className='absolute inset-0 '
                      aria-hidden='true'
                      onClick={() => onMsgClick(message)}
                    />

                    <p className=' font-primary font-medium  text-lg text-gray-900 truncate'>
                      {message.sender}
                    </p>
                    <p className='text-sm text-gray-500 truncate'>
                      {message.title}
                    </p>
                  </a>
                </div>
                <time
                  dateTime={message.createdAt}
                  className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'
                >
                  {message.createdAt}
                </time>

                <TrashIcon
                  className='w-6 h-8 text-red-300 hover:text-red-600 z-10 cursor-pointer'
                  onClick={() => {
                    axios.delete(
                      `https://ubs-server.herokuapp.com/messages/${message._id}`
                    );
                    alert('deleted');
                  }}
                />
              </div>
              <div className='mt-1 '>
                <p className='line-clamp-2 text-sm text-gray-600'>
                  {message.content}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
