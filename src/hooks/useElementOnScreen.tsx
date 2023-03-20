/** https://betterprogramming.pub/simple-react-scroll-animations-with-zero-dependencies-b496c1e1c7bd */

import { useEffect, useState } from "react";

// type
import type { RefObject } from "react";
interface Props<T extends HTMLElement> {
  readonly ref: RefObject<T> | null;
  readonly options?: IntersectionObserverInit;
  readonly alreadyInViewport?: boolean;
}

/**
 * 2023/03/18 - 특정 요소 내부로 들어왔는지 감시 - by 1-blue
 * @param ref 감시할 요소의 ref
 * @param rootMargin 감시 범위
 * @returns 뷰포트 내부로 들어왔는지 여부
 */
const useElementOnScreen = <T extends HTMLElement>({
  ref,
  options,
  alreadyInViewport,
}: Props<T>): boolean => {
  /** 2023/03/18 - 뷰포트에 보여지는지 여부 - by 1-blue */
  const [isIntersecting, setIsIntersecting] = useState<boolean>(
    alreadyInViewport || true
  );

  /** 2023/03/18 - "IntersectionObserver API"를 이용한 엘리먼트 감시 - by 1-blue */
  useEffect(() => {
    if (!ref || !ref.current) return;

    // 감시자 생성
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    // 감시 시작
    observer.observe(ref.current);

    // 감시 종료 "|| undefined"는 "useEffect()"의 반환 값으로 인한 타입 문제로 인해 작성
    return () => (ref.current && observer.unobserve(ref.current)) || undefined;
  }, []);

  return isIntersecting;
};

export default useElementOnScreen;
