import styled from "styled-components";

/** 2023/03/20 - 테스트용으로 적용할 스타일 - by 1-blue */
const Scroll = styled.article`
  ul {
    * + * {
      margin-top: 200px;
    }
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;

    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.color};
  }
`;

export default Scroll;
