import React from 'react'
import { ApplicationProcessContainer, ContactUsContainer, Container, CreditScoreContainer, GetMobileAppContainer, LoanCategoriesContainer, MainSectionContainer, OurServicesContainer, TestimonialsContainer, WaveContainer } from './home.styles'
import Slider from '../../components/slider/Slider';
import sliderImage1 from "../../assets/image/slider-img-1.jpg";
import waveImage from "../../assets/image/slider-wave.svg";
import scoreMeter from "../../assets/image/score-meter.svg";
import Colors from '../../constants/colors';

const Home = () => {
  return (
    <Container>
      <MainSectionContainer>
        <Slider
          img={sliderImage1}
          alt="personal loan"
          header="The right decision at the right time."
          quote="We are here to help you when you need financial support, then we are help you."
          btnLink="/"
          headerSlide="fromUp"
          quoteSlide="fromDown"
          btnSlice="fromDown"
        />

        <WaveContainer bgImg={waveImage}></WaveContainer>

        <CreditScoreContainer>
          <img src={scoreMeter} style={{ width: "30%", }} />
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