import { styled } from "styled-components";

export const Button = styled.button`
  padding: ${({ padding }) => (padding)};
  cursor: ${({ cursor }) => (cursor)};
  border: ${({ border }) => (border)};
  background-image: ${({ backgroundImage }) => (backgroundImage)};
  color: ${({ color }) => (color)};
  font-weight: ${({ fontWeight }) => (fontWeight)};
  border-radius: ${({ borderRadius }) => (borderRadius)};
  background-color: ${({ backgroundColor }) => (backgroundColor)};
  font-size: ${({ fontSize }) => (fontSize)};
`;