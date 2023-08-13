import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import MyContext from "./Context/myContext";
import { ThemeProvider, styled } from "styled-components";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import Navbar from "./PageComponents/Navbar";
import { Footer } from "./PageComponents/Footer";

const MainLayout = () => {
  const { currentTheme } = useContext(MyContext);
  let theme = currentTheme === "light-theme" ? LightTheme : DarkTheme;
  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(`${currentTheme}`);
  }, [currentTheme]);
  return (
    <ThemeProvider theme={theme}>
      <StyledMainLayout>
        <Navbar />
        <StyledBody className="main-body">
          <Outlet />
        </StyledBody>
        <Footer/>
      </StyledMainLayout>
    </ThemeProvider>
  );
};

const StyledBody = styled.section`
  min-height: calc(100vh - 6rem);
`;

const StyledMainLayout = styled.section`
  min-height: 100vh;
`;

export default MainLayout;
