import styled, { css } from "styled-components";

// type
import type { Props } from ".";

interface StyledProps extends Required<Omit<Props, "photos">> {
  count: number;
}
/** 2023/03/18 - 앨범 - by 1-blue */
const StyledAlbum = styled.article<StyledProps>`
  position: relative;

  display: flex;

  overflow: hidden;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  border: 7px solid rgba(255, 255, 255, 0.6);

  /** 이미지 크기 + 이미지 개수 +  border */
  ${({ direction, width, height, interval, count }) => {
    switch (direction) {
      case "vertical":
        return css`
          width: ${width + count * interval + 14}px;
          height: ${height}px;
          flex-direction: row;
        `;
      case "horizontal":
        return css`
          width: ${width}px;
          height: ${height + count * interval + 14}px;
          flex-direction: column;
        `;
    }
  }}
`;

interface StyledFigureProps extends Required<Omit<Props, "photos">> {
  index: number;
  targetIndex: number;
}
/** 2023/03/18 - 앨범 내부의 한장의 사진 - by 1-blue */
const StyledFigure = styled.figure<StyledFigureProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  transition: all 0.7s;

  /** 현재 포커싱하는 이미지와 이전/이후 이미지들의 위치 결정 */
  ${({ direction, width, height, interval, index, targetIndex }) => {
    switch (direction) {
      case "vertical":
        const POSX = width - interval;
        return css`
          transform: translateX(
            ${index <= targetIndex ? index * -POSX : index * -POSX + POSX}px
          );
        `;
      case "horizontal":
        const POSY = height - interval;
        return css`
          transform: translateY(
            ${index <= targetIndex ? index * -POSY : index * -POSY + POSY}px
          );
        `;
    }
  }}

  /** 앨범 내부의 사진 */
  & > img {
    width: inherit;
    height: inherit;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.6);
  }

  /** 사진 이름 */
  & > figcaption {
    position: absolute;
    top: 0;

    width: inherit;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    span {
      width: 60%;
      padding: 1em 0;

      text-align: center;

      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 0.4em;

      opacity: 0;
      transform: translateY(-100%);
      transition: all 0.4s ease-in-out;

      ${({ index, targetIndex }) =>
        index === targetIndex &&
        css`
          opacity: 1;
          transform: translateY(0);
          transition: all 0.4s ease-in-out 0.7s;
        `}
    }
  }
`;

export default StyledAlbum;

export { StyledFigure };
