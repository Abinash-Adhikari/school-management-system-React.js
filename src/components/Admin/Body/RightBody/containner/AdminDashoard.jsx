import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import Chart from "../chart/Chart";
export default function AdminDashoard() {
  var student = 2000;
  var teacher = 150;
  var parents = 1950;
  var earning = 221950;
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="admin-dashboard">
        <div className="main-header">
          <h3>Admin Dashboard</h3>
        </div>
        <div className="dist-cont">
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Teacher</h4>
              <p>{teacher}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Student</h4>
              <p>{student}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Patents</h4>
              <p>{parents}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Earning</h4>
              <p>{earning}</p>
            </div>
          </div>
        </div>
        <div className="datas m-4">
          <div className="calendar bg-white m-2 px-4 pb-4">
            <h4 className="date text-center m-2 p-2">Today's Date</h4>
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="analysis bg-white m-2 px-4">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
