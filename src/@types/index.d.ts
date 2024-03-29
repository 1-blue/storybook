/** 2023/03/03 -  상태 - by 1-blue */
export type State = "pending" | "fulfilled" | "rejected";

/** 2023/03/03 -  크기 - by 1-blue */
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

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
  | "chevron-up"
  | "sun"
  | "moon"
  | "bars-arrow-down"
  | "bars-arrow-up"
  | "home"
  | "cog-6-tooth"
  | "chat-bubble-bottom-center-text"
  | "bell";

/** 2023/03/18 - 방향 - by 1-blue */
export type Direction = "horizontal" | "vertical";

export * from "./data";
export * from "./navRouter";
