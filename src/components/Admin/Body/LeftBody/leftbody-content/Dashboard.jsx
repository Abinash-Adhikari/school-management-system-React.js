import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [active1, setActive1] = useState("btn-same");
  const [active2, setActive2] = useState("btn-same");
  const [active3, setActive3] = useState("btn-same");
  const [active4, setActive4] = useState("btn-same");
  return (
    <div>
      <div className="dashboard-buttons">
        <div className="same admin">
          <Link className="td-none" to="/">
            <button
              className={active1}
              onClick={() => {
                if (setActive2 !== "btn-same") {
                  setActive2("btn-same");
                }
                if (setActive3 !== "btn-same") {
                  setActive3("btn-same");
                }
                if (setActive4 !== "btn-same") {
                  setActive4("btn-same");
                }
                setActive1("btn-same btn-active");
              }}
            >
              <p>
                <i className="fas fa-angle-right"></i> Admin
              </p>
            </button>
          </Link>
        </div>
        <div className="same teacher">
          <Link to="teacherDashboard" className="td-none">
            <button
              className={active2}
              onClick={() => {
                if (setActive1 !== "btn-same") {
                  setActive1("btn-same");
                }
                if (setActive3 !== "btn-same") {
                  setActive3("btn-same");
                }
                if (setActive4 !== "btn-same") {
                  setActive4("btn-same");
                }
                setActive2("btn-same btn-active");
              }}
            >
              <p>
                <i className="fas fa-angle-right"></i> Teacher
              </p>
            </button>
          </Link>
        </div>
        <div className="same student">
          <Link className="td-none" to="/studentDashboard">
            <button
              className={active3}
              onClick={() => {
                if (setActive1 !== "btn-same") {
                  setActive1("btn-same");
                }
                if (setActive2 !== "btn-same") {
                  setActive2("btn-same");
                }
                if (setActive4 !== "btn-same") {
                  setActive4("btn-same");
                }
                setActive3("btn-same btn-active");
              }}
            >
              <p>
                <i className="fas fa-angle-right"></i> Student
              </p>
            </button>
          </Link>
        </div>
        <div className="same parent">
          <Link className="td-none" to="/parentDashboard">
            <button
              className={active4}
              onClick={() => {
                if (setActive1 !== "btn-same") {
                  setActive1("btn-same");
                }
                if (setActive2 !== "btn-same") {
                  setActive2("btn-same");
                }
                if (setActive3 !== "btn-same") {
                  setActive3("btn-same");
                }
                setActive4("btn-same btn-active");
              }}
            >
              <p>
                <i className="fas fa-angle-right"></i> Parent
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
