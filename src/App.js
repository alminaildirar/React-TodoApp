import "./App.css";
import { createContext, useState } from "react";
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
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={user ? <Home /> : <Login />} />
    </Routes>
  );
}

export default App;