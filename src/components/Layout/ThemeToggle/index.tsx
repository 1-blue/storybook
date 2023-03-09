import { useTheme } from "styled-components";

// component
import Icon from "@src/components/stories/common/Icon";

// style
import StyledThemeToggle from "./style";

// type
type Props = {
  onToggleTheme: () => void;
};

/** 2023/03/10 - 테마를 변경하는 버튼 컴포넌트 - by 1-blue */
const ThemeToggle = ({ onToggleTheme }: Props) => {
  const theme = useTheme();

  return (
    <StyledThemeToggle>
      <button type="button" onClick={onToggleTheme}>
        <Icon
          shape={theme.isDark ? "moon" : "sun"}
          color={theme.colors.bgColor}
        />
      </button>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
