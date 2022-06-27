/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
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
    <Container>
      <MailchimpSubscribe
        url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
        render={renderFunction}
      />
    </Container>
  );
};

export default MailchimpComponent;

const Container = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  padding-left: 50px;
  align-items: flex-start;
  border-left: thin solid ${({ theme }) => theme.colors.lt_1};
`;
