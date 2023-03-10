import styled from "styled-components";

const StyledTodo = styled.li`
  padding: 0.4em;

  width: 300px;
  height: 200px;

  border-radius: 0.4em;

  color: ${({ theme }) => theme.colors.bgColor};
  background-color: ${({ theme }) => theme.colors.color};

  /** "Todo"의 상단 */
  & > .header {
    padding: 0.6em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * + * {
      margin-left: 1rem;
    }

    & > h4 {
      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;
      word-break: keep-all;
      line-height: 1.4;
    }
  }

  /** "Todo"의 내용 */
  & > p {
    padding: 0 1em;
    margin: 0.4em 0;
    white-space: pre-wrap;
    line-height: 1.2;

    ${({ theme }) => theme.util.lineClamp(5)}
  }
`;

export default StyledTodo;
