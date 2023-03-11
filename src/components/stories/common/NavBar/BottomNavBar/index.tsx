import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// component
import Icon from "@src/components/stories/common/Icon";

// hook
import useScrollDirection from "@src/hooks/useScrollDirection";

// style
import StyledBottomNavBar, { StyledLink } from "./style";

// type
import type { NavRouter } from "@src/@types";
type Routes = {
  left: NavRouter[];
  center: NavRouter[];
  right: NavRouter[];
};
export type Props = {
  routes: Routes;
};

/** 2023/03/11 - 하단에 붙은 NarBar ( 모바일 전용 ) - by 1-blue */
const BottomNavBar = ({ routes }: Props) => {
  /** 2023/03/11 - 현재 path - by 1-blue */
  const { pathname } = useLocation();
  /** 2023/03/11 - 마지막 스크롤 방향 - by 1-blue */
  const [isUp, isBottom] = useScrollDirection();

  /**
   * 2023/03/11 - 네비게이션 바의 크기만큼 "body"에 패딩 부여 - by 1-blue
   * ( 좋은 방법인지 모르겠음 )
   **/
  useEffect(() => {
    document.body.style.paddingBottom = "64px";
  }, []);

  return (
    <StyledBottomNavBar isUp={isUp} isBottom={isBottom}>
      {routes.left.map(({ path, name, icon }) => (
        <StyledLink key={path} to={path} isCurrentPath={pathname === path}>
          {icon && <Icon shape={icon} size="sm" fill={pathname === path} />}
          <span>{name}</span>
        </StyledLink>
      ))}

      {routes.center.map(({ path, name, icon }) => (
        <StyledLink key={path} to={path} isCurrentPath={pathname === path}>
          {icon && <Icon shape={icon} size="sm" fill={pathname === path} />}
          <span>{name}</span>
        </StyledLink>
      ))}

      {routes.right.map(({ path, name, icon }) => (
        <StyledLink key={path} to={path} isCurrentPath={pathname === path}>
          {icon && <Icon shape={icon} size="sm" fill={pathname === path} />}
          <span>{name}</span>
        </StyledLink>
      ))}
    </StyledBottomNavBar>
  );
};

export default BottomNavBar;
