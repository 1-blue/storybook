import { useCallback, useState } from "react";

// style
import StyledAlbum, { StyledFigure } from "./style";

// type
import type { MouseEventHandler } from "react";
import type { Direction } from "@src/@types";
interface Photo {
  url: string;
  caption: string;
}
export interface Props {
  photos: Photo[];
  direction?: Direction;
  width?: number;
  height?: number;
  interval?: number;
}

/** 2023/03/18 - 앨범 컴포넌트 - by 1-blue */
const Album: React.FC<Props> = ({
  photos,
  direction = "vertical",
  width = 320,
  height = 200,
  interval = 40,
}) => {
  /** 2023/03/18 - 보여줄 메인 이미지 - by 1-blue */
  const [targetIndex, setTargetIndex] = useState(0);

  /** 2023/03/18 - 메인 이미지 변경 - by 1-blue */
  const onChangePhoto: MouseEventHandler<HTMLElement> = useCallback((e) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!e.target.dataset.index) return;

    setTargetIndex(+e.target.dataset.index);
  }, []);

  return (
    <StyledAlbum
      direction={direction}
      width={width}
      height={height}
      interval={interval}
      count={photos.length - 1}
      onClick={onChangePhoto}
    >
      {photos.map((photo, index) => (
        <StyledFigure
          key={index}
          direction={direction}
          width={width}
          height={height}
          interval={interval}
          index={index}
          targetIndex={targetIndex}
        >
          <img src={photo.url} />
          <figcaption data-index={index}>
            <span>{photo.caption}</span>
          </figcaption>
        </StyledFigure>
      ))}
    </StyledAlbum>
  );
};

export default Album;
