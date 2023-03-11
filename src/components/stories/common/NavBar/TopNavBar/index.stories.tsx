// component
import NavBar from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Props } from ".";

// routes
const routes: Props["routes"] = {
  left: [{ path: "/", name: "메인" }],
  center: [{ path: "/movie", name: "영화" }],
  right: [
    { path: "/login", name: "로그인" },
    { path: "/signup", name: "회원가입" },
  ],
};

export default {
  title: "Common/NavBar/TopNavBar",
  component: NavBar,

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
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
