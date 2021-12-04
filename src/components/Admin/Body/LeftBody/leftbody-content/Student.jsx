import React from "react";

export default function Student() {
  return (
    <div>
      <div className="student-buttons">
        <div className="same admission">
          <button className="btn-same">
            <p>
              <i className="fas fa-angle-right"></i> Admission
            </p>
          </button>
        </div>
        <div className="same add-teacher">
          <button className="btn-same">
            <p>
              <i className="fas fa-angle-right"></i> Student Detail
            </p>
          </button>
        </div>
        <div className="same teacher-detail">
          <button className="btn-same">
            <p>
              <i className="fas fa-angle-right"></i> Student Promotion
            </p>
          </button>
        </div>
        <div className="same teacher-payment">
          <button className="btn-same">
            <p>
              <i className="fas fa-angle-right"></i> Cancel Admission
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
