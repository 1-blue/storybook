import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StyledProps = Pick<Props, "size" | "hover">;

/** 2023/03/03 - 아이콘 스타일 컴포넌트 - by 1-blue */
const StyledIcon = styled.svg<StyledProps>`
  /* pointer-events: none; */

  ${({ size }) => {
    switch (size) {
      case "tiny":
        return css`
          width: 1em;
          height: 1em;
        `;
      case "small":
        return css`
          width: 1.4em;
          height: 1.4em;
        `;
      case "medium":
        return css`
          width: 1.8em;
          height: 1.8em;
        `;
      case "large":
        return css`
          width: 2.4em;
          height: 2.4em;
        `;
    }
  }}

  &:hover {
    color: ${({ hover }) => hover};
  }
  button:hover & {
    color: ${({ hover }) => hover};
  }
`;

/** 2023/03/03 - 모든 아이콘 렌더링 컨테이터 컴포넌트 - by 1-blue */
const StyledAllIconContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;

  & li + li {
    margin-left: 1em;
  }
`;

export default StyledIcon;

export { StyledAllIconContainer };
