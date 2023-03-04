import path from "path";

// type
import type { StorybookConfig } from "@storybook/core-common";

const config: StorybookConfig = {
  /** 사용할 스토리 파일 위치 및 확장자 */
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],

  /** 애드온(추가 기능) 설정 */
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  /** 사용하는 프레임워크 */
  framework: "@storybook/react",

  /** 스토리북 내부 기능 설정 */
  core: {
    /** Webpack 5 사용 */
    builder: "@storybook/builder-webpack5",
  },

  /** 웹팩 세팅 커스터마이징 */
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          /** 절대 경로 세팅 */
          "@src": path.resolve(__dirname, "..", "src"),
        },
      },
    };
  },

  /** "typescript" 세팅 ( 공식문서에서 제공하는 세팅 ) */
  typescript: {
    /** "fork-ts-checker-webpack-plugin" 사용 여부 ( 별도의 타입 검사 플러그인 ) */
    check: false,

    /** "check" 활성화 시 "fork-ts-checker-webpack-plugin" 옵션 설정 */
    checkOptions: {},

    /** "react-docgen-typescript-plugin" 추가 ( 컴포넌트에서 사용한 타입을 추출해 문서로 만들어주는 도구 ) */
    reactDocgen: "react-docgen-typescript",

    /** "react-docgen-typescript"가 활성화된 경우 옵션 설정 */
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  /** 스토리북 추가 기능 설정 */
  features: {
    storyStoreV7: true,
  },

  /** 로드할 정적 파일 설정 */
  staticDirs: [
    /** 파일 경로 */
  ],
};

module.exports = config;
