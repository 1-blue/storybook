/** https://betterprogramming.pub/simple-react-scroll-animations-with-zero-dependencies-b496c1e1c7bd */

import { useRef } from "react";

// hook
import useElementOnScreen from "@src/hooks/useElementOnScreen";

// type
import type { CSSProperties, PropsWithChildren } from "react";
interface Props {
  readonly from?: CSSProperties;
  readonly to?: CSSProperties;
  readonly options?: IntersectionObserverInit;
}

/** 2023/03/20 - 애니메이션에 적용할 기본 css 정의 - by 1-blue */
const defaultStyles: CSSProperties = {
  transition: "600ms ease-in-out",
};

/** 2023/03/20 - 직접 정의할 애니메이션 적용 컴포넌트 - by 1-blue */
const Animate: React.FC<PropsWithChildren<Props>> = ({
  from,
  to,
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

/** 2023/03/20 - 점점 나타나면서 내려가는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeLeft: React.FC<PropsWithChildren<Props>> = ({
  from = { opacity: 0, translate: "-20% 0" },
  to = { opacity: 1, translate: "none" },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

/** 2023/03/20 - 점점 나타나면서 올라오는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeUp: React.FC<PropsWithChildren<Props>> = ({
  from = { opacity: 0, translate: "0 20%" },
  to = { opacity: 1, translate: "none" },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

/** 2023/03/20 - 점점 나타나면서 내려가는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeRight: React.FC<PropsWithChildren<Props>> = ({
  from = { opacity: 0, translate: "20% 0" },
  to = { opacity: 1, translate: "none" },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

/** 2023/03/20 - 점점 나타나면서 내려가는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeDown: React.FC<PropsWithChildren<Props>> = ({
  from = { opacity: 0, translate: "0 -20%" },
  to = { opacity: 1, translate: "none" },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

/** 2023/03/20 - 점점 나타나면서 커지는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeScaleUp: React.FC<PropsWithChildren<Props>> = ({
  from = { scale: "0.1", opacity: 0 },
  to = { scale: "1", opacity: 1 },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};
/** 2023/03/20 - 점점 나타나면서 작아지는 애니매이션 적용 컴포넌트 - by 1-blue */
const FadeScaleDown: React.FC<PropsWithChildren<Props>> = ({
  from = { scale: "1.6", opacity: 0 },
  to = { scale: "1", opacity: 1 },
  options,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen({ ref, options });

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
};

interface AnimateToolkitType {
  Animate: typeof Animate;
  FadeLeft: typeof FadeLeft;
  FadeUp: typeof FadeUp;
  FadeRight: typeof FadeRight;
  FadeDown: typeof FadeDown;
  FadeScaleUp: typeof FadeScaleUp;
  FadeScaleDown: typeof FadeScaleDown;
}

/** 2023/03/20 - 애니메이션 적용할 툴킷 컴포넌트 - by 1-blue */
const AnimateToolkit: AnimateToolkitType = {
  Animate,
  FadeLeft,
  FadeUp,
  FadeRight,
  FadeDown,
  FadeScaleUp,
  FadeScaleDown,
};

export default AnimateToolkit;
