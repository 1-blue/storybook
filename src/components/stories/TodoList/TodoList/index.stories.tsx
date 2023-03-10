// component
import TodoList from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Todo } from "@src/components/stories/@types";
import { getDummyDatas } from "@src/data";

// dummy data
const COUNT = 10;
const dummyDatas = getDummyDatas(COUNT);
const todos: Todo[] = Array(COUNT)
  .fill(null)
  .map((v, i) => ({
    id: i,
    title: dummyDatas[i].title,
    contents: dummyDatas[i].speech,
    isComplete: i % 2 === 0,
  }));

export default {
  title: "TodoList/TodoList",
  component: TodoList,

  args: {
    todos,
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Normal = Template.bind({});

export const Fetcing = Template.bind({});
Fetcing.args = {
  isFetching: true,
};
