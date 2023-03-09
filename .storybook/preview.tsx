import React, { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/shared/global";
import theme, { darkTheme, lightTheme, Theme } from "../src/shared/theme";

// component
import ThemeToggle from "../src/components/Layout/ThemeToggle";

/** global argTypes */
export const argTypes = {};

/** global args */
export const args = {};

/** global decorator */
export const decorators = [
  (Story) => {
    const [isDark, setIsDark] = useState(false);

    /** 2023/03/07 - 현재 테마에 맞는 색상 지정 - by 1-blue */
    const myTheme: Theme = useMemo(
      () => ({
        ...theme,
        colors: {
          ...theme.colors,
          ...(isDark ? darkTheme : lightTheme),
        },
        isDark,
      }),
      [theme, isDark]
    );

    return (
      <ThemeProvider theme={myTheme}>
        <section
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemeToggle onToggleTheme={() => setIsDark((prev) => !prev)} />

          <GlobalStyle />
          <Story />
        </section>
      </ThemeProvider>
    );
  },
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

  backgrounds: {
    default: "gray",
    values: [
      { name: "black", value: "#000" },
      { name: "gray", value: "#888" },
      { name: "white", value: "#fff" },
    ],
  },
};
