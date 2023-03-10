import styled from "styled-components";

const StyledTodoList = styled.ul`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);

  @media ${({ theme }) => theme.mediaSize["2xl"]} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.mediaSize.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default StyledTodoList;
