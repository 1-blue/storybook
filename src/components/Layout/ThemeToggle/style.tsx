import styled from "styled-components";

const StyledThemeToggle = styled.aside`
  position: fixed;
  right: 3vw;
  bottom: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.color};

  border-radius: 50%;

  /** 아이콘을 감싸는 버튼 */
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    color: ${({ theme }) => theme.colors.bgColor};

    /** 아이콘 크기 */
    & > svg {
      width: 40px;
      height: 40px;
    }

    /** 반응형 적용 */
    @media ${({ theme }) => theme.mediaSize.md} {
      width: 40px;
      height: 40px;

      & > svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export default StyledThemeToggle;
