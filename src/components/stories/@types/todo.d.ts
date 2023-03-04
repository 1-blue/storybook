import type { Size, State } from ".";

/** 2023/03/03 - 할 일 - by 1-blue */
export type Todo = {
  idx: number;
  title: string;
  contents: string;
  state: State;
  size: Size;
};
