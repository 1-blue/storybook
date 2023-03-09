import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StlyedProps = Pick<Props, "size"> & { show: boolean };

const StyledDropdown = styled.section<StlyedProps>`
  position: relative;

  display: inline-block;

  /** 검색창과 추천 검색어의 중복 스타일 */
  & > button[data-type="normal"],
  & > ul {
    font-size: ${({ theme, size }) => theme.fontSize[size || "md"]};
    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.bgColor};
    border: 2px solid ${({ theme }) => theme.colors.color};

    ${({ size }) => {
      switch (size) {
        case "xs":
          return css`
            border-width: 2px;
          `;
        case "sm":
          return css`
            border-width: 2px;
          `;
        case "md":
          return css`
            border-width: 3px;
          `;
        case "lg":
          return css`
            border-width: 3px;
          `;
      }
    }}
  }

  /** 일반 드롭다운인 경우 */
  & > button[data-type="normal"] {
    padding: 0.2em 0.6em;

    display: flex;
    align-items: center;

    border-radius: ${({ show }) => (show ? "0.2em 0.2em 0 0" : "0.2em")};

    &:hover {
      font-weight: bold;
    }
  }

  /** "..."으로 된 드롭 다운인 경우 */
  & > button[data-type="option"] {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    ${({ size }) => {
      switch (size) {
        case "xs":
          return css`
            width: 30px;
            height: 30px;
            border-width: 3px;

            & + ul {
              border-radius: 0.2em;
              border-top: 3px solid ${({ theme }) => theme.colors.color};
            }
          `;
        case "sm":
          return css`
            width: 30px;
            height: 30px;
            border-width: 3px;

            & + ul {
              border-radius: 0.2em;
              border-top: 3px solid ${({ theme }) => theme.colors.color};
            }
          `;
        case "md":
          return css`
            width: 40px;
            height: 40px;
            border-width: 4px;

            & + ul {
              border-radius: 0.2em;
              border-top: 4px solid ${({ theme }) => theme.colors.color};
            }
          `;
        case "lg":
          return css`
            width: 40px;
            height: 40px;
            border-width: 4px;

            & + ul {
              border-radius: 0.2em;
              border-top: 4px solid ${({ theme }) => theme.colors.color};
            }
          `;
      }
    }}

    &:hover {
      background-color: ${({ theme }) => theme.colors.color};

      & svg {
        color: ${({ theme }) => theme.colors.bgColor};
      }
    }
  }

  /** 추천 검색어 */
  & > ul {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);

    min-width: 100%;
    max-height: 150px;

    padding: 0.2em;

    border-top: 0;
    border-radius: 0 0 0.2em 0.2em;

    overflow-y: auto;

    ${({ theme }) => theme.util.scroll}

    & > li {
      width: 100%;

      padding: 0.4em 0.6em;

      color: ${({ theme }) => theme.colors.color};

      white-space: nowrap;
      text-align: left;
      border-radius: 0.2em;

      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.bgColor};
        background-color: ${({ theme }) => theme.colors.color};
      }
    }
  }
`;

export default StyledDropdown;
