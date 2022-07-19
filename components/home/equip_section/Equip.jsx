/** 🌹oddFEELING */

import React from 'react';
import EquipImg from '../../../assets/images/hero/equip-img.webp';
import Shape_1 from '../../../assets/images/common/shape-1.svg';
import Shape_2 from '../../../assets/images/common/shape-2.svg';
import { useTheme } from 'styled-components';
import { elementsStore } from '../../../context/element.context';
import Image from 'next/image';
import {
  Container,
  Content,
  ImgWrapper,
  Shape__1,
  Shape__2,
  TextWrapper,
  Title,
} from './Equip.component';
import Separator from '../../lib/separator/Separator.component';
import Button from '../../lib/button/Button.component';

const Equip = () => {
  const { footerElement } = elementsStore();
  const theme = useTheme();
  return (
    <Container>
      {/* ====== bg shapes */}
      <Shape__1>
        <Image src={Shape_1} alt='' className='shape__1' />
      </Shape__1>

      <Shape__2>
        <Image src={Shape_2} alt='' className='shape__1' />
      </Shape__2>

      {/* ====== image  */}
      <ImgWrapper>
        <Image
          src={EquipImg}
          alt=''
          quality='100'
          layout='fill'
          placeholder='blur'
          className='img'
        />
      </ImgWrapper>

      {/* ====== text  */}
      <TextWrapper>
        <Title data-aos='fade-left'>
          Equip your Kids with On-demand Skills
        </Title>

        <Separator
          height='5px'
          width='8vw'
          top='-3vh'
          left='-2vw;'
          delay='500'
        />

        <Content
          data-aos='fade-left'
          data-aos-delay='200'
          className='text-gray-700'
        >
          <p>
            With the state-of-the-art facilities and modern teaching methods, we
            make sure your child gets the best education. We specialise in
            on-demand learning—kids learn what they need when they need it so
            they don&apos;t miss out on important lessons. Our classes are
            taught by professional teachers with years of experience under their
            belt who ensure a comfortable learning environment at all times. Our
            affordable fees make it easier for you to stick with us.
          </p>
          <p className='block text-gray-500 mt-4'>
            At Blossom School, our mission is to create a high-quality school
            founded on the belief that every child should have access to an
            education that empowers them to succeed in life.
          </p>
        </Content>

        <Button
          text='Enquiries'
          color={theme.colors.lt_1}
          bg={theme.colors.clr_4}
          hv_bg={theme.alpha('clr_1', 0.9)}
          onClick={() => footerElement.scrollIntoView({ behavior: 'smooth' })}
        />
      </TextWrapper>
    </Container>
  );
};

export default Equip;
