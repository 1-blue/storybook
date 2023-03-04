// component
import Dropdown from "./index";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/Dropdown",
  component: Dropdown,

  argTypes: {
    title: {
      control: { type: null },
    },
    isOption: {
      control: { type: null },
    },
    list: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
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
  isOption: true,
  list: ["즐겨찾기", "삭제", "수정", "좋아요", "스토리북"],
};
