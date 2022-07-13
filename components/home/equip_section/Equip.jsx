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

        <Content data-aos='fade-left' data-aos-delay='200'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
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
