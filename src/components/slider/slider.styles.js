import styled from "styled-components";
import Colors from "../../constants/colors";
import { sliderTransition } from "../../constants/keyframes";

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  width: 100vw;
  /* height: 100vh; */
  min-height: 800px;
  background: linear-gradient(
    to top,
    ${Colors.OVERLAY_GRADIENT_DARK},
    ${Colors.OVERLAY_GRADIENT_LIGHT}
  ),
  url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1s ease-in-out;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const HeaderText = styled.h1`
  font-size: 40px;
  color: ${Colors.WHITE};
  filter: drop-shadow(0 2px 5px ${Colors.BLACK_SHADOW_200});
  transform: ${({ headerSlide }) => headerSlide === "fromUp" ? "translateY(-50px)" : headerSlide === "fromLeft" ? "translateX(-50px)" : "translateX(50px)"};
  transition: all 0.3s ease-in-out;

  animation: ${sliderTransition} 2s forwards;

`;

export const QuoteText = styled.p`
  font-size: 16px;
  color: ${Colors.OFF_WHITE_100};
  filter: drop - shadow(0 2px 5px ${Colors.BLACK_SHADOW_200});
  transform: ${({ quoteSlide }) => quoteSlide === "fromDown" ? "translateY(50px)" : quoteSlide === "fromLeft" ? "translateX(-50px)" : "translateX(50px)"};
  opacity: 0;
  transition: all 0.3s ease-in-out;

  animation: ${sliderTransition} 2s forwards;
`;