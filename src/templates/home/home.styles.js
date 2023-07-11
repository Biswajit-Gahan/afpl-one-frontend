import styled from "styled-components";
import Colors from "../../constants/colors";
import { rotateCreditMeter } from "../../constants/keyframes";
import { ReactComponent as scoreMeter } from "../../assets/image/score-meter.svg";

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
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const CreditMeterImage = styled(scoreMeter)`
  height: 100%;

  #pointer {
    transform-origin: center;
    transform-box: fill-box;
    animation: ${rotateCreditMeter} infinite 3s alternate;
  }
`;

export const Divider = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${Colors.BLACK_SHADOW};
`;

export const GetCreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const GetCreditTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const GetCreditHeader = styled.h1`
  font-size: 23px;
  color: ${Colors.PURPLE_200};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 30%;
    height: 5px;
    background-color: ${Colors.PURPLE_100};
  }
`;

export const GetCreditText = styled.p`
  font-size: 14px;
  color: ${Colors.BLACK_200};
  letter-spacing: 0.5px;
`;

export const OurServicesContainer = styled.section``;

export const LoanCategoriesContainer = styled.section``;

export const ContactUsContainer = styled.section``;

export const ApplicationProcessContainer = styled.section``;

export const TestimonialsContainer = styled.section``;

export const GetMobileAppContainer = styled.section``;