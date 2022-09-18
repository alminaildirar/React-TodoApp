import "./App.css";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useTodo } from "./context/appContext";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const { user } = useTodo();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home theme={theme} toggleTheme={toggleTheme} />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            user ? <Home theme={theme} toggleTheme={toggleTheme} /> : <Login />
          }
        />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
