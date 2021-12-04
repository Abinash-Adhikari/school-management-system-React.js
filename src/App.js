import React from "react";
import Navbar from "./components/Admin/Navbar/Navbar";
import Content from "./components/Admin/Body/Content";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="bg-All">
      <BrowserRouter>
        <div>
          <Navbar />
          <Content />
        </div>
      </BrowserRouter>
    </div>
  );
}
