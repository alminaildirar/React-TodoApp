import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import List from "./components/List";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
