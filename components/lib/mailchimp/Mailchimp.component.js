/** 🌹oddFEELING */

import React from 'react';
import CustomFormComponent from './CustomForm.component';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpComponent = () => {
  // ======= construct the url -->
  const postUrl = `${process.env.NEEXT_PUBLIC_MAILCHIMP_URL}?u=${process.env.NEEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEEXT_PUBLIC_MAILCHIMP_ID}`;

  // ======= render function for mail chimp -->
  const renderFunction = (subscribe, status, message) => {
    return (
      <CustomFormComponent
        status={status}
        message={message}
        onValidate={(formData) => subscribe(formData)}
      />
    );
  };

  return (
    <div>
      <MailchimpSubscribe url={postUrl} render={renderFunction} />
    </div>
  );
};

export default MailchimpComponent;
