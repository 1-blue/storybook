import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// type
type StyledProps = {
  isUp: boolean;
  isBottom: boolean;
};
/** 2023/03/11 - 하단 네비게이션 바 스타일 컴포넌트 - by 1-blue */
const StyledBottomNavBar = styled.nav<StyledProps>`
  position: fixed;
  inset: 0;
  top: auto;

  width: 100%;

  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.bgColor};

  transform: translateY(${({ isUp }) => (isUp ? "100%" : "0%")});
  transform: translateY(${({ isBottom }) => isBottom && "0%"});
  transition: all 0.2s;
`;

// type
type StyledLinkProps = {
  isCurrentPath: boolean;
};
/** 2023/03/11 - 하단 네비게이션 바의 "Link" 스타일 컴포넌트 - by 1-blue */
const StyledLink = styled(Link)<StyledLinkProps>`
  flex: 1;

  padding: 0.6em 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  text-align: center;

  &:hover {
    font-weight: bold;
  }

  /** 네비게이션 바 텍스트 */
  & > span {
    margin-top: 0.4em;
  }

  /** 현재 경로와 일치할 경우 강조 표시 */
  &,
  & > svg {
    ${({ isCurrentPath }) =>
      isCurrentPath &&
      css`
        font-weight: bold;
        color: ${({ theme }) => theme.colors.indigo400};
      `};
  }

  /** 네비게이션 바 구분선 */
  /* & + a {
      border-left: 2px solid ${({ theme }) => theme.colors.color};
    } */
`;

export default StyledBottomNavBar;

export { StyledLink };
