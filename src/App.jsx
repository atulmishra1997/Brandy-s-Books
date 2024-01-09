import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import { AuthContext } from "./contects/AuthProvider";

function App() {
  return (
    <>
      <Navbar />
        <Outlet />
      <MyFooter />
    </>
  );
}

export default App;
