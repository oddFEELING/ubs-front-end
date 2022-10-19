/** 🌹oddFEELING */

import React from 'react';
import Separator from '../../../lib/separator/Separator.component.js';
import TestimonyCard from './cards/Card.component.js';
import { Container, TestimonySection, Title } from './Testimony.component';

const Testimony = () => {
  return (
    <Container>
      <Title>What do Parents think?</Title>
      <Separator width='100px' height='5px' red top='-4vh' />

      <TestimonySection>
        <TestimonyCard
          area='card_1'
          aos='fade-right'
          title='Best out there'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
        />
        <TestimonyCard
          delay='300'
          area='card_2'
          aos='fade-right'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
          title='Goal driven eco-system'
        />
        <TestimonyCard
          delay='500'
          area='card_3'
          aos='fade-right'
          title='Quality Education'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
        />
      </TestimonySection>
    </Container>
  );
};

export default Testimony;
