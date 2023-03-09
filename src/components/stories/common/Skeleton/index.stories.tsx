// component
import Skeleton from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/Skeleton",
  component: Skeleton,

  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Keyword = Template.bind({});
Keyword.args = {
  type: "keyword",
};
