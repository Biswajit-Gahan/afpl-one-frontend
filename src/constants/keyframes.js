import { keyframes } from "styled-components";

export const rotateCreditMeter = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  14% {
    transform: rotateZ(-100deg);
  }

  28% {
    transform: rotateZ(-80deg);
  }

  42% {
    transform: rotateZ(-90deg);
  }

  56% {
    transform: rotateZ(20deg);
  }

  70% {
    transform: rotateZ(-10deg);
  }

  84% {
    transform: rotateZ(60deg);
  }

  100% {
    transform: rotateZ(30deg);
  }
`;

export const sliderTransition = keyframes`
  0% {
    opacity: 0;
  }

 100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;