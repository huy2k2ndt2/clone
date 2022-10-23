import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserLoginTemplate from "./templates/UserLoginTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="login"
          element={
            <UserLoginTemplate>
              <Login />
            </UserLoginTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
