import styled from "styled-components";
import Colors from "../../constants/colors";

export const Container = styled.div`
`;

export const MainSectionContainer = styled.main`
  position: relative;
`;

export const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 0;
`;

export const CreditScoreContainer = styled.div`
  width: 55%;
  height: 260px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  box-shadow: 0 5px 15px 5px ${Colors.BLACK_SHADOW};
`;

export const OurServicesContainer = styled.section``;

export const LoanCategoriesContainer = styled.section``;

export const ContactUsContainer = styled.section``;

export const ApplicationProcessContainer = styled.section``;

export const TestimonialsContainer = styled.section``;

export const GetMobileAppContainer = styled.section``;