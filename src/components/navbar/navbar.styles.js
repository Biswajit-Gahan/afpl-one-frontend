import { styled } from "styled-components";
import Colors from "../../constants/colors";
import { Sizes } from "../../constants/responsive";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-wrap: wrap;
  background-color: ${Colors.WHITE};
  box-shadow: 0 1px 10px 1px ${Colors.BLACK_SHADOW};
  padding: 10px 0;

  @media (min-width: ${Sizes.tablet}) AND (max-width: ${Sizes.laptop}) {
    gap: 15px;
  }

  @media (max-width: ${Sizes.tablet}) {
    justify-content: space-between;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

export const LeftContainer = styled.div``;

export const LogoContainer = styled.div``;

export const BrandLogo = styled.img`
  width: 230px;

  @media (min-width: ${Sizes.tablet}) AND (max-width: ${Sizes.laptop}) {
    width: 200px;
  }

  @media (max-width: ${Sizes.tablet}) {
    width: 180px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: ${Sizes.tablet}) {
    display: none;
  }
`;

export const NavbarContainer = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
`;

export const NavName = styled.li`
  font-weight: 700;
  color: ${Colors.BLACK_300};
  font-size: 14px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: ${Colors.ORANGE_200};
    position: absolute;
    left: -8px;
    bottom: -5px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    left: 0;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LanguageContainer = styled.div`
  /* display: flex;
  align-items: center;
  gap: 5px; */
`;

export const CurrentLanguage = styled.p`
  color: ${Colors.BLACK_300};
  font-size: 14px;
  font-weight: 700;
`;

export const LanguageListContainer = styled.div`
  /* display: none; */
  /* position: absolute;
  
  bottom: -50px; */
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const DownloadAppContainer = styled.div``;

export const LanguageWrapper = styled.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  opacity: 0;
  bottom: 0;
  transform: translateY(100%);
  padding-top: 15px;
  transition: all 0.2s ease-in-out;

  ${LanguageListContainer}:hover & {
    visibility: visible;
    opacity: 1;
    padding-top: 10px;
  }
`;

export const LanguageList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  list-style: none;
  border-radius: 5px;
  background-color: ${Colors.OFF_WHITE_100};
  box-shadow: 0 1px 10px 1px ${Colors.BLACK_SHADOW};
  overflow: hidden;
`;

export const LanguageName = styled.li`
  font-weight: 700;
  color: ${Colors.BLACK_300};
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  padding: 10px 25px;
  text-align: center;

  &:hover {
    color: ${Colors.WHITE};
    background-color: ${Colors.ORANGE_200};
  }
`;

export const HamburgerContainer = styled.div`
  transition: color 0.2s ease-in-out;
  font-size: 24px;
  display: none;
  align-items: center;

  &:hover {
    color: ${Colors.ORANGE_200};
  }

  @media (max-width: ${Sizes.tablet}) {
    display: flex;
  }
`;