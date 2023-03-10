// component
import Todo from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "TodoList/Todo",
  component: Todo,

  args: {
    todo: {
      id: -1,
      title: "열심히 대충 살기",
      contents:
        "05시 기상\n05시 기상\n05시 기상\n05시 기상\n05시 기상\n05시 기상\n05시 기상",
      isComplete: true,
    },
  },
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Normal = Template.bind({});
