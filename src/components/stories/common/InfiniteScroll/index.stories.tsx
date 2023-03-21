// component
import InfiniteScroll from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/InfiniteScroll",
  component: InfiniteScroll,
} as ComponentMeta<typeof InfiniteScroll>;

const Template: ComponentStory<typeof InfiniteScroll> = (args) => (
  <InfiniteScroll {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.argTypes = {};
