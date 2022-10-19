import React from 'react';
import PortalAwardCard from '../../components/portal/cards/PortalAward.card';
import PortalEventsCard from '../../components/portal/cards/PortalEvents.card';
import ProfileInfoCard from '../../components/portal/cards/ProfileInfo.card';
import PortalLayout from '../../layout/Portal.Layout';
import { Player } from '@lottiefiles/react-lottie-player';

const Dashboard = () => {
  return (
    <div className='w-full h-full grid grid-cols-5 gap-5 xl:py-10 px-2 lg:px-10'>
      <section className='col-span-5 xl:col-span-3 border gap-5 grid grid-rows-5'>
        <div className='row-span-3'>
          <ProfileInfoCard />
        </div>

        <div className='row-span-2'>
          <PortalEventsCard />
        </div>
      </section>

      <section className='col-span-5 xl:col-span-2 gap-4 grid grid-rows-6 pb-10'>
        <div className='row-span-2'>
          <PortalAwardCard />
        </div>
        <div className='row-span-6'>
          <div className='border-2 border-dashed border-gray-400 flex flex-col gap-3 py-10 items-center justify-center h-full'>
            <Player
              autoplay
              loop
              src='https://assets7.lottiefiles.com/private_files/lf30_mksyrgzs.json'
              style={{ width: '300px', height: '300px' }}
            />
            <p className='text-gray-700 w-2/3 text-center'>
              Awards earned by student would be displayed here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

Dashboard.layout = PortalLayout;
