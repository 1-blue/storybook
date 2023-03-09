// component
import SearchInput from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/SearchInput",
  component: SearchInput,

  args: {
    keywords: [],
    size: "md",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Fetching = Template.bind({});
Fetching.args = {
  isFetching: true,
};

export const Keyword = Template.bind({});
Keyword.args = {
  keywords: [
    "나의 해방일지",
    "슬기로운 의사생활",
    "날씨가 좋으면 찾아가겠어요",
    "더 글로리",
    "이번 생은 처음이라",
    "환혼",
    "비밀의 숲",
    "시그널",
    "대충 아무거나",
  ],
};
