import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StlyedProps = Pick<Props, "size">;

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
