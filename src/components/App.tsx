import { useCallback, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// global-setting
import { GlobalStyle } from "@src/shared/global";
import theme, { darkTheme, lightTheme } from "@src/shared/theme";

// layout
import Layout from "@src/components/Layout";

// router
import router from "@src/router";

// type
import type { Theme } from "@src/shared/theme";

/** 2023/03/10 - 각종 "Provider", 스타일, 레이아웃 HOC, 라우팅 적용 컴포넌트 - by 1-blue */
const App = () => {
  /** 2023/03/10 - 현재 테마 - by 1-blue */
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

  /** 2023/03/07 - theme toggle - by 1-blue */
  const onToggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />

      <Layout onToggleTheme={onToggleTheme}>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
