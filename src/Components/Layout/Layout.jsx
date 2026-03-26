import React from "react";
import styels from "./Layout.module.css";
import { Outlet, useLocation  } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
    const location = useLocation();
 const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/projectsGrid":
        return styels.projectsBg;
      case "/Education":
        return styels.educationBg;
      case "/Work":
        return styels.experienceBg;
      default:
        return styels.defaultBg;
    }
  };
  return (
    <>
      <Navbar/>
      <main className={` container-fluid pt-5 ${styels.layout} ${getBackgroundClass()}`}>
        <Outlet></Outlet>
      </main>
    </>
  );
}
