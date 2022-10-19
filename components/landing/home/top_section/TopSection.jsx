/** 🌹oddFEELING */

import React from 'react';
import Card from './card/Card.component';
import { TopSectionData } from '../../../../data/home.data';

import { CardWrapper, Container } from './topSection.component';

const TopSection = () => {
  return (
    <Container>
      <CardWrapper>
        {TopSectionData &&
          TopSectionData.map((data, index) => {
            const gridArea = `item_${index + 1}`;
            return (
              <Card
                key={index}
                sx={{ gridArea: gridArea }}
                icon={data.icon}
                title={data.title}
                content={data.content}
                bg={data.bg}
                delay={data.delay}
              />
            );
          })}
      </CardWrapper>
    </Container>
  );
};

export default TopSection;
