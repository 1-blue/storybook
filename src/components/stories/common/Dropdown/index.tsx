import { useCallback } from "react";

// hook
import useClose from "@src/hooks/useClose";

// component
import Icon from "@src/components/stories/common/Icon";

// style
import StyledDropdown from "./style";

// type
import type { Size } from "@src/@types";
type Type = "basic" | "option";
export type Props = {
  type?: Type;
  title?: string;
  list: string[];
  size?: Size;
};

/** 2023/03/10 - 드롭다운 컴포넌트 - by 1-blue */
const Dropdown = ({ type = "basic", title, list, size = "md" }: Props) => {
  /** 2023/03/09 - 외부 클릭 시 드롭다운 닫기 - by 1-blue */
  const [show, containerRef, setShow] = useClose<HTMLUListElement>();
  /** 2023/03/04 - toggle dropdown - by 1-blue */
  const toggleDropdown = useCallback(() => setShow((prev) => !prev), []);

  /** 2023/03/10 - 드롭다운 종류에 따른 컴포넌트 제작 - by 1-blue */
  const getDropDown = useCallback(() => {
    switch (type) {
      case "basic":
        return (
          <button type="button" onClick={toggleDropdown} data-type="normal">
            <b>{title}</b>
            <Icon
              shape={show ? "chevron-up" : "chevron-down"}
              size={size}
              minSize="sm"
              maxSize="md"
            />
          </button>
        );
      case "option":
        return (
          <button type="button" onClick={toggleDropdown} data-type="option">
            <Icon
              shape="ellipsis-horizontal"
              size={size}
              minSize="md"
              maxSize="lg"
            />
          </button>
        );
    }
  }, [type, title, show, size]);

  return (
    <StyledDropdown show={show} size={size} ref={containerRef}>
      {getDropDown()}

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
