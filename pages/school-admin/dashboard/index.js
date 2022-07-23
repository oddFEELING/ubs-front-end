import React from 'react';
import Messages from '../../../components/admin/Message.component';
import AdminLayout from '../../../layout/admin/AdminLayout';

const Admin = () => {
  return (
    <div>
      <Messages />
    </div>
  );
};

export default Admin;

Admin.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
