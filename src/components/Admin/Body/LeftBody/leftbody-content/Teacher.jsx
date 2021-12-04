import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Teacher() {
  const [active1, setActive1] = useState("btn-same");
  const [active2, setActive2] = useState("btn-same");
  const [active3, setActive3] = useState("btn-same");
  const [active4, setActive4] = useState("btn-same");
  return (
    <div>
      <div className="teacher-buttons">
        <div className="same all-teacher">
          <Link className="td-none" to="/allTeacher">
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
                <i className="fas fa-angle-right"></i> All teacher
              </p>
            </button>
          </Link>
        </div>
        <div className="same add-teacher">
          <Link className="td-none" to="/addTeacher">
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
                <i className="fas fa-angle-right"></i> Add Teacher
              </p>
            </button>
          </Link>
        </div>
        <div className="same teacher-detail">
          <Link className="td-none" to="/teacherDetails">
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
                <i className="fas fa-angle-right"></i> Teacher Details
              </p>
            </button>
          </Link>
        </div>
        <div className="same teacher-payment">
          <Link className="td-none" to="/teacherPayment">
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
                <i className="fas fa-angle-right"></i> Teacher Payment
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
