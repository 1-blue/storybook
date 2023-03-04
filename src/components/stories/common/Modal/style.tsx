import styled, { css } from "styled-components";

// type
import type { Props } from ".";
type StyledProps = Pick<Props, "shape" | "size">;

const StyledModal = styled.article<StyledProps>`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  & > section {
    width: 60vw;
    height: 60vh;

    display: flex;
    flex-flow: column nowrap;

    border-radius: 0.3em;
    box-shadow: 2px 2px 10px #666;

    overflow-y: auto;

    /** 스크롤바 디자인 수정 */
    &::-webkit-scrollbar {
      /** 스크롤바의 너비 */
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      /** 스크롤바 길이 */
      height: 25%;
      /** 스크롤바의 색상 */
      background: ${({ theme }) => theme.colors.blue500};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      /** 스크롤바 뒷 배경 색상 */
      background: ${({ theme }) => theme.colors.blue100};
    }

    /** 모달 제목 */
    h4 {
      text-align: center;
    }
    /** 모달 내용 */
    p {
      padding: 0 1.4em;

      font-weight: 500;
      line-height: 1.4;
    }
    /** 모달 버튼 */
    div {
      flex: 1;

      padding: 0 1em;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      & > button {
        padding: 0.3em 0.6em;
        margin-right: 1em;

        border-radius: 0.2em;

        font-weight: bold;

        transition: all 0.3s;

        & + button {
          margin-right: 0;
        }
      }
    }

    & > * {
      margin: 0.8em 0;
      margin-bottom: 0;

      &:last-child {
        margin-bottom: 0.8em;
      }
    }

    /** 색상 */
    ${({ shape }) => {
      switch (shape) {
        case "primary":
          return css`
            background-color: #fff;

            h4 {
              color: #000;
            }
            p {
              color: ${({ theme }) => theme.colors.gray800};
            }
            & > div > button {
              background-color: ${({ theme }) => theme.colors.gray400};
              color: #fff;

              &:hover {
                background-color: ${({ theme }) => theme.colors.gray500};
              }
              &:active {
                background-color: ${({ theme }) => theme.colors.gray600};
              }
            }
          `;
        case "secondary":
          return css`
            background-color: ${({ theme }) => theme.colors.indigo500};

            h4 {
              color: #fff;
            }
            p {
              color: ${({ theme }) => theme.colors.gray100};
            }
            & > div > button {
              background-color: ${({ theme }) => theme.colors.gray100};
              color: ${({ theme }) => theme.colors.gray900};

              &:hover {
                background-color: ${({ theme }) => theme.colors.indigo100};
              }
              &:active {
                background-color: ${({ theme }) => theme.colors.indigo200};
              }
            }

            &::-webkit-scrollbar-thumb {
              background: ${({ theme }) => theme.colors.gray700};
            }
            &::-webkit-scrollbar-track {
              background: ${({ theme }) => theme.colors.gray100};
            }
          `;
        case "tertiary":
          return css`
            background-color: ${({ theme }) => theme.colors.teal500};

            h4 {
              color: #fff;
            }
            p {
              color: ${({ theme }) => theme.colors.gray100};
            }
            & > div > button {
              background-color: ${({ theme }) => theme.colors.gray100};
              color: ${({ theme }) => theme.colors.gray900};

              &:hover {
                background-color: ${({ theme }) => theme.colors.teal100};
              }
              &:active {
                background-color: ${({ theme }) => theme.colors.teal200};
              }
            }

            &::-webkit-scrollbar-thumb {
              background: ${({ theme }) => theme.colors.gray700};
            }
            &::-webkit-scrollbar-track {
              background: ${({ theme }) => theme.colors.gray100};
            }
          `;
      }
    }}

    /** 크기 */
    ${({ size }) => {
      switch (size) {
        case "tiny":
          return css`
            min-width: 200px;
            max-width: 300px;
            min-height: 100px;
            max-height: 200px;

            h4 {
              font-size: 1rem;
              font-weight: 700;
            }
            p {
              font-size: 0.8rem;
            }
            & > div > button {
              font-size: 0.6rem;
            }
          `;
        case "small":
          return css`
            min-width: 300px;
            max-width: 400px;
            min-height: 200px;
            max-height: 300px;

            h4 {
              font-size: 1.2rem;
              font-weight: 700;
            }
            p {
              font-size: 1rem;
            }
            & > div > button {
              font-size: 0.8rem;
            }
          `;
        case "medium":
          return css`
            min-width: 400px;
            max-width: 500px;
            min-height: 300px;
            max-height: 400px;

            h4 {
              font-size: 1.4rem;
              font-weight: 900;
            }
            p {
              font-size: 1.1rem;
            }
            & > div > button {
              font-size: 1rem;
            }
          `;
        case "large":
          return css`
            min-width: 600px;
            max-width: 800px;
            min-height: 400px;
            max-height: 600px;

            h4 {
              font-size: 1.6rem;
              font-weight: 900;
            }
            p {
              font-size: 1.2rem;
            }
            & > div > button {
              font-size: 1.1rem;
            }
          `;
      }
    }}
  }
`;

export default StyledModal;
