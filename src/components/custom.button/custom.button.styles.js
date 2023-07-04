import { styled } from "styled-components";

export const Button = styled.button`
  padding: ${({ padding }) => (padding)};
  cursor: ${({ cursor }) => (cursor)};
  border: ${({ border }) => (border)};
  background-image: ${({ bg_image }) => (bg_image)};
  color: ${({ color }) => (color)};
  font-weight: ${({ font_weight }) => (font_weight)};
  border-radius: ${({ border_radius }) => (border_radius)};
  background-color: ${({ bg_color }) => (bg_color)};
  font-size: ${({ font_size }) => (font_size)};
  transition: all 0.1s ease-in;
  
  &:hover {
    transform: ${({ transform }) => (transform)};
  }
`;