import { useCallback, useEffect, useRef, useState } from "react";

// component
import Icon from "@src/components/stories/common/Icon";

// style
import StyledDropdown from "./style";

// type
type Props = {
  title?: string;
  isOption?: boolean;
  list: string[];
};

const Dropdown = ({ title, isOption, list }: Props) => {
  /** 2023/03/04 - 드롭다운 보여줄지 여부 - by 1-blue */
  const [show, setShow] = useState(false);
  /** 2023/03/04 - 드롭다운 ref - by 1-blue */
  const dropdownRef = useRef<null | HTMLUListElement>(null);

  /** 2023/03/04 - toggle dropdown - by 1-blue */
  const toggleDropdown = useCallback(() => setShow((prev) => !prev), []);

  /** 2023/03/04 - 드롭다운 외부 클릭 시 닫기 이벤트 등록 - by 1-blue */
  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      // 클릭 이벤트 발생지가 "element"인지 확인
      if (!(e.target instanceof HTMLElement)) return;

      /**
       * 현재 열려있고, 드롭다운이 포함한 엘리먼트가 아니라면
       * 즉, 드롭다운 외부를 클릭한다면 닫기
       */
      if (
        show &&
        (!dropdownRef.current || !dropdownRef.current.contains(e.target))
      ) {
        setShow(false);
      }
    };

    // 드롭다운 닫기 이벤트 등록
    document.addEventListener("click", handleOutsideClose);

    // 드롭다운 닫기 이벤트 해제
    return () => document.removeEventListener("click", handleOutsideClose);
  }, [show]);

  return (
    <StyledDropdown show={show} ref={dropdownRef}>
      {title && (
        <button type="button" onClick={toggleDropdown} data-type="normal">
          <b>{title}</b>
          <Icon
            shape={show ? "chevron-up" : "chevron-down"}
            size="tiny"
            color="#4b5563"
            hover={show ? "#2563eb" : "#60a5fa"}
          />
        </button>
      )}
      {isOption && (
        <button type="button" onClick={toggleDropdown} data-type="option">
          <Icon shape="ellipsis-horizontal" color="#4b5563" hover="#1f2937" />
        </button>
      )}

      {show && (
        <ul>
          {list.map((v) => (
            <li key={v} role="button">
              {v}
            </li>
          ))}
        </ul>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
