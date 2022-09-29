/** 🌹oddFEELING */

import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import StudnetListTable from '../../components/admin/tables/StudentList.table';
import AdminLayout from '../../layout/admin/AdminLayout';

const Student = () => {
  return (
    <div>
      {/* ====== ## ACTIONS */}

      <div className='border-2 border-dashed border-gray-300 flex  flex-col justify-center gap-4 w-full p-5'>
        <h2 className='text-gray-700 font-primary text-xl'>Actions</h2>

        {/* ====== ## ADD A NEW STUDENT */}
        <div className='bg-white shadow sm:rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Add new student
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>
                Please make sure the student has been fully admitted and is
                eligible to be addded into the database.
              </p>
            </div>
            <div className='mt-5'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 font-medium text-green-700 group hover:bg-green-200 focus:outline-none relative focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm transition-all duration-300'
              >
                Add a student
                <PlusIcon className='w-4 h-4 ml-2 relative right-4 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ====== ### STUDENT LIST */}
      <div className='flex my-4 py-5 px-3 rounded-lg w-full border-dashed border-2 border-gray-300'>
        <StudnetListTable />
      </div>
    </div>
  );
};

export default Student;

Student.layout = AdminLayout;
