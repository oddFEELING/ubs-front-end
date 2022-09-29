/** 🌹oddFEELING */

import React from 'react';
import Image from 'next/image';
import Shape__3 from '../../../../assets/images/common/shape-3.svg';
import Separator from '../../../lib/separator/Separator.component';
import { OfferCardData } from '../../../../data/home.data';
import { BgShape, CardWrapper, Container, Title } from './Offer.component';
import OfferCard from './offer_card/OfferCard.component';

const Offer = () => {
  return (
    <Container>
      {/* ====== bg shapes */}
      <BgShape>
        <Image src={Shape__3} alt='' layout='fill' />
      </BgShape>

      <Title>What We Offer</Title>
      <Separator width='6vw' height='5px' top='-3vh' />

      {/* ====== cards */}
      <CardWrapper>
        {OfferCardData &&
          OfferCardData.map((data, index) => {
            const gridArea = `item_${index + 1}`;
            return (
              <OfferCard
                img={data.image}
                title={data.title}
                content={data.content}
                key={index}
                clr={data.clr}
                sx={{ gridArea: gridArea }}
              />
            );
          })}
      </CardWrapper>
    </Container>
  );
};

export default Offer;
