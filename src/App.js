import "./App.css";
import { createContext } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useTodo } from "./context/appContext";

export const ThemeContext = createContext(null);

function App() {
  const { user } = useTodo();

  return (
    <Routes>
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;