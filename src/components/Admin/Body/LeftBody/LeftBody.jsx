import React, { useState } from "react";
import Dashboard from "./leftbody-content/Dashboard";
import Student from "./leftbody-content/Student";
import Teacher from "./leftbody-content/Teacher";
import "./leftbody.css";

export default function LeftBody() {
  const [dashboard, setDashboard] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [cssProperty, setCssProperty] = useState("btn-same1");
  const [cssProperty1, setCssProperty1] = useState("btn-same1");
  const [cssProperty2, setCssProperty2] = useState("btn-same1");

  const repFunction = () => {
    if (dashboard) {
      setDashboard(!dashboard);
    }
    if (teacher) {
      setTeacher(!teacher);
    }
    if (student) {
      setStudent(!student);
    }
  };
  return (
    <div className="m-2">
      <div className="buttons-group">
        <div className="dashboard m-2">
          <button
            className={cssProperty}
            onClick={() => {
              setDashboard(!dashboard);
              if (teacher && !dashboard) {
                setTeacher(!teacher);
              }
              if (student && !dashboard) {
                setStudent(!student);
              }
              setShow1(!show1);
              setCssProperty1("btn-same1");
              setCssProperty2("btn-same1");
              setCssProperty("btn-same1 btn-active");
            }}
          >
            <h5>
              {" "}
              <i className="fas fa-chart-bar"></i> Dashboard
            </h5>
            <div className="show-center">
              {show1 ? (
                <i className="fas fa-sort-up "></i>
              ) : (
                <i className="fas fa-sort-down "></i>
              )}
            </div>
          </button>
          {dashboard && <Dashboard />}
        </div>
        <div className="teacher m-2">
          <button
            className={cssProperty1}
            onClick={() => {
              setTeacher(!teacher);
              if (dashboard && !teacher) {
                setDashboard(!dashboard);
              }
              if (student && !teacher) {
                setStudent(!student);
              }
              setShow2(!show2);
              setCssProperty("btn-same1");
              setCssProperty2("btn-same1");
              setCssProperty1("btn-same1 btn-active");
            }}
          >
            <h5>
              {" "}
              <i className="fas fa-chalkboard-teacher"></i> Teacher
            </h5>
            <div className="show-center">
              {show2 ? (
                <i className="fas fa-sort-up "></i>
              ) : (
                <i className="fas fa-sort-down "></i>
              )}
            </div>
          </button>
          {teacher && <Teacher />}
        </div>
        <div className="student m-2">
          <button
            className={cssProperty2}
            onClick={() => {
              setStudent(!student);
              if (dashboard && !student) {
                setDashboard(!dashboard);
              }
              if (teacher && !student) {
                setTeacher(!teacher);
              }
              setShow3(!show3);
              setCssProperty("btn-same1");
              setCssProperty1("btn-same1");
              setCssProperty2("btn-same1 btn-active");
            }}
          >
            <h5>
              {" "}
              <i className="fas fa-user-graduate"></i> Student
            </h5>
            <div className="show-center">
              {show3 ? (
                <i className="fas fa-sort-up "></i>
              ) : (
                <i className="fas fa-sort-down "></i>
              )}
            </div>
          </button>
          {student && <Student />}
        </div>
        <div className="parent m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-user-friends"></i> Parent
            </h5>
          </button>
        </div>
        <div className="library m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-book"></i> Libary
            </h5>
          </button>
        </div>
        <div className="account m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-money-check-alt"></i> Account
            </h5>
          </button>
        </div>
        <div className="class m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-pen-nib"></i> Class
            </h5>
          </button>
        </div>
        <div className="subject m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-address-book"></i> Subject
            </h5>
          </button>
        </div>
        <div className="class-routine m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-calendar-alt"></i> Class Routine
            </h5>
          </button>
        </div>
        <div className="attendance m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-fist-raised"></i> Attendance
            </h5>
          </button>
        </div>
        <div className="exam m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-signal"></i> Exam
            </h5>
          </button>
        </div>
        <div className="transport m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-bus"></i> Transport
            </h5>
          </button>
        </div>
        <div className="hostel m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-hotel"></i> Hostel
            </h5>
          </button>
        </div>
        <div className="notice m-2">
          <button className="btn-same1" onClick={repFunction}>
            <h5>
              {" "}
              <i className="fas fa-flag"></i> Notice
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
}
