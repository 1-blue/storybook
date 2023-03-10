import { useCallback } from "react";

// style
import { StyledKeywordSkeleton, StyledTodoSkeleton } from "./style";

// type
import type { Size } from "@src/@types";
type Type = "keyword" | "todoList";
export type Props = {
  size?: Size;
  type: Type;
};

/** 2023/03/09 - 스켈레톤 UI 컴포넌트 - by 1-blue */
const Skeleton = ({ size = "md", type }: Props) => {
  /** 2023/03/09 - UI 종류에 따른 컴포넌트 제작 - by 1-blue */
  const getSkeleton = useCallback(() => {
    switch (type) {
      case "keyword":
        return (
          <StyledKeywordSkeleton size={size}>
            {Array(6)
              .fill(null)
              .map((v, i) => (
                <li key={i}>
                  <div />
                  <div />
                </li>
              ))}
          </StyledKeywordSkeleton>
        );
      case "todoList":
        return (
          <StyledTodoSkeleton>
            <div className="header">
              <div className="header-left" />
              <div className="header-center" />
              <div className="header-right" />
            </div>
            <div className="body">
              <div />
              <div />
              <div />
              <div />
            </div>
          </StyledTodoSkeleton>
        );
    }
  }, [type, size]);

  return <>{getSkeleton()}</>;
};

export default Skeleton;
