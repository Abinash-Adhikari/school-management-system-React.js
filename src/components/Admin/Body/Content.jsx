import React from "react";
import "./Content.css";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";
export default function Content() {
  return (
    <>
      <div className="content">
        <div className="left-part">
          <LeftBody />
        </div>
        <div className="right-part">
          <RightBody />
        </div>
      </div>
    </>
  );
}
