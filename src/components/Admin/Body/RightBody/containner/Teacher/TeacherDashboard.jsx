import React, { useState } from "react";
import Calendar from "react-calendar";
import Chart from "../../chart/Chart";
import TimeTable from "../../timeTable/TimeTable";
export default function TeacherDashboard() {
  var student = 80;
  var earning = 221950;
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="teacher-dashboard">
        <div className="main-header">
          <h3>Teaacher Dashboard</h3>
        </div>
        <div className="dist-cont">
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Total Earning</h4>
              <p>{earning}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Total Student</h4>
              <p>{student}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Taken Earning</h4>
              <p>{earning}</p>
            </div>
          </div>
          <div className="cont bg-white m-4 px-3">
            <div className="cont-logo m-2">
              <i class="fas fa-rupee-sign"></i>
            </div>
            <div className="cont-text m-2 mt-4">
              <h4>Remaning Earning</h4>
              <p>{earning}</p>
            </div>
          </div>
        </div>
        <div className="time-table m-4 bg-white p-3">
          <TimeTable />
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
