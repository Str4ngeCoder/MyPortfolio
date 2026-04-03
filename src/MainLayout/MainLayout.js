import { Outlet } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import MyContext from "../Context/myContext";
import { ThemeProvider, styled } from "styled-components";
import LightTheme from "../LightTheme";
import DarkTheme from "../DarkTheme";
import Navbar from "../PageComponents/Navbar";
import { Footer } from "../PageComponents/Footer";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const currentTheme = useSelector((state) => state.theme.value);
  // const { currentTheme } = useContext(MyContext);
  // // let theme = currentTheme === "light-theme" ? LightTheme : DarkTheme;
  // useEffect(() => {
  //   document.body.classList.remove("dark-theme", "light-theme");
  //   document.body.classList.add(`${currentTheme}`);
  return (
    <ThemeProvider theme={currentTheme === "light-theme" ? LightTheme : DarkTheme}>
      <StyledMainLayout>
        <Navbar />
        <StyledBody className="main-body">
          <Outlet />
        </StyledBody>
        <Footer />
      </StyledMainLayout>
    </ThemeProvider>
  );
};

const StyledBody = styled.section`
  min-height: calc(100dvh - 12rem);
  overflow: hidden;
  margin-top: 6rem;
  display:grid;
`;

const StyledMainLayout = styled.main`
  /* min-height: 100dvh; */
  background-color: ${(props) => props.theme.background};
`;

export default MainLayout;
