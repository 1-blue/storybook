import { useEffect, useRef, useState } from "react";

// style
import StyledModal from "./style";

// type
import type { Shape, Size } from "@src/components/stories/@types";
export type Props = {
  title: string;
  contents?: string;
  shape?: Shape;
  size?: Size;

  onCancel?: () => void;
  onConfirm?: () => void;
};

const Modal = ({
  title,
  contents,
  shape = "primary",
  size = "medium",
  onCancel,
  onConfirm,
}: Props) => {
  /** 2023/03/04 - 모달 보여줄지 여부 - by 1-blue */
  const [show, setShow] = useState(true);
  /** 2023/03/04 - 모달 ref - by 1-blue */
  const modalRef = useRef<null | HTMLUListElement>(null);

  /** 2023/03/04 - ( 버튼이 없다면 ) 모달 외부 클릭 시 닫기 이벤트 등록 - by 1-blue */
  useEffect(() => {
    if (onCancel && onConfirm) return;

    const handleOutsideClose = (e: MouseEvent) => {
      // 클릭 이벤트 발생지가 "element"인지 확인
      if (!(e.target instanceof HTMLElement)) return;

      /**
       * 현재 열려있고, 모달이 포함한 엘리먼트가 아니라면
       * 즉, 모달 외부를 클릭한다면 닫기
       */
      if (show && (!modalRef.current || !modalRef.current.contains(e.target))) {
        setShow(false);
      }
    };

    // 모달 닫기 이벤트 등록
    document.addEventListener("click", handleOutsideClose);

    // 모달 닫기 이벤트 해제
    return () => document.removeEventListener("click", handleOutsideClose);
  }, [show]);

  return (
    <>
      {show && (
        <StyledModal shape={shape} size={size}>
          <section ref={modalRef}>
            <h4>{title}</h4>
            {contents && <p>{contents}</p>}

            {(onCancel || onConfirm) && (
              <div>
                {onCancel && (
                  <button type="button" onClick={onCancel}>
                    취소
                  </button>
                )}
                {onConfirm && (
                  <button type="button" onClick={onConfirm}>
                    확인
                  </button>
                )}
              </div>
            )}
          </section>
        </StyledModal>
      )}
    </>
  );
};

export default Modal;
