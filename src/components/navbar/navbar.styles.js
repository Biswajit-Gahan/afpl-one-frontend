import { styled } from "styled-components";
import Colors from "../../constants/colors";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const LeftContainer = styled.div``;

export const LogoContainer = styled.div``;

export const BrandLogo = styled.img`
  width: 230px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
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

export const LanguageList = styled.ul`
  display: none;
  gap: 10px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  transform: translateY(115%);
  list-style: none;
  border-radius: 5px;
  padding: 15px;
  background-color: ${Colors.WHITE};
  box-shadow: 0 2px 5px 1px ${Colors.BLACK_SHADOW};
`;

export const LanguageListContainer = styled.div`
  /* display: none; */
  /* position: absolute;
  background-color: ${Colors.ORANGE_200};
  bottom: -50px; */
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover ${LanguageList} {
    display: flex;
  }
`;

export const DownloadAppContainer = styled.div``;



export const LanguageName = styled.li`
  font-weight: 700;
  color: ${Colors.BLACK_300};
  font-size: 14px;

  &:hover {
    color: ${Colors.ORANGE_200};
  }
`;