import React from 'react';
import { Container, ContentsContainer, HeaderText, QuoteText, TextContainer, Wrapper } from './slider.styles';
import CustomButton from '../custom.button/CustomButton';
import Colors from '../../constants/colors';

const Slider = ({ img, alt, header, quote, btnLink, headerSlide, quoteSlide, btnSlice }) => {
  return (
    <Container>
      <Wrapper bgImg={img}>
        <ContentsContainer>
          <TextContainer>
            <HeaderText>{header}</HeaderText>
            <QuoteText>{quote}</QuoteText>
          </TextContainer>
          <CustomButton
            name="Apply Now"
            padding="15px 50px"
            cursor="pointer"
            border="none"
            bg_image={`linear-gradient(${Colors.ORANGE_100}, ${Colors.ORANGE_200})`}
            color={`${Colors.WHITE}`}
            font_weight="500"
            border_radius="5px"
            transform="scale(0.96)"
            font_size="15px"
          />
        </ContentsContainer>
      </Wrapper>
    </Container>
  );
};

export default Slider;