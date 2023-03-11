import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// hook
import useScrollDirection from "@src/hooks/useScrollDirection";

// style
import StyledNavBar, { StyledLink } from "./style";

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

/** 2023/03/11 - 상단에 붙은 NarBar ( 데스크탑 전용 ) - by 1-blue */
const TopNavBar = ({ routes }: Props) => {
  /** 2023/03/11 - 현재 path - by 1-blue */
  const { pathname } = useLocation();
  /** 2023/03/11 - 마지막 스크롤 방향 - by 1-blue */
  const [isUp] = useScrollDirection();

  /**
   * 2023/03/11 - 네비게이션 바의 크기만큼 "body"에 패딩 부여 - by 1-blue
   * ( 좋은 방법인지 모르겠음 )
   **/
  useEffect(() => {
    document.body.style.paddingTop = "46.19px";
  }, []);

  return (
    <StyledNavBar isUp={isUp}>
      {/* left */}
      <li className="router-left">
        {routes.left.map(({ path, name }) => (
          <StyledLink key={path} to={path} isCurrentPath={path === pathname}>
            {name}
          </StyledLink>
        ))}
      </li>

      {/* center */}
      <li className="router-center">
        {routes.center.map(({ path, name }) => (
          <StyledLink key={path} to={path} isCurrentPath={path === pathname}>
            {name}
          </StyledLink>
        ))}
      </li>

      {/* right */}
      <li className="router-right">
        {routes.right.map(({ path, name }) => (
          <StyledLink key={path} to={path} isCurrentPath={path === pathname}>
            {name}
          </StyledLink>
        ))}
      </li>
    </StyledNavBar>
  );
};

export default TopNavBar;
