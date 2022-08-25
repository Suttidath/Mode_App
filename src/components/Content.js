import React, { useContext } from "react";
import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { ThemeContext } from "../App";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Suttidath Developer</h1>
        <p>DarkMode WorkShop</p>
      </div>
      <img src={theme === "dark" ? dark : light} alt="logo" />
    </main>
  );
};

export default Content;
