// component
import Icon from "./index";

// style
import { StyledAllIconContainer } from "./style";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

// type
import type { Props } from ".";
type IconShape = Props[keyof Pick<Props, "shape">];
const shape: IconShape[] = ["search", "trash", "check-circle", "star"];

export default {
  /** 스토리북 앱의 사이드바에서 컴포너트를 참조하는 방법 */
  title: "Common/Icon",

  /** 해당 컴포넌트 */
  component: Icon,

  /** 기본 "props" 지정 */
  args: {
    shape: "search",
    size: "medium",
    fill: false,
    color: "#000",
    hover: "#3b82f6",
  },

  /** 아이콘 컨트롤러 설정 ( 스토리북 옵션 변경에 대한 설정 ) */
  argTypes: {
    shape: {
      control: "select",
      options: shape,
    },
    size: {
      control: "radio",
      options: ["tiny", "small", "medium", "large"],
    },
    fill: {
      control: "radio",
      options: [false, true],
    },
    color: {
      control: "color",
    },
    hover: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const FillIcon = Template.bind({});
FillIcon.args = {
  fill: true,
};

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  fill: false,
};

export const AllIcon: ComponentStory<typeof Icon> = (args) => (
  <StyledAllIconContainer>
    {shape.map((s) => (
      <li key={s}>
        <NormalIcon {...args} shape={s} />
      </li>
    ))}
  </StyledAllIconContainer>
);
