import React from 'react';
import FeedComponent from '../../components/admin/cards/Feed.component';
import Telemetrics from '../../components/admin/cards/Telemetrics.component';
import AdminLayout from '../../layout/admin/AdminLayout';

const Admin = () => {
  return (
    <div>
      <Telemetrics />
      <div className='flex gap-3 flex-col items-start justify-center my-4 w-full border-dashed border-2 border-gray-300 rounded-lg py-10 px-8'>
        <h1 className='font-primary font-normal text-gray-700 text-xl'>
          Activity
        </h1>
        <FeedComponent />
      </div>
    </div>
  );
};

export default Admin;

Admin.layout = AdminLayout;
