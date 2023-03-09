import { useCallback, useState } from "react";

// hook
import useClose from "@src/hooks/useClose";

// component
import Icon from "@src/components/stories/common/Icon";
import Skeleton from "@src/components/stories/common/Skeleton";

// style
import StyledSearchInput from "./style";

// type
import type { ChangeEventHandler, FormEventHandler } from "react";
import type { Size } from "@src/@types";
export type Props = {
  size: Size;
  keywords: string[];
  isFetching?: boolean;
};

/** 2023/03/09 - 검색창 및 추천 검색어 컴포넌트 - by 1-blue */
const SearchInput = ({ size = "md", keywords, isFetching }: Props) => {
  /** 2023/03/09 - 검색어 - by 1-blue */
  const [text, setText] = useState("");
  /** 2023/03/09 - 외부 클릭 시 추천 검색어 닫기 - by 1-blue */
  const [show, containerRef, setShow] = useClose<HTMLFormElement>();

  /** 2023/03/09 - 검색어 변경 핸들러 - by 1-blue */
  const onChangeText: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setText(e.target.value),
    []
  );
  /** 2023/03/09 - 검색어 제출 핸들러 - by 1-blue */
  const onSearch: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();

      console.log(text);
    },
    [text]
  );

  return (
    <StyledSearchInput onSubmit={onSearch} size={size} ref={containerRef}>
      <section>
        <input
          type="search"
          value={text}
          onChange={onChangeText}
          onClick={() => setShow(true)}
        />
        <button type="submit">
          <Icon shape="search" size={size} minSize="sm" maxSize="md" />
        </button>
      </section>

      {!isFetching && show && keywords.length > 0 && text.trim().length > 0 && (
        <ul className="keyword">
          {keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      )}

      {isFetching && <Skeleton size={size} type="keyword" />}
    </StyledSearchInput>
  );
};

export default SearchInput;
