/** 🌹oddFEELING */

import React from 'react';
import Messages from '../../components/admin/message/Message.component';
import AdminLayout from '../../layout/admin/AdminLayout';

const Notifications = () => {
  return (
    <div>
      <Messages />
      <span className='bg-indigo-300 p-3 rounded-md  shadow-lg block'>
        <h2>
          <b>Note:</b> Other tabs don&apos;t work yet
        </h2>
        <h2>
          <b>Note:</b> All emails must be replied with the UBS official emailing
          providers
        </h2>
      </span>
    </div>
  );
};

export default Notifications;

Notifications.layout = AdminLayout;
