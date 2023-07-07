import { styled } from "styled-components";
import Colors from "../../constants/colors";

export const Container = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.OVERLAY_TRANSPARENT_100};
  backdrop-filter: blur(5px);
`;

export const LeftContainer = styled.div`
  flex: 1.5;
  display: flex;
  background-color: ${Colors.WHITE};
  padding: 10px;
  box-shadow: -2px 0 20px 1px ${Colors.BLACK_SHADOW_200};
  border-radius: 0 20px 20px 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

export const RightContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LogoLeft = styled.div``;

export const Logo = styled.img`
  width: 150px;
`;

export const LogoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

export const NavListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 17px;
  font-weight: 500;
`;

export const LanguageListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const LanguageList = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 17px;
  font-weight: 500;
`;

export const HeaderLabel = styled.p`
  font-size: 17px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserContainer = styled.div``;

export const AuthLabel = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 17px;
  font-weight: 700;
`;

export const ButtonContainer = styled.button`
  border: none;
`;

export const CustomIcon = styled.p`
  font-size: 12px;
  font-weight: bold;
  width: 15px;
`;