// component
import Scroll from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Animation/Scroll",
  component: Scroll,
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args) => <Scroll {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.argTypes = {};
