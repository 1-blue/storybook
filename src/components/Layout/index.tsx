// component
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

// type
type Props = {
  children: React.ReactNode;
  onToggleTheme: () => void;
};

/** 2023/03/10 - 전체 레이아웃을 적용하는 HOC - by 1-blue */
const Layout = ({ children, onToggleTheme }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />

      <ThemeToggle onToggleTheme={onToggleTheme} />
    </>
  );
};

export default Layout;
