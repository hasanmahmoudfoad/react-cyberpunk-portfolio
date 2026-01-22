import React from "react";
import styels from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar/>
      <main className="container-fluid pt-5">
        <Outlet></Outlet>
      </main>
    </>
  );
}
