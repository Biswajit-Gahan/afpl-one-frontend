import React from 'react'
import { ApplicationProcessContainer, ContactUsContainer, Container, CreditMeterImage, CreditScoreContainer, Divider, GetCreditContainer, GetCreditHeader, GetCreditText, GetCreditTextContainer, GetMobileAppContainer, LoanCategoriesContainer, MainSectionContainer, OurServicesContainer, SliderContainer, TestimonialsContainer, WaveContainer } from './home.styles'
import Slider from '../../components/slider/Slider';
import sliderImage1 from "../../assets/image/slider-img-1.jpg";
import waveImage from "../../assets/image/slider-wave.svg";
import Colors from '../../constants/colors';
import CustomButton from '../../components/custom.button/CustomButton';

const Home = () => {
  return (
    <Container>
      <MainSectionContainer>
        <SliderContainer>
          <Slider
            img={sliderImage1}
            alt="personal loan"
            header="The right decision at the right time."
            quote="We are here to help you when you need financial support, then we are help you."
            btnLink="/"
            headerSlide="fromUp"
            quoteSlide="fromLeft"
          />

          <Slider
            img={sliderImage1}
            alt="car loan"
            header="Testing"
            quote="We are here to help you when you need financial support, then we are help you."
            btnLink="/"
            headerSlide="fromUp"
            quoteSlide="fromLeft"
          />
        </SliderContainer>

        <WaveContainer bgImg={waveImage}></WaveContainer>

        <CreditScoreContainer>
          <CreditMeterImage />

          <Divider></Divider>

          <GetCreditContainer>
            <GetCreditTextContainer>
              <GetCreditHeader>Get Credit Score</GetCreditHeader>
              <GetCreditText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</GetCreditText>
            </GetCreditTextContainer>

            <CustomButton
              name="Get My Credit Score"
              padding="10px 30px"
              cursor="pointer"
              border="none"
              bg_image={`linear-gradient(${Colors.ORANGE_100}, ${Colors.ORANGE_200})`}
              color={`${Colors.WHITE}`}
              font_weight="500"
              border_radius="5px"
              transform="scale(0.96)"
            />
          </GetCreditContainer>
        </CreditScoreContainer>
      </MainSectionContainer>

      <OurServicesContainer>
        Our Services
      </OurServicesContainer>

      <LoanCategoriesContainer>
        Loan Category
      </LoanCategoriesContainer>

      <ContactUsContainer>
        Contact Us
      </ContactUsContainer>

      <ApplicationProcessContainer>
        Application Process
      </ApplicationProcessContainer>

      <TestimonialsContainer>
        Testimonials Container
      </TestimonialsContainer>

      <GetMobileAppContainer>
        Get Mobile App
      </GetMobileAppContainer>
    </Container>
  );
};

export default Home;