// component
import AnimateToolkit from "@src/components/stories/container/AnimateToolkit";

// style
import StyledScroll from "./style";

// type
interface Props {}

/** 2023/03/20 - 애니메이션 적용 예시 컴포넌트 - by 1-blue */
const Scroll: React.FC<Props> = () => {
  return (
    <StyledScroll>
      <ul>
        <li className="box"></li>
        <li className="box"></li>
        <li className="box"></li>
        <AnimateToolkit.FadeLeft>
          <li className="box">좌측</li>
        </AnimateToolkit.FadeLeft>
        <AnimateToolkit.FadeUp>
          <li className="box">위</li>
        </AnimateToolkit.FadeUp>
        <AnimateToolkit.FadeRight>
          <li className="box">우측</li>
        </AnimateToolkit.FadeRight>
        <AnimateToolkit.FadeDown>
          <li className="box">아래</li>
        </AnimateToolkit.FadeDown>
        <AnimateToolkit.FadeScaleUp>
          <li className="box">커짐</li>
        </AnimateToolkit.FadeScaleUp>
        <AnimateToolkit.FadeScaleDown>
          <li className="box">작아짐</li>
        </AnimateToolkit.FadeScaleDown>
      </ul>
    </StyledScroll>
  );
};

export default Scroll;
