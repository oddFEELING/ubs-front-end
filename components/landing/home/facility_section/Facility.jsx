/** 🌹oddFEELING */
import React from 'react';
import { Icon } from '@iconify/react';
import Separator from '../../../lib/separator/Separator.component';
import { facilityData } from '../../../../data/home.data';
import {
  Container,
  ContentWrapper,
  ListItem,
  ListWrapper,
  Title,
  ListTextWrapper,
  ListTitle,
  ListContent,
} from './Facility.component';

//=============================================>  COMPONENT
const Facility = () => {
  return (
    <Container>
      <ContentWrapper>
        {/* ====== title  */}
        <Title data-aos='fade-right'>Our Facilities</Title>
        <Separator width='7vw' height='5px' left='-2vw' top='-2vh' red />

        {/* ====== list */}
        <ListWrapper>
          {facilityData &&
            facilityData.map((data, index) => {
              return (
                <ListItem
                  key={index}
                  data-aos='fade-left'
                  data-aos-delay={data.delay}
                >
                  <Icon icon={data.icon} color='white' height='60' />
                  <ListTextWrapper>
                    <ListTitle>{data.title}</ListTitle>
                    <ListContent>{data.content}</ListContent>
                  </ListTextWrapper>
                </ListItem>
              );
            })}
        </ListWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Facility;
