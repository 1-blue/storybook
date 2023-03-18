// component
import Album from ".";

// type
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Props } from ".";

const photos: Props["photos"] = [
  {
    url: "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg",
    caption: "한가로운 여우",
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228_960_720.jpg",
    caption: "수상한 고슴고치",
  },
  {
    url: "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg",
    caption: "행복한 돌고래",
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_960_720.jpg",
    caption: "심심한 표범",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_960_720.jpg",
    caption: "맑은 눈의 강아지",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_960_720.jpg",
    caption: "그냥 억울한 너구리",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/07/22/22/56/tiger-2530158_960_720.jpg",
    caption: "세상 귀찮은 호랑이",
  },
];

export default {
  title: "Animation/Album",
  component: Album,

  args: {
    photos,
    direction: "vertical",
    width: 320,
    height: 200,
    interval: 40,
  },

  argTypes: {
    direction: {
      control: { type: "radio", options: ["vertical", "horizontal"] },
    },
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
    interval: { control: { type: "number" } },
  },
} as ComponentMeta<typeof Album>;

const Template: ComponentStory<typeof Album> = (args) => <Album {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.argTypes = {};
