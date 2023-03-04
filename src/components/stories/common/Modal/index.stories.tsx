// component
import Modal from "./index";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Common/Modal",
  component: Modal,

  args: {
    title: "모달 제목",
    contents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste ab nihil. Ducimus laboriosam, quidem consequatur a quo assumenda veritatis officiis illum illo tenetur nulla, exercitationem praesentium eum ex dignissimos.",
    shape: "tertiary",
    size: "medium",
    onCancel: undefined,
    onConfirm: undefined,
  },

  argTypes: {
    title: {
      control: { type: "text" },
    },
    contents: {
      control: { type: "text" },
    },
    shape: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: "select" },
      options: ["tiny", "small", "medium", "large"],
    },
    onCancel: {
      control: { type: null },
    },
    onConfirm: {
      control: { type: null },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const ModalWithButton = Template.bind({});
ModalWithButton.args = {
  onCancel() {
    console.log("취소버튼 클릭");
  },
  onConfirm() {
    console.log("확인버튼 클릭");
  },
};
