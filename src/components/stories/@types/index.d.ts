/** 2023/03/03 -  상태 - by 1-blue */
export type State = "pending" | "fulfilled" | "rejected";

/** 2023/03/03 -  크기 - by 1-blue */
export type Size = "tiny" | "small" | "medium" | "large";

/** 2023/03/04 - 형태 - by 1-blue */
export type Shape = "primary" | "secondary" | "tertiary";

/** 2023/03/03 - 아이콘 형태 - by 1-blue */
export type IconShape =
  | "search"
  | "trash"
  | "check-circle"
  | "star"
  | "ellipsis-horizontal"
  | "chevron-down"
  | "chevron-up";

export * from "./todo";
