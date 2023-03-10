import { MouseEventHandler, useCallback, useState } from "react";

// component
import Todo from "@src/components/stories/TodoList/Todo";

// style
import StyledTodoList from "./style";

// type
import type { Todo as TodoType } from "@src/components/stories/@types";
import Skeleton from "../../common/Skeleton";
type Props = {
  todos: TodoType[];
  isFetching?: boolean;
};

/** 2023/03/10 - TodoList 컴포넌트 - by 1-blue */
const TodoList = ({ todos, isFetching = false }: Props) => {
  /** 2023/03/10 - todo 데이터 복사본 - by 1-blue */
  const [myTodos, setMyTodos] = useState<TodoType[]>(todos);

  /** 2023/03/10 - 완료 체크 핸들러 ( 이벤트 버블링 + dataset ) - by 1-blue */
  const onClickComplete: MouseEventHandler<HTMLUListElement> = useCallback(
    (e) => {
      if (!(e.target instanceof HTMLButtonElement)) return;

      const id = Number(e.target.dataset.id);
      if (isNaN(id)) return;

      setMyTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        )
      );
    },
    []
  );

  return (
    <StyledTodoList onClick={onClickComplete}>
      {isFetching
        ? Array(14)
            .fill(null)
            .map((v, i) => <Skeleton key={i} type="todoList" />)
        : myTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </StyledTodoList>
  );
};

export default TodoList;
