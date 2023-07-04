import React from "react";
import { Button } from "./custom.button.styles";

const CustomButton = ({ name, padding, cursor, border, bg_image, color, font_weight, border_radius, bg_color, font_size, transform }) => {
  return (
    <Button
      padding={padding}
      cursor={cursor}
      border={border}
      bg_image={bg_image}
      color={color}
      font_weight={font_weight}
      border_radius={border_radius}
      bg_color={bg_color}
      font_size={font_size}
      transform={transform}
    >
      {name}
    </Button>
  );
};

export default CustomButton;