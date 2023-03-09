// component
import Dropdown from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/Dropdown",
  component: Dropdown,

  args: {
    size: "md",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["basic", "option"],
    },
    title: {
      control: { type: "none" },
    },
    list: {
      control: { type: "object" },
    },
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  type: "basic",
  title: "일반 드롭다운",
  list: [
    "apple",
    "blue",
    "color",
    "delete",
    "egg",
    "fruits",
    "gravity",
    "home",
    "ip",
    "jungle",
    "king",
    "loading",
    "mouse",
    "notion",
  ],
};
Normal.argTypes = {
  title: {
    control: { type: "text" },
  },
};

export const Option = Template.bind({});
Option.args = {
  type: "option",
  list: ["즐겨찾기", "삭제", "수정", "좋아요", "스토리북"],
};
Option.argTypes = {
  type: {
    control: { type: null },
  },
};
