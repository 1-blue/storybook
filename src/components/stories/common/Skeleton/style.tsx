import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StlyedProps = Pick<Props, "size">;

/** 2023/03/10 - 검색 키워드의 스켈레톤 UI - by 1-blue */
export const StyledKeywordSkeleton = styled.ul<StlyedProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgColor};
  border-bottom-right-radius: 0.4em;
  border-bottom-left-radius: 0.4em;

  & > li {
    flex: 1;

    min-width: 160px;

    width: 100%;
    height: 100%;

    padding: 0.6em;

    display: flex;
    align-items: center;

    & + li {
      padding-top: 0;
    }

    & > div {
      border-radius: 0.4em;

      background-color: ${({ theme }) => theme.colors.gray};

      -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
      animation: skeleton-gradient 1.8s infinite ease-in-out;
    }

    & > div:first-child {
      margin-right: 0.4em;
    }
    & > div:last-child {
      flex: 1;
    }
  }

  ${({ size }) => {
    switch (size) {
      case "xs":
        return css`
          & > li > div {
            height: 20px;

            &:first-child {
              width: 20px;
            }
          }
        `;
      case "sm":
        return css`
          & > li > div {
            height: 23px;

            &:first-child {
              width: 23px;
            }
          }
        `;
      case "md":
        return css`
          & > li > div {
            height: 26px;

            &:first-child {
              width: 26px;
            }
          }
        `;
      case "lg":
        return css`
          & > li > div {
            height: 30px;

            &:first-child {
              width: 30px;
            }
          }
        `;
    }
  }}
`;

/** 2023/03/10 - "Todo"의 스켈레톤 UI - by 1-blue */
export const StyledTodoSkeleton = styled.li`
  padding: 0.4em;

  width: 300px;
  height: 200px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  border-radius: 0.4em;

  background-color: ${({ theme }) => theme.colors.color};

  /** "Todo"의 상단 */
  & > .header {
    width: 100%;
    height: 23%;

    padding: 0.4em;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 0.2em;

    & > div {
      width: 70%;
      height: 100%;

      -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
      animation: skeleton-gradient 1.8s infinite ease-in-out;

      background-color: ${({ theme }) => theme.colors.gray400};
      border-radius: 4px;

      &:first-child,
      &:last-child {
        width: 10%;
      }
    }
  }

  /** "Todo"의 하단 */
  & > .body {
    width: 100%;
    height: 73%;

    padding: 0.4em;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.2em;

    & > div {
      width: 100%;
      height: 100%;

      -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
      animation: skeleton-gradient 1.8s infinite ease-in-out;

      background-color: ${({ theme }) => theme.colors.gray400};
      border-radius: 4px;
    }

    & > div + div {
      margin-top: 0.4em;
    }
  }
`;
