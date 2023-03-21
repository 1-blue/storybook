import styled from "styled-components";

/** 2023/03/21 - 무한 스크롤링 테스트용 스타일 - by 1-blue */
const InfiniteScrollStyled = styled.ul`
  width: 100%;

  & > * + * {
    margin-top: 2em;
  }

  & > li {
    display: flex;
    flex-flow: column nowrap;

    padding: 2em;

    height: 60vh;

    background-color: ${({ theme }) => theme.colors.color};
    color: ${({ theme }) => theme.colors.bgColor};

    border-radius: 0.4em;

    & > h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export default InfiniteScrollStyled;
