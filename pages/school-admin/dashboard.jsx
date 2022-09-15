import React from 'react';
import Telemetrics from '../../components/admin/cards/Telemetrics.component';
import AdminLayout from '../../layout/admin/AdminLayout';

const Admin = () => {
  return (
    <div>
      <Telemetrics />
    </div>
  );
};

export default Admin;

Admin.layout = AdminLayout;
