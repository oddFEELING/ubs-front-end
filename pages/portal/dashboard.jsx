import React from 'react';
import PortalAwardCard from '../../components/portal/cards/PortalAward.card';
import ProfileInfoCard from '../../components/portal/cards/ProfileInfo.card';
import PortalLayout from '../../layout/Portal.Layout';

const Dashboard = () => {
  return (
    <div className='w-full h-full grid grid-cols-5 gap-5 xl:py-10 px-2 lg:px-10'>
      <section className='col-span-5 xl:col-span-3 row-span border grid grid-rows-5'>
        <div className='row-span-3'>
          <ProfileInfoCard />
        </div>

        <div className='row-span-2'></div>
      </section>

      <section className='col-span-5 xl:col-span-2 border border-gray-400 grid grid-rows-6 '>
        <div className='row-span-2'>
          <PortalAwardCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

Dashboard.layout = PortalLayout;
