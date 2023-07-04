import React from "react";
import { BrandLogo, Container, ExtraContainer, CurrentLanguage, LanguageContainer, LanguageListContainer, LeftContainer, LogoContainer, NavName, NavbarContainer, NavbarList, RightContainer, LanguageList, LanguageName, DownloadAppContainer, LanguageWrapper, HamburgerContainer } from "./navbar.styles";
import AfplOneLogoColored from "../../assets/image/afpl-one-logo-colored.png";
import { BsGlobe2 } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import CustomButton from "../custom.button/CustomButton";
import Colors from "../../constants/colors";

const Navbar = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <BrandLogo src={AfplOneLogoColored} alt="AFPL One Logo" />
        </LogoContainer>
      </LeftContainer>
      <RightContainer>
        <NavbarContainer>
          <NavbarList>
            <NavName>Products</NavName>
            <NavName>Services</NavName>
            <NavName>Calculator</NavName>
            <NavName>Blog</NavName>
            <NavName>Contact</NavName>
            <NavName>Login</NavName>
          </NavbarList>
        </NavbarContainer>
        <ExtraContainer>
          <LanguageContainer>
            <LanguageListContainer>
              <BsGlobe2 />
              <CurrentLanguage>EN</CurrentLanguage>
              <BiChevronDown />
              <LanguageWrapper>
                <LanguageList>
                  <LanguageName>ଓଡ଼ିଆ</LanguageName>
                  <LanguageName>हिंदी</LanguageName>
                  <LanguageName>English</LanguageName>
                  <LanguageName>తెలుగు</LanguageName>
                </LanguageList>
              </LanguageWrapper>
            </LanguageListContainer>
          </LanguageContainer>
          <DownloadAppContainer>
            <CustomButton
              name="Download App"
              padding="10px 15px"
              cursor="pointer"
              border="none"
              bg_image={`linear-gradient(${Colors.ORANGE_100}, ${Colors.ORANGE_200})`}
              color={`${Colors.WHITE}`}
              font_weight="500"
              border_radius="5px"
              transform="scale(0.96)"
            />
          </DownloadAppContainer>
        </ExtraContainer>
      </RightContainer>
      <HamburgerContainer>
        <CgMenuRight />
      </HamburgerContainer>
    </Container>
  );
};

export default Navbar;