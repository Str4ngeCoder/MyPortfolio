import { useState } from "react";
import MyContext from "./myContext";

const MyState = (props) => {
  const [currentTheme, setCurrentTheme] = useState("light-theme");
  const toggleTheme = () => {
    currentTheme == "light-theme"
      ? setCurrentTheme("dark-theme")
      : setCurrentTheme("light-theme");
  };
  const isLightTheme = currentTheme === "light-theme";
  return (
    <MyContext.Provider value={{ currentTheme, toggleTheme, isLightTheme}}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
