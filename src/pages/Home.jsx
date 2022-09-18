import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import ReactSwitch from "react-switch";
import Navbar from "../components/Navbar";

const Home = ({ theme, toggleTheme }) => {
  return (
    <div className="App" id={theme}>
      <Navbar theme={theme} />
      <div className="switch">
        {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          height={36}
          width={72}
          offColor="#012030"
          onColor="#fff"
          offHandleColor="#fff"
          onHandleColor="#012030"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 28,
              }}
            >
              {/* 🌛 */}
              <i className="fa-solid fa-moon"></i>
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 28,
              }}
            >
              {/* 🌞 */}
              <i className="fa-solid fa-sun"></i>
            </div>
          }
        />
      </div>
      <div className="container">
        <div className="todo">
          <Header />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
