import React from "react";
import "./rightbody.css";
import "react-calendar/dist/Calendar.css";
import AdminDashoard from "./containner/AdminDashoard";
import { Routes, Route } from "react-router-dom";
import AddTeacher from "./containner/Teacher/addTeacher/AddTeacher";
import TeacherDetails from "./containner/Teacher/teacherDetails/TeacherDetails";
import TeacherDashboard from "./containner/Teacher/TeacherDashboard";
export default function RightBody() {
  return (
    <div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<AdminDashoard />} />
          <Route path="/teacherDashboard" element={<TeacherDashboard />} />
          <Route
            path="/studentDashboard"
            element={<h1>Under Constructuion</h1>}
          />
          <Route
            path="/parentDashboard"
            element={<h1>Under Constructuion </h1>}
          />
          <Route path="/allTeacher" element={""} />
          <Route path="/addTeacher" element={<AddTeacher />} />
          <Route path="/teacherDetails" element={<TeacherDetails />} />
        </Routes>
      </div>
    </div>
  );
}
