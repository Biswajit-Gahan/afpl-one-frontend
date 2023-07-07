import React from 'react'
import { AuthLabel, ButtonContainer, Container, CustomIcon, HeaderLabel, LanguageList, LanguageListContainer, LeftContainer, LeftWrapper, Logo, LogoContainer, LogoLeft, LogoRight, NavList, NavListContainer, RightContainer, UserContainer } from './navbar.mobile.styles';
import CustomButton from '../custom.button/CustomButton';
import Colors from '../../constants/colors';
import { MdElectricalServices } from "react-icons/md";
import { HiOutlineCalculator } from "react-icons/hi";
import { GrBlog } from "react-icons/gr";
import { CgMenuGridO } from "react-icons/cg";
import { LuContact } from "react-icons/lu";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import BrandLogo from "../../assets/image/afpl-one-logo-colored.png";

const NavbarMobile = () => {
  return (
    <Container>
      <LeftContainer>
        <LeftWrapper>
          <LogoContainer>
            <LogoLeft>
              <Logo src={BrandLogo} alt="afplone logo" />
            </LogoLeft>
            <LogoRight><IoClose /></LogoRight>
          </LogoContainer>
          <NavListContainer>
            <HeaderLabel><CgMenuGridO />Menu</HeaderLabel>
            <NavList><MdElectricalServices />Services</NavList>
            <NavList><HiOutlineCalculator />Calculator</NavList>
            <NavList><GrBlog />Blog</NavList>
            <NavList><LuContact />Contact</NavList>
          </NavListContainer>
          <LanguageListContainer>
            <HeaderLabel><HiMiniLanguage />Languages</HeaderLabel>
            <LanguageList><CustomIcon>OD</CustomIcon>ଓଡ଼ିଆ</LanguageList>
            <LanguageList><CustomIcon>HI</CustomIcon>हिंदी</LanguageList>
            <LanguageList><CustomIcon>EN</CustomIcon>English</LanguageList>
            <LanguageList><CustomIcon>BA</CustomIcon>বাংলা</LanguageList>
            <LanguageList><CustomIcon>KA</CustomIcon>ಕನ್ನಡ</LanguageList>
          </LanguageListContainer>
          <UserContainer>
            <AuthLabel><BiUserCircle />Login</AuthLabel>
          </UserContainer>

        </LeftWrapper>
        <ButtonContainer>
          <CustomButton
            name="Download App"
            padding="10px 15px"
            cursor="pointer"
            border="none"
            bg_image={`linear-gradient(${Colors.ORANGE_100}, ${Colors.ORANGE_200})`}
            color={`${Colors.WHITE}`}
            font_weight="500"
            border_radius="5px"
          />

        </ButtonContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default NavbarMobile;