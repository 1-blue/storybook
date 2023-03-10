// component
import Icon from "@src/components/stories/common/Icon";
import Dropdown from "@src/components/stories/common/Dropdown";

// style
import StyledTodo from "./style";

// type
import type { Todo as TodoType } from "@src/components/stories/@types";
type Props = {
  todo: TodoType;
};

/** 2023/03/10 - Todo 컴포넌트 - by 1-blue */
const Todo = ({ todo }: Props) => {
  return (
    <StyledTodo>
      <div className="header">
        <button type="button" data-id={todo.id}>
          <Icon shape="check-circle" fill={todo.isComplete} reverse />
        </button>
        <h4>{todo.title}</h4>
        <Dropdown type="option" list={["즐겨찾기", "제거"]} reverse />
      </div>
      <p>{todo.contents}</p>
    </StyledTodo>
  );
};

export default Todo;
