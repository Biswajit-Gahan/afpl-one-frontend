import React from "react";
import { BrandLogo, Container, LeftContainer, LogoContainer } from "./navbar.styles";
import AfplOneLogoColored from "../../assets/image/afpl-one-logo-colored.png";

const Navbar = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <BrandLogo src={AfplOneLogoColored} alt="AFPL One Logo" />
        </LogoContainer>
      </LeftContainer>
    </Container>
  );
};

export default Navbar;