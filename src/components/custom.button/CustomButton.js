import React from "react";
import { Button } from "./custom.button.styles";

const CustomButton = ({ name, padding, cursor, border, backgroundImage, color, fontWeight, borderRadius, backgroundColor, fontSize }) => {
  return (
    <Button
      padding={padding}
      cursor={cursor}
      border={border}
      backgroundImage={backgroundImage}
      color={color}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {name}
    </Button>
  );
};

export default CustomButton;