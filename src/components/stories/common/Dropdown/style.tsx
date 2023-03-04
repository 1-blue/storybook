import styled from "styled-components";

const StyledDropdown = styled.section<{ show: boolean }>`
  position: relative;

  display: inline-block;

  & > button[data-type="normal"] {
    padding: 0.2em 0.6em;

    display: flex;
    align-items: center;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray600};
    background-color: #fff;

    border: 2px solid
      ${({ show, theme }) =>
        show ? theme.colors.blue500 : theme.colors.blue300};
    border-radius: 0.2em;

    &:hover {
      font-weight: bold;
      border: 2px solid
        ${({ show, theme }) =>
          show ? theme.colors.blue600 : theme.colors.blue400};
      color: ${({ show, theme }) =>
        show ? theme.colors.blue600 : theme.colors.blue400};
    }
  }

  & > button[data-type="option"] {
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue200};
    }
  }

  & > ul {
    position: absolute;
    top: 30px;
    left: 0px;

    min-width: 100%;
    max-height: 150px;

    padding: 0.2em;
    margin-top: 0.2em;

    background: #fff;
    box-shadow: 2px 2px 12px #bbb;

    border-radius: 0.2em;

    overflow-y: auto;

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

    & > li {
      width: 100%;

      padding: 0.4em 0.6em;

      color: ${({ theme }) => theme.colors.gray600};

      white-space: nowrap;
      text-align: left;

      border-radius: 0.2em;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.blue300};
        color: #fff;
      }
    }
  }
`;

export default StyledDropdown;
