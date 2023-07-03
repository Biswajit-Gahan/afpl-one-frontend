import React from "react";
import { BrandLogo, Container, ExtraContainer, CurrentLanguage, LanguageContainer, LanguageListContainer, LeftContainer, LogoContainer, NavName, NavbarContainer, NavbarList, RightContainer, LanguageList, LanguageName, DownloadAppContainer } from "./navbar.styles";
import AfplOneLogoColored from "../../assets/image/afpl-one-logo-colored.png";
import { BsGlobe2 } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
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
          {/* <LanguageContainer>
            <BsGlobe2 />
            <CurrentLanguage>EN</CurrentLanguage>
            <BiChevronDown />
            <LanguageListContainer>
              <LanguageList>
                <LanguageName>Odia</LanguageName>
                <LanguageName>Hindi</LanguageName>
              </LanguageList>
            </LanguageListContainer>
          </LanguageContainer> */}
          <LanguageContainer>
            <LanguageListContainer>
              <BsGlobe2 />
              <CurrentLanguage>EN</CurrentLanguage>
              <BiChevronDown />
              <LanguageList>
                <LanguageName>Odia</LanguageName>
                <LanguageName>Hindi</LanguageName>
              </LanguageList>
            </LanguageListContainer>
          </LanguageContainer>
          <DownloadAppContainer>
            <CustomButton
              name="Download App"
              padding="10px 15px"
              cursor="pointer"
              border="none"
              backgroundImage={`linear-gradient(${Colors.ORANGE_100}, ${Colors.ORANGE_200})`}
              color={`${Colors.WHITE}`}
              fontWeight="500"
              borderRadius="5px"
            />
          </DownloadAppContainer>
        </ExtraContainer>
      </RightContainer>
    </Container>
  );
};

export default Navbar;