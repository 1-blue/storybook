import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StyledProps = Pick<Props, "size">;

const StyledSearchInput = styled.form<StyledProps>`
  height: 40px;

  /** "input"과 "button"을 감싼 컨테이너 */
  & > section {
    display: flex;
    align-items: center;

    width: inherit;
    height: inherit;

    /** input */
    & > input[type="search"] {
      flex: 1;

      width: 0px;
      height: inherit;

      padding: 0.4em 0.6em;

      color: ${({ theme }) => theme.colors.color};
      background-color: ${({ theme }) => theme.colors.bgColor};
      border: 2px solid ${({ theme }) => theme.colors.color};
      border-radius: 0.2em;

      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      font-size: ${({ size, theme }) => theme.fontSize[size]};

      &:focus {
        outline: none;
      }
    }

    /** 버튼 */
    & > button[type="submit"] {
      display: flex;
      align-items: center;

      height: inherit;

      padding: 0.4em;
      padding-left: 0;

      background-color: red;

      background-color: ${({ theme }) => theme.colors.bgColor};
      border: 2px solid ${({ theme }) => theme.colors.color};
      border-radius: 0.2em;

      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  /** 추천 검색어 */
  & > .keyword {
    max-height: 180px;
    overflow: auto;

    padding: 0.6em 0.6em;
    margin-top: 0.1em;

    border-bottom-right-radius: 0.2em;
    border-bottom-left-radius: 0.2em;

    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.bgColor};
    border: 2px solid ${({ theme }) => theme.colors.color};
    border-top: 0;

    /** 스크롤바 */
    ${({ theme }) => theme.util.scroll}

    & > li {
      padding: 0.4em;

      border-radius: 0.2em;

      ${({ theme }) => theme.util.truncate}
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.bgColor};
        background-color: ${({ theme }) => theme.colors.color};
        font-weight: bold;
      }
    }
  }

  /** 사이즈 */
  font-size: ${({ size, theme }) => theme.fontSize[size]};
  ${({ size }) => {
    switch (size) {
      case "xs":
        return css`
          width: 180px;
        `;
      case "sm":
        return css`
          width: 200px;
        `;
      case "md":
        return css`
          width: 220px;

          & > section {
            & > input[type="search"] {
              border-width: 3px;
            }
            & > button[type="submit"] {
              border-width: 3px;
            }
          }

          & > .keyword {
            border-width: 3px;
          }
        `;
      case "lg":
        return css`
          width: 240px;

          & > section {
            & > input[type="search"] {
              border-width: 3px;
            }
            & > button[type="submit"] {
              border-width: 3px;
            }
          }

          & > .keyword {
            border-width: 3px;
          }
        `;
    }
  }}
`;

export default StyledSearchInput;
