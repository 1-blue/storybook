import { useEffect, useRef, useState } from "react";

// type
import type { MutableRefObject, Dispatch, SetStateAction } from "react";
type UseCloseReturnType<T extends HTMLElement> = [
  boolean,
  MutableRefObject<T | null>,
  Dispatch<SetStateAction<boolean>>
];

/**
 * 2023/03/06 - 외부 클릭 시 닫는 훅 - by 1-blue
 * @returns [보여줄지여부 state, 컨테이너 ref, 보여줄지여부 setState]
 */
const useClose = <T extends HTMLElement>(): UseCloseReturnType<T> => {
  /** 2023/03/06 - 보여줄지 여부 - by 1-blue */
  const [show, setShow] = useState(false);

  /** 2023/03/06 - container ref - by 1-blue */
  const containerRef = useRef<null | T>(null);

  /** 2023/03/06 - 외부 클릭 시 닫기 이벤트 등록 - by 1-blue */
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      // 클릭 이벤트 발생지가 "element"인지 확인
      if (!(e.target instanceof HTMLElement)) return;

      /**
       * 현재 열려있고, 컨테이너를 포함한 엘리먼트가 아니라면
       * 즉, 외부를 클릭한다면 닫기
       */
      if (
        show &&
        (!containerRef.current || !containerRef.current.contains(e.target))
      ) {
        setShow(false);
      }
    };

    // 닫기 이벤트 등록
    document.addEventListener("click", handleOutsideClose);

    // 닫기 이벤트 해제
    return () => document.removeEventListener("click", handleOutsideClose);
  }, [show]);

  return [show, containerRef, setShow];
};

export default useClose;
