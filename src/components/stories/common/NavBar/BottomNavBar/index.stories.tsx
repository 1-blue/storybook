// component
import BottomNavBar from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Props } from ".";

// routes
const routes: Props["routes"] = {
  left: [{ path: "/", name: "메인", icon: "home" }],
  center: [
    { path: "/movie", name: "메세지", icon: "chat-bubble-bottom-center-text" },
  ],
  right: [
    { path: "/login", name: "알림", icon: "bell" },
    { path: "/signup", name: "설정", icon: "cog-6-tooth" },
  ],
};

export default {
  title: "Common/NavBar/BottomNavBar",
  component: BottomNavBar,

  args: {
    routes,
  },
  argTypes: {
    routes: {
      control: {
        type: null,
      },
    },
  },

  decorators: [
    (Story) => (
      <>
        <Story />

        {/* 스크롤을 위한 영역을 차지할 가짜 데이터 */}
        {Array(10)
          .fill(null)
          .map((v, i) => (
            <div
              key={i}
              style={{
                width: "200px",
                height: "200px",
                margin: "1em",
                background: i % 2 ? "red" : "blue",
              }}
            />
          ))}
      </>
    ),
  ],
} as ComponentMeta<typeof BottomNavBar>;

const Template: ComponentStory<typeof BottomNavBar> = (args) => (
  <BottomNavBar {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
