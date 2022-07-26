/** 🌹oddFEELING */

import React from 'react';
import CustomFormComponent from './CustomForm.component';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpComponent = () => {
  // ======= render function for mail chimp -->
  const renderFunction = ({ subscribe, status, message }) => (
    <CustomFormComponent
      status={status}
      message={message}
      onValidated={(formData) => subscribe(formData)}
    />
  );

  return (
    <div className='flex items-center justify-center w-full my-2'>
      <MailchimpSubscribe
        url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
        render={renderFunction}
      />
    </div>
  );
};

export default MailchimpComponent;
