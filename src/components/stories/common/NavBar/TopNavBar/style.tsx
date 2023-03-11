import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// type
type StyledProps = {
  isUp: boolean;
};
/** 2023/03/11 - 상단 네비게이션 바 스타일 컴포넌트 - by 1-blue */
const StyledNavBar = styled.nav<StyledProps>`
  position: fixed;
  inset: 0;
  bottom: auto;

  width: 100%;

  display: flex;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.bgColor};

  transform: translateY(${({ isUp }) => (isUp ? "-100%" : "0%")});
  transition: all 0.2s;

  & > li {
    display: inline-flex;
  }
`;

// type
type StyledLinkProps = {
  isCurrentPath: boolean;
};
/** 2023/03/11 - 하단 네비게이션 바의 "Link" 스타일 컴포넌트 - by 1-blue */
const StyledLink = styled(Link)<StyledLinkProps>`
  padding: 1em 1.6em 0.7em;

  /** 현재 경로와 일치한다면 강조 표시 */
  ${({ isCurrentPath }) =>
    isCurrentPath &&
    css`
      color: ${({ theme }) => theme.colors.indigo400};
      border-bottom: 3px solid ${({ theme }) => theme.colors.indigo400};
      font-weight: bold;
    `}

  &:hover {
    font-weight: bold;
  }

  &:first-child {
    padding-right: 1.2em;
  }
  & + a {
    padding-right: 1.2em;
    padding-left: 1.2em;
  }
  &:last-child {
    padding-right: 1.2em;
  }
`;

export default StyledNavBar;

export { StyledLink };
