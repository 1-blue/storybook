import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/shared/global";
import theme from "../src/shared/theme";

/** global argTypes */
export const argTypes = {
  /**
   * 사용하는 모든 컴포넌트에 "props"로 "{ theme: 'light' | 'dark' }"를 부여할 수 있는 컨트롤러 설정
   * 추가적으로 컨트롤러는 "select"이고 옵션들 지정 ( "control"의 값들은 정해져 있고, 컨트롤러에 따라서 옵션을 설정할 수 있음 )
   * */
  theme: { control: "select", options: ["light", "dark"] },
};
/** global args */
export const args = {
  /** 모든 컴포넌트에 "props"로 "{ theme: 'dark' }" 부여 */
  theme: "dark",
};
/** global decorator */
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

/** global parameters */
/** 스토리북의 기능과 애드온의 동작을 제어하기 위해 사용 */
export const parameters = {
  /** TODO: 클릭이 되었을 때 스토리북 UI의 Actions 패널에 나타날 콜백을 생성할 수 있도록 도와줌 */
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
